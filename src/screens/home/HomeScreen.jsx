import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import Avatar from "../../components/avatar/Avatar";
import ContentRow from "../../components/content-row/ContentRow";
import HomeBanner from "../../components/home-banner/HomeBanner";
import Loader from "../../components/loader/Loader";
import NavBar from "../../components/navBar/NavBar";

import { useStores } from "../../stores";

import "./homeScreen-styles.scss";

const HomeScreen = () => {
  const {
    domain,
    ui: { loading },
  } = useStores();

  const {
    home: { categories = [] },
  } = domain;

  useEffect(() => {
    domain.getBannerDetails();
    domain.getHomeScreenData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCategories = () => {
    return categories?.map((item, index) => {
      const { name, list } = item;
      return (
        <ContentRow
          key={name}
          title={name}
          list={list}
          isLargeRow={index === 0}
        />
      );
    });
  };

  return (
    <div className="home-screen">
      <NavBar rightComponent={Avatar} />
      <HomeBanner />
      {renderCategories()}
      <Loader
        isLoaderActive={loading.home || loading.banner}
        showDarkBackground
      />
    </div>
  );
};

export default observer(HomeScreen);
