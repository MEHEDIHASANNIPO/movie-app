import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    apiKey: 'OMDB_API_KEY',
    search: null,
    type: null,
    getMovies: [],
    singleMovie: null,
    movieCount: 0,

    movies: [],
    series: [],
    episodes: [],

    movieList: ["The Shawshank Redemption", "The Dark Knight", "Inception", "Spiderman", "Titanic"],
    seriesList: ["Breaking Bad", "Game of Thrones", "Stranger Things", "The Witcher", "The Mandalorian"],
    episodeList: ["Ozymandias", "The Rains of Castamere", "Battle of the Bastards", "The One Where Everybody Finds Out", "Face Off"],
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

    getRandomEpisode(state) {
        const index = Math.floor(Math.random() * state.episodeList.length)
        return state.episodeList[index]
    },
  },

  actions: {
    async homePage() {
        const { data: movieData } = await axios.get(`${this.baseUrl}&type=movie&s=${this.getRandomMovie}`);
        const { data: seriesData } = await axios.get(`${this.baseUrl}&type=series&s=${this.getRandomSeries}`);
        const { data: episodeData } = await axios.get(`${this.baseUrl}&type=episode&s=${this.getRandomEpisode}`);

        this.movies = movieData.Search;
        this.series = seriesData.Search;
        this.episode = episodeData.Search;
    },

    async searchMovies() {
        if(this.search != '' && this.type != '') {
            const { data } = await axios.get(`${this.baseUrl}&type=${this.type}&s=${this.search}`);

            this.getMovies = data.Search;
            this.movieCount = data.totalResults;
        }
    },

    async getMovie(imdbid) {
        const { data } = await axios.get(`${this.baseUrl}&i=${imdbid}&plot=full`);

        this.movie = data;
    }
  },
})
