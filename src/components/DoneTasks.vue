<script setup>
    import { ref } from 'vue';

    const Tasks = ref([
        {name: 'Desk renew', budget: 400, desc: 'Renew old desk to my bedroom'},
        {name: 'New kitchen', budget: 10000, desc: 'Change old furnitures and damaged tiles'},
        {name: 'DIY monitoring system', budget: 100, desc: 'Simple monititroing system from old laptop camera'},
        {name: 'Painting a Room', budget: 75, desc: 'Refreshing the interior, changing the color of walls and ceiling'},
        {name: 'Tile Installation in the Bathroom', budget: 1000, desc: 'Replacing or laying new tiles on walls or floors'},
        {name: 'Building a Wooden Shelf', budget: 60, desc: 'A DIY shelving project for extra storage or decorative space'},
        {name: 'Adding Recessed Lighting', budget: 500, desc: 'Installing recessed lighting fixtures in the ceiling to improve room ambiance'},
        {name: 'Building a Small Garden Shed', budget: 2000, desc: 'Creating a storage space in the backyard for tools and outdoor equipment'},
    ])
</script>
<template>
    <div class="row gy-4">
        <div class="col-md-4" v-for="(task, key) in Tasks">
            <div class="card h-100 p-0">
                <div class="card-header d-flex align-items-center">
                    <div>
                        <div class="me-3 rounded-circle border border-2 border-success ratio ratio-1x1 p-3" style="width: 36px;">
                            <div class="d-flex justify-content-center align items-center p-1 text-success">
                                {{ key + 1}}
                            </div>
                        </div>
                    </div>
                    <h4>
                        {{ task.name }}
                    </h4>
                </div>
                <div class="card-body">
                    <p class="text-success">Budget: {{ task.budget }}</p>
                    <p>
                        {{ task.desc }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
