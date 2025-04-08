<script setup>
    import { ref } from 'vue';
    import { useScriptTag } from '@vueuse/core';
    import { onMounted } from 'vue';

    useScriptTag('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', () => {
        new Swiper('.mySwiper', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });

    onMounted(() => {
        if (window.Swiper) {
            new Swiper('.mySwiper', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    });
</script>
<template>
    <div class="h-inherit my-works-overview">
        <div class="swiper mySwiper h-inherit">
            <div class="swiper-wrapper h-inherit">
                <div class="swiper-slide h-inherit" v-for="n in 4">
                    <div class="w-100 card-bg-image h-inherit" :style="{ backgroundImage: `url(/images/diy_pic.jpg)` }"></div>
                </div>
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <a href="#" class="btn-more">More</a>
    </div>

</template>

<style>
    @import 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
</style>