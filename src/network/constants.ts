const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhlNjBlMjgxYjJmNmZkZDBmM2RjZDNkOWU5NzQ1YSIsInN1YiI6IjY0MjExZjcyMWRiYzg4MDA3OTMxYjdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S1zsnrGOItdl5-n33cetGKHPLyzLCoiwCRSiqxanoB0";
const API_PATH = {
  TRENDING: "/trending/all/week",
  ORIGINALS: "/discover/tv?language=en-US",
  TOP_RATED: "/movie/top_rated",
  MOVIE_WITH_GENRE: "/discover/movie?with_genres=",
};
const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/original";

const GENRE_CODE = {
  ACTION: '28',
  COMEDY: '35',
  HORROR: '27',
  ROMANCE: '10749',
  DOCUMENTARIES: '99',
}

export { API_KEY, API_PATH, GENRE_CODE, TMDB_IMAGE_PATH };
