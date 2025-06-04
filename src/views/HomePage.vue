<script setup>
/** All Library Import */
import { ref, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie';

/** All Instance */
const movieStore = useMovieStore();

/** All Variables */

/** All Methods */

/** Hook & Computed */
onMounted(() => {
  movieStore.homePage();
})
</script>

<template>
  <!-- Banner Start -->
  <section class="py-20 md:py-28 bg-[url('@/assets/img/banner.jpg')] bg-cover bg-center bg-no-repeat">
    <div class="container mx-auto px-2">
      <h2 class="text-white text-center text-2xl md:text-4xl font-bold max-w-4xl mx-auto">Discover everything about your favorite <span class="text-rose-500">movies, series, and episodes</span>, all in one spot!</h2>

      <!-- Search -->
      <div class="max-w-xl mx-auto mt-10 md:mt-16">
        <form @submit.prevent="movieStore.searchMovies" class="flex flex-col md:flex-row items-center gap-2 md:gap-0.5">
            <div class="w-full md:w-4/5 relative">
              <select v-model="movieStore.type" class="absolute inset-y-0.5 bg-gray-800 text-gray-300 px-4 rounded-l-lg cursor-pointer focus:outline-0">
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </select>

              <input type="search" class="bg-gray-600 py-3.5 pl-30 pr-5 border-2 border-gray-900 rounded-lg md:rounded-l-lg w-full focus:outline-1 focus:outline-rose-500 text-gray-400" placeholder="Search movies, series, and episodes..." v-model="movieStore.search" required>
            </div>
            <div class="w-full md:w-1/5">
              <button type="submit" class="w-full bg-rose-500 text-white font-bold py-3.5 px-5 rounded-lg md:rounded-r-lg cursor-pointer">Search</button>
            </div>
        </form>
      </div>
    </div>
  </section>
  <!-- Banner End -->

  <!-- Movie Start -->
  <section class="py-20 md:py-24">
    <div class="container mx-auto px-2">
      <template v-if="movieStore.response == 'True'">

          <!-- Search Analytics -->
          <div class="">
            <h4 class="text-gray-300">Total Result: <span class="text-rose-500">{{ movieStore.getMovieCount }}</span></h4>
          </div>

          <!-- Search Result -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">
            <router-link :to="{ name: 'movieDetail', params: { id: movie.imdbID } }" class="overflow-hidden group" v-for="( movie, index) in movieStore.getMovies" :key="index">
              <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
                <template v-if="movie.Poster != 'N/A'">
                  <img :src="movie.Poster" :alt="movie.Title" class="w-full object-cover rounded-sm min-h-80 bg-gradient-to-bl from-gray-700 to-gray-900 text-rose-500">
                </template>

                <template v-else>
                  <div class="w-full object-cover rounded-sm min-h-80 p-2 bg-gradient-to-bl from-gray-700 to-gray-900 flex items-center justify-center">
                    <h2 class="text-center text-rose-500 text-base font-semibold">{{ movie.Title }}</h2>
                  </div>
                </template>

                <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                  <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
                </div>
              </div>
              <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">{{ movie.Title }}</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> {{ movie.Year }}</span>
              </div>
            </router-link>
          </div>

          <!-- Pagination -->
          <div class="flex items-center justify-center mt-8" v-if = "movieStore.getMovies.length < movieStore.getMovieCount">
            <v-pagination 
              v-model = movieStore.pages
              :pages = movieStore.getLastPage
              :range-size = 1
              active-color = #ff2056
              @update:modelValue= movieStore.searchMovies
            />
          </div>
      </template>

      <!-- No Movie Found -->
      <template v-else-if="movieStore.response == 'False'">
          <div class="">
            <h4 class="text-gray-300">Total Result: <span class="text-rose-500">{{ movieStore.getMovieCount ?? 0 }}</span></h4>

            <h2 v-if="!movieStore.getMovieCount" class="text-center text-2xl text-white font-semibold mt-10">No result found!</h2>
          </div>
      </template>

      <!-- Home Page Popular -->
      <template v-else>
        <!-- Movie Group -->
        <div class="mb-16">
          <h2 class="text-white text-2xl font-semibold border-l-4 border-rose-500 pl-2">Popular Movies</h2>

          <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">
            <router-link :to="{ name: 'movieDetail', params: { id: movie.imdbID } }" class="overflow-hidden group" v-for="( movie, index) in movieStore.movies" :key="index">
              <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
                <template v-if="movie.Poster != 'N/A'">
                  <img :src="movie.Poster" :alt="movie.Title" class="w-full object-cover rounded-sm min-h-80 bg-gradient-to-bl from-gray-700 to-gray-900 text-rose-500">
                </template>

                <template v-else>
                  <div class="w-full object-cover rounded-sm min-h-80 p-2 bg-gradient-to-bl from-gray-700 to-gray-900 flex items-center justify-center">
                    <h2 class="text-center text-rose-500 text-base font-semibold">{{ movie.Title }}</h2>
                  </div>
                </template>

                <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                  <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
                </div>
              </div>
              <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">{{ movie.Title }}</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> {{ movie.Year }}</span>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Series Group -->
        <div class="mb-16">
          <h2 class="text-white text-2xl font-semibold border-l-4 border-rose-500 pl-2">Popular Series</h2>

          <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">

            <router-link :to="{ name: 'movieDetail', params: { id: series.imdbID } }" class="overflow-hidden group" v-for="( series, index) in movieStore.series" :key="index">
              <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
                <template v-if="series.Poster != 'N/A'">
                  <img :src="series.Poster" :alt="series.Title" class="w-full object-cover rounded-sm min-h-80 bg-gradient-to-bl from-gray-700 to-gray-900 text-rose-500">
                </template>

                <template v-else>
                  <div class="w-full object-cover rounded-sm min-h-80 p-2 bg-gradient-to-bl from-gray-700 to-gray-900 flex items-center justify-center">
                    <h2 class="text-center text-rose-500 text-base font-semibold">{{ series.Title }}</h2>
                  </div>
                </template>

                <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                  <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
                </div>
              </div>
              <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">{{ series.Title }}</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> {{ series.Year }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </section>
  <!-- Movie End -->
</template>