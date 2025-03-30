<script setup>
    import { ref } from 'vue';
    import HeaderComponent from './Header.vue'
    import NavComponent from './Nav.vue'
    import SideBar from '../SideBar.vue';
</script>
<template>
    <div class="row gx-0 h-100">
        <div class="col-md-2">
            <NavComponent/>
        </div>
        <div class="col-md-10">
            <div class="container mt-4">
                <HeaderComponent />
                <main>
                    <div class="row pb-5">
                        <div class="col-11">
                            <router-view></router-view>
                        </div>
                        <div class="col-1">
                            <SideBar></SideBar>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>