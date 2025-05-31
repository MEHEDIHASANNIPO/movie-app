<script setup>
/** All Library Import */

/** All Instance */

/** All Variables */

/** All Methods */

/** Hook & Computed */

</script>

<template>
  <!-- Banner Start -->
  <section class="py-20 md:py-28 bg-[url('@/assets/img/banner.jpg')] bg-cover bg-center bg-no-repeat">
    <div class="container mx-auto px-2">
      <h2 class="text-white text-center text-2xl md:text-4xl font-bold max-w-4xl mx-auto">Discover everything about your favorite <span class="text-rose-500">movies, series, and episodes</span>, all in one spot!</h2>

      <div class="max-w-xl mx-auto mt-10 md:mt-16">
        <form class="flex flex-col md:flex-row items-center gap-0.5">
            <div class="w-full md:w-4/5 relative">
              <select name="" id="" class="absolute inset-y-0.5 bg-gray-800 text-gray-300 px-4 rounded-l-lg cursor-pointer focus:outline-0">
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
              </select>

              <input type="search" class="bg-gray-600 py-3.5 pl-30 pr-5 border-2 border-gray-900 rounded-lg md:rounded-l-lg w-full focus:outline-1 focus:outline-rose-500 placeholder:text-gray-400" placeholder="Search movies, series, and episodes..." required>
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

      <!-- Movie Group -->
      <div class="mb-16">
        <h2 class="text-white text-2xl font-semibold border-l-4 border-rose-500 pl-2">Popular Movies</h2>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">

          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>

        </div>
      </div>

      <!-- Series Group -->
      <div class="mb-16">
        <h2 class="text-white text-2xl font-semibold border-l-4 border-rose-500 pl-2">Popular Series</h2>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">

          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>

        </div>
      </div>

      <!-- Episode Group -->
      <div class="">
        <h2 class="text-white text-2xl font-semibold border-l-4 border-rose-500 pl-2">Popular Episode</h2>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">

          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>
          <router-link class="overflow-hidden group">
            <div class="relative before:absolute before:-top-[120%] before:bg-gray-800 before:w-full before:h-full before:opacity-50 transition ease-in duration-300 group-hover:before:top-0">
              <img src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="" class="w-full object-cover rounded-sm">

              <div class="absolute w-full h-full left-0 -top-[120%] flex items-center justify-center transition ease-in duration-300 group-hover:top-0">
                <font-awesome-icon :icon="['fas', 'eye']" class="text-rose-500 text-5xl" />
              </div>
            </div>
            <h4 class="text-gray-200 text-lg font-medium mt-2 mb-1">Spider Man</h4>
              <div class="flex items-center gap-5">
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500 mr-0.5" /> 57</span>
                <span class="text-gray-400">|</span>
                <span class="text-sm text-gray-400"><font-awesome-icon :icon="['fas', 'clock']" class="text-rose-500 mr-0.5" /> 1990</span>
            </div>
          </router-link>

        </div>
      </div>
    </div>
  </section>
  <!-- Movie End -->
</template>
