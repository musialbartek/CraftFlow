<script setup>
    import { ref } from 'vue';

    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const pageName = computed(() => route.name);
</script>
<template>
    <header>
        <div class="d-flex justify-content-end px-5">
            <!-- <div class="fs-3">
                {{ pageName }}
            </div> -->
             <a href="#" class="">
                <i class="bi bi-plus-lg"></i> New task
            </a>
            <a href="#" class="">
                <i class="bi bi-bell"></i>
            </a>
            <a href="#" class="">
                <i class="bi bi-person-circle me-3"></i> Profile
            </a>
        </div>
    </header>
</template>
