<script setup>
    import { ref } from 'vue';
    import Calendar from './_calendar.vue';
    import MyFinances from './_myFinances.vue';
    import MyWorks from './_myWorks.vue';
    import LastQuestions from './_lastQuestions.vue';
    import ShoppingList from './_shoppingList.vue';
</script>
<template>
    <div class="row gy-5">
        <div class="col-md-9">
            <div class="row gy-5">
                <div class="col-md-6">
                    <h2>Calendar</h2>
                    <div class="card bg-primary">
                        <Calendar></Calendar>
                    </div>
                </div>
                <div class="col-md-6">
                    <h2>My finances</h2>
                    <div class="card">
                        <MyFinances></MyFinances>
                    </div>
                </div>
                <div class="col-md-6">
                    <h2>My works</h2>
                    <div class="card p-0">
                        <MyWorks></MyWorks>
                    </div>
                </div>
                <div class="col-md-6">
                    <h2>Last questions</h2>
                    <div class="card bg-primary">
                        <LastQuestions></LastQuestions>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <h2>
                Shopping list
            </h2>
            <div class="card bg-primary">
                <ShoppingList></ShoppingList>
            </div>
        </div>
    </div>
</template>
