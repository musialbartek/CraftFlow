import { createRouter, createWebHistory } from 'vue-router';

import Overview from '../components/Overview/Overview.vue';
import MyShedule from '../components/MyShedule.vue';
import MyWorks from '../components/MyWorks.vue';
// import CurrentTasks from '../components/CurrentTasks.vue';
// import DoneTasks from '../components/DoneTasks.vue';
import ShoppingList from '../components/ShoppingList.vue';
import MyTasks from '../components/MyTasks.vue';
import SavedDIYs from '../components/SavedDIYs.vue';
import InspirationBoard from '../components/InspirationBoard.vue';
import SavedWebsites from '../components/SavedWebsites.vue';
// import MyShedule from '../components/MyShedule.vue';

const routes = [
    {
        path: '/',
        name: 'Overview',
        component: Overview,
    },
    {
        path: '/my-tasks',
        name: 'My tasks',
        component: MyTasks,
    },
    {
        path: '/shopping-list',
        name: 'Shopping List',
        component: ShoppingList,
    },
    {
        path: '/my-shedule',
        name: 'My shedule',
        component: MyShedule,
    },
    {
        path: '/my-works',
        name: 'My works',
        component: MyWorks,
    },
    {
        path: '/saved-diys',
        name: 'Saved DIYs',
        component: SavedDIYs,
    },
    {
        path: '/inspiration-board',
        name: 'Inspiration board',
        component: InspirationBoard,
    },
    {
        path: '/saved-websites',
        name: 'Saved websites',
        component: SavedWebsites,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
