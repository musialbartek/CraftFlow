<script setup>
import { ref } from 'vue';

const navLinks = ref([
    { name: 'Overview', icon: 'bi-clipboard-data', path: '/' },
    {
        name: 'My tasks', icon: 'bi-list-task', path: '/my-tasks'
        // children: [
        //     { name: 'Current Tasks', path: '/my-tasks/current' },
        //     { name: 'Done Tasks', path: '/my-tasks/done' },
        // ],
    },
    { name: 'My shedule', icon: 'bi-calendar-check', path: '/my-shedule' },
    { name: 'Shopping list', icon: 'bi-bag', path: '/shopping-list' },
    { name: 'My works', icon: 'bi-camera', path: '/my-works' },
    { name: 'Saved DIYs', icon: 'bi-bookmark-check', path: '/saved-diys' },
    { name: 'Inspiration board', icon: 'bi-lightbulb', path: '/inspiration-board' },
    { name: 'Saved websites', icon: 'bi-globe2', path: '/saved-websites' },
]);
</script>

<template>
    <nav class="navbar flex-column align-items-start justify-content-start navbar-light">
        <a href="" class="navbar-logo">
            <img src="../../assets/logo.svg" alt="CraftFlow logo">
        </a>
        <ul class="navbar-nav flex-column mb-2 mb-lg-0">
            <li class="nav-item" v-for="(link, key) in navLinks" :key="key">
                <template v-if="link.children">
                    <a class="nav-link fw-light" data-bs-toggle="collapse" :href="'#nav-collapse-' + key" aria-expanded="false" :aria-controls="'nav-collapse-' + key">
                        {{ link.name }}
                    </a>
                    <ul class="collapse ms-3" :id="'nav-collapse-' + key">
                        <li v-for="child in link.children" :key="child.path">
                            <router-link :to="child.path" class="nav-link fw-light fs-5">{{ child.name }}</router-link>
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <router-link :to="link.path" class="nav-link fw-light">
                        <i :class="['bi', link.icon]"></i>
                        {{ link.name }}
                    </router-link>
                </template>
            </li>
        </ul>
    </nav>
</template>
