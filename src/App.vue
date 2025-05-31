<script setup>
/** All Library Import */
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

/** All Instance */

/** All Variables */
const stickyHeader = ref('');
const showMenu = ref(false);

/** All Methods */

/** Hook & Computed */
onMounted(() => {
    // Sticky Header
    window.onscroll = () => {
        if(window.scrollY === 0) {
            stickyHeader.value.classList.remove('!fixed');
        } else {
            stickyHeader.value.classList.add('!fixed');
        }
    }
})
</script>

<template>
    <!-- Header Start -->
    <header class="relative top-0 inset-x-0 z-10 bg-gray-900 py-6 border-b border-gray-700 shadow transition-all ease-in duration-300" ref="stickyHeader">
        <div class="container mx-auto px-2">
            <div class="flex items-center justify-between gap-10">
                <router-link :to="{ name: 'home' }">
                    <h2 class="text-2xl text-white font-bold"><span class="text-rose-500">MHN</span> Movie</h2>
                </router-link>

                <div class="block md:hidden text-white text-3xl" @click="showMenu = !showMenu">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </div>

                <ul class="max-sm:absolute max-sm:inset-x-0 max-sm:bg-gray-900 max-sm:items-start max-sm:p-5 max-sm:z-10 flex flex-col md:flex-row items-center justify-end gap-5" :class="!showMenu ? 'max-sm:-top-[500%]' : 'max-sm:top-[100%]'">
                    <li><router-link @click="showMenu = false" :to="{ name: 'home' }" class="text-white text-lg font-medium transition ease-in duration-300 hover:text-rose-500">Home</router-link></li>
                    <li><router-link @click="showMenu = false" :to="{ name: 'about' }" class="text-white text-lg font-medium transition ease-in duration-300 hover:text-rose-500">About</router-link></li>
                    <li><router-link @click="showMenu = false" :to="{ name: 'contact' }" class="text-white text-lg font-medium transition ease-in duration-300 hover:text-rose-500">Contact</router-link></li>
                    <li><router-link @click="showMenu = false" :to="{ name: 'privacy' }" class="text-white text-lg font-medium transition ease-in duration-300 hover:text-rose-500">Privacy Policy</router-link></li>
                    <li><a href="javascript:void(0)" class="block py-1.5 px-5 rounded-full bg-rose-500 text-white text-base font-medium transition ease-in duration-300 hover:bg-white hover:text-rose-500">Donate</a></li>
                </ul>
            </div>
        </div>
    </header>
    <!-- Header End -->

    <RouterView v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
            <div :key="route.name">
                <component :is="Component" />
            </div>
        </transition>
    </RouterView>

    <!-- Footer Start -->
    <footer class="bg-gray-900 py-6 border-t border-rose-500">
        <div class="container mx-auto px-2">
            <p class="text-center text-base md:text-lg font-medium text-white">&copy; {{ new Date().getFullYear() }} All Right Reserved!</p>
        </div>
    </footer>
    <!-- Footer End -->
</template>

<style scoped>
    .route-enter-from {
        opacity: 0;
        transform: translateY(10px);
    }

    .route-enter-active, .route-leave-active {
        transition: all 0.3s ease-out;
    }

    .route-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }
</style>
