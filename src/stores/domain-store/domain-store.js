import { types, flow } from "mobx-state-tree";

import { rootStore } from "../root-store";

import getMovieWithGenre from "../../network/apis/get-movie-with-genre";
import getTopRated from "../../network/apis/get-top-rated";
import getTrending from "../../network/apis/get-trending";
import getNetflixOriginals from "../../network/apis/get-originals";

import { GENRE_CODE, TMDB_IMAGE_PATH } from "../../network/constants";
import { HomeModel } from "./constants";

const domain = types
  .model("domain", {
    home: HomeModel,
  })
  .actions((self) => {
    const { ui } = rootStore;

    const getBannerDetails = flow(function* () {
      try {
        ui.handleLoader("banner", true);
        const data = yield getNetflixOriginals();

        const { results = [] } = data;
        // use any item from the list as banner
        if (results.length) {
          const bannerIndex = Math.floor(Math.random() * results.length - 1);
          const bannerData = results[bannerIndex];

          if (bannerData) {
            const {
              backdrop_path = "",
              name = "",
              overview = "",
              poster_path = "",
              title = "",
              original_name = "",
            } = bannerData;
            self.home.banner = {
              backdropPath: `${TMDB_IMAGE_PATH}/${backdrop_path}`,
              name: name || original_name || title,
              overview,
              posterPath: `${TMDB_IMAGE_PATH}/${poster_path}`,
            };
          }
        }
      } catch (err) {
        console.log("Banner error :: ", err);
      } finally {
        ui.handleLoader("banner", false);
      }
    });

    const formatCategoryData = (itemList = []) => {
      return itemList.map((item) => {
        const {
          backdrop_path = "",
          poster_path = "",
          title = "",
          name = "",
          original_title = "",
          overview = "",
        } = item;

        return {
          backdropPath: `${TMDB_IMAGE_PATH}/${backdrop_path}`,
          posterPath: `${TMDB_IMAGE_PATH}/${poster_path}`,
          name: name || title || original_title,
          overview: overview,
        };
      });
    };

    const getHomeScreenData = flow(function* () {
      try {
        const DATA_ORDER = [
          "Top Rated",
          "Trending",
          "Action",
          "Comedy",
          "Horror",
          "Romance",
          "Documentaries",
        ];
        ui.handleLoader("home", true);
        const topRatedPromise = getTopRated();
        const trendingPromise = getTrending();
        const genreNameAndCodeList = Object.entries(GENRE_CODE).map((item) => {
          const [genreName, code] = item;
          return { name: genreName, code };
        });
        const genrePromiseList = genreNameAndCodeList.map(({ code, name }) => {
          return getMovieWithGenre(code, name.toLowerCase());
        });

        const resultList = yield Promise.all([
          topRatedPromise,
          trendingPromise,
          ...genrePromiseList,
        ]);

        if (resultList?.length) {
          const formattedData = resultList.map((item, idx) => {
            const { page, results, type } = item;
            const formattedData = formatCategoryData(results);
            return {
              name: DATA_ORDER[idx],
              list: formattedData,
              page,
              type,
            };
          });
          self.home.categories = formattedData;
        }
      } catch (error) {
        console.log("error :: ", error);
      } finally {
        // set loader false after first image is rendered
        // ui.handleLoader("home", false);
      }
    });

    const getCategoryPaginatedData = flow(function* (category) {
      const index = self.home.categories.findIndex(
        ({ type }) => type === category
      );
      let categoryData = JSON.parse(
        JSON.stringify(self.home.categories[index])
      );

      if (index !== -1 && categoryData) {
        const options = { page: categoryData.page + 1 };
        let data,
          formattedData = [];

        if (categoryData.type === "top_rated") {
          data = yield getTopRated(options);
          formattedData = formatCategoryData(data.results);
        } else if (categoryData.type === "trending") {
          data = yield getTrending(options);
          formattedData = formatCategoryData(data.results);
        } else {
          data = yield getMovieWithGenre(
            GENRE_CODE[categoryData.name.toUpperCase()],
            categoryData.name.toLowerCase(),
            options
          );
          formattedData = formatCategoryData(data.results);
        }

        categoryData = {
          ...categoryData,
          page: data.page,
          list: [...categoryData.list, ...formattedData],
        };

        self.home.categories[index].page = categoryData.page;
        self.home.categories[index].list = categoryData.list;
      }
    });

    return { getHomeScreenData, getBannerDetails, getCategoryPaginatedData };
  });

export default domain;
