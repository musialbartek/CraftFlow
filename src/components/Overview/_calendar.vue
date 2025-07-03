<script setup>
    import { ref } from 'vue';
    import VueCal from 'vue-cal'
    import 'vue-cal/dist/vuecal.css'

    const view = ref('month');

</script>
<template>
    <div>
        <vue-cal
            class="vuecal--rounded-theme"
            active-view="month"
            small
            hide-view-selector="true"
        />
    </div>
</template>
