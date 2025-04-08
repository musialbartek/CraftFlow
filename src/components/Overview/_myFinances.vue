<script setup>
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import { Tooltip } from 'bootstrap'

    onMounted(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        tooltipTriggerList.forEach(el => {
            new Tooltip(el)
        })
    })

    const projectsFinances = ref([
        {
            name: 'Project name 1',
            percentage: 54,
        },
        {
            name: 'Project name 2',
            percentage: 20,
        },
        {
            name: 'Project name 3',
            percentage: 75,
        },
    ])

    function getProgressColor(percent) {
        if (percent > 70) return 'bg-danger';   
        if (percent > 50) return 'bg-warning';   
        return 'bg-success';                     
    }
    
    
</script>
<template>
    <div>
        <h2>Total cash: 5500</h2>
        <div v-for="project in projectsFinances" class="finances-project">
            <div class="d-flex justify-content-between align-items-center">
                <h4>
                    {{ project.name }}
                </h4>
                <a href="#" class="btn-arrow"></a>
            </div>
            
            <div class="finances-bar">
                <div
                    :class="['finances-bar-color', getProgressColor(project.percentage)]"
                    :style="{
                    width: project.percentage + '%',
                    }"
                    data-bs-toggle="tooltip" data-bs-placement="top" :title="`Wykorzystane środki: ${project.percentage}%`"
                ></div>
            </div>
        </div>
        <div class="text-end">
            <a href="#" class="btn-more text-primary">More</a>
        </div>
    </div>
</template>
