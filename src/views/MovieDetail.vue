<script setup>
/** All Library Import */
import { ref, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie';
import { useRoute } from 'vue-router';

/** All Instance */
const movieStore = useMovieStore();
const route = useRoute();

/** All Variables */

/** All Methods */

/** Hook & Computed */
onMounted(() => {
  movieStore.getMovie(route.params.id);
})
</script>

<template>
    <!-- BreadCrumbs Start -->
    <section class="py-20 md:py-28 bg-[url('@/assets/img/banner.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="container mx-auto px-2">
            <h2 class="text-white text-center text-2xl md:text-3xl font-bold max-w-4xl mx-auto">{{ movieStore.singleMovie?.Title }}</h2>
        </div>
    </section>
    <!-- BreadCrumbs End -->

    <!-- Movie Deatil Start -->
    <section class="py-24">
        <div class="container mx-auto px-2">
            <div class="flex flex-col xl:flex-row items-stretch gap-5">
                
                <!-- Movie Image -->
                <div class="w-full xl:w-1/5">
                     <template v-if="movieStore.singleMovie?.Poster != 'N/A'">
                        <img :src="movieStore.singleMovie?.Poster" :alt="movieStore.singleMovie?.Title" class="w-full object-cover rounded-sm min-h-80 bg-gradient-to-bl from-gray-700 to-gray-900 text-rose-500">
                    </template>

                    <template v-else>
                        <div class="w-full object-cover rounded-sm min-h-80 p-2 bg-gradient-to-bl from-gray-700 to-gray-900 flex items-center justify-center">
                            <h2 class="text-center text-rose-500 text-base font-semibold">{{ movieStore.singleMovie?.Title }}</h2>
                        </div>
                    </template>
                </div>

                <!-- Movie Info -->
                <div class="w-full xl:w-4/5 bg-gray-700 p-5 rounded-sm relative">
                    <h2 class="text-gray-50 text-2xl font-semibold">{{ movieStore.singleMovie?.Title }} <span class="text-lg font-medium text-gray-400 ml-1">{{ movieStore.singleMovie?.Year }}</span></h2>

                    <!-- Movie Short Data -->
                    <div class="flex max-sm:flex-wrap items-center gap-5 mt-4">
                        <span class="text-sm text-gray-400 flex items-center gap-1"><font-awesome-icon :icon="['fas', 'star']" class="text-orange-500" /> {{ movieStore.singleMovie?.imdbRating }}</span>

                        <template v-if="movieStore.singleMovie?.Released != 'N/A'">
                            <span class="text-sm text-gray-400">|</span>
                            <span class="text-sm text-gray-400 flex items-center gap-1"><font-awesome-icon :icon="['fas', 'calendar']" class="text-rose-500" /> {{ movieStore.singleMovie?.Released }}</span>
                        </template>

                        <span class="text-sm text-gray-400">|</span>
                        <span class="text-sm text-gray-400 flex items-center gap-1"><font-awesome-icon :icon="['fas', 'thumbs-up']" class="text-blue-500" /> {{ movieStore.singleMovie?.imdbVotes }}</span>

                        <template v-if="movieStore.singleMovie?.Runtime != 'N/A'">
                            <span class="text-sm text-gray-400">|</span>
                            <span class="text-sm text-gray-400 flex items-center gap-1"><font-awesome-icon :icon="['fas', 'clock']" class="text-cyan-500" /> {{ movieStore.singleMovie?.Runtime }}</span>
                        </template>
                        
                        <span class="text-sm text-gray-400">|</span>
                        <span class="text-sm text-gray-400 flex items-center gap-1"><font-awesome-icon :icon="['fas', 'globe']" class="text-violet-500" /> {{ movieStore.singleMovie?.Language }}</span>
                        <span class="text-sm text-gray-400">|</span>
                        <span class="text-sm text-gray-400 flex items-center gap-1"><font-awesome-icon :icon="['fas', 'flag']" class="text-green-500" /> {{ movieStore.singleMovie?.Country }}</span>
                    </div>

                    <template v-if="movieStore.singleMovie?.Plot != 'N/A'">
                        <p class="text-gray-300 text-lg font-medium mt-5">{{ movieStore.singleMovie?.Plot }}</p>
                    </template>

                    <div class="sticky xl:absolute inset-x-0 bottom-0 mt-5 bg-gray-900 py-3 px-5 rounded-md">
                        <h4 class="text-gray-200 text-base font-semibold"><span class="text-base font-medium text-green-500 mr-1">Source</span> {{ movieStore.singleMovie?.Ratings[0].Source }} </h4>
                        <h4 class="text-gray-200 text-base font-semibold"><span class="text-base font-medium text-rose-500 mr-1">Value</span> {{ movieStore.singleMovie?.Ratings[0].Value }} </h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Movie Deatil End -->
</template>
