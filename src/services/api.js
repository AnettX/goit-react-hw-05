import axios from "axios";

// Конфігурація для всіх запитів

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGI5OTc2MDE3MzFlNzk5MGYwNDNhNzYzZmZiYzAxOSIsInN1YiI6IjY2MTZiNjA5ODU4Njc4MDE3ZGM2MjlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4uFNv2DDHAwzyLjegp93yW_3FW1ITd-wY05l96RqM4k",
};

axios.defaults.params = {
  language: "en-US",
};

// Функції для різних запитів

export const getTrendingMovies = async () => {
  // Додати ендпоінт
  const { data } = await axios.get("trending/movie/day?language=en-US");
  return data.results;
};

export const getSearchMovie = async (query = "") => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );

  return data.results;
};
