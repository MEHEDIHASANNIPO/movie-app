import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    apiKey: 'e2037866',
    search: null,
    type: 'movie',
    pages: 1,
    getMovies: [],
    singleMovie: null,
    movieCount: 0,

    movies: [],
    series: [],

    movieList: ["Interstellar", "The Dark Knight", "Inception", "Spiderman", "Titanic"],
    seriesList: ["Breaking Bad", "Game of Thrones", "Stranger Things", "The Witcher", "The Mandalorian"],
  }),

  getters: {
    baseUrl(state) {
      return `http://www.omdbapi.com/?apikey=${state.apiKey}`;
    },

    getMovieCount: (state) => state.movieCount,

    getRandomMovie(state) {
        const index = Math.floor(Math.random() * state.movieList.length)
        return state.movieList[index]
    },

    getRandomSeries(state) {
        const index = Math.floor(Math.random() * state.seriesList.length)
        return state.seriesList[index]
    },

    getLastPage(state) {
        return Math.ceil(state.movieCount / 10);
    }
  },

  actions: {
    async homePage() {
        const { data: movieData } = await axios.get(`${this.baseUrl}&type=movie&s=${this.getRandomMovie}`);
        const { data: seriesData } = await axios.get(`${this.baseUrl}&type=series&s=${this.getRandomSeries}`);

        this.movies = movieData.Search;
        this.series = seriesData.Search;
    },

    async searchMovies() {
        if(this.search != '' && this.type != '') {
            const { data } = await axios.get(`${this.baseUrl}&type=${this.type}&s=${this.search}&page=${this.pages}`);

            this.getMovies = data.Search;
            this.movieCount = data.totalResults;
        }
    },

    async getMovie(imdbid) {
        const { data } = await axios.get(`${this.baseUrl}&i=${imdbid}&plot=full`);

        this.singleMovie = data;
    }
  },
})
