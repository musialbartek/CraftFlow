<script setup>
import { ref, watch } from 'vue'

const STORAGE_KEY = 'shopping-list'

const shoppingList = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])

watch(shoppingList, (newList) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newList))
}, { deep: true })

const newItemText = ref('')

function addItem() {
  if (newItemText.value.trim() === '') return
  shoppingList.value.push({
    id: Date.now(),
    text: newItemText.value.trim(),
    bought: false
  })
  newItemText.value = ''
}

// **Funkcja czyszcząca localStorage i listę**
function clearList() {
  localStorage.clear()        // czyści cały localStorage (możesz też użyć removeItem jeśli chcesz usunąć tylko ten klucz)
  shoppingList.value = []     // czyści listę w stanie aplikacji
}
</script>

<template>
  <div class="d-flex flex-column justify-content-between flex-fill h-100">
    <div>
      <div class="d-flex align-items-center mb-4">
        <input
        v-model="newItemText"
        @keyup.enter="addItem"
        placeholder="Add item"
        class="form-control"
        />
        <div class="ms-2" role="button" @click="addItem"><i class="bi bi-plus-circle"></i></div>
      </div>

     
      <div class="form-check" v-for="item in shoppingList" :key="item.id">
        <input class="form-check-input" type="checkbox" v-model="item.bought" />
        <label class="form-check-label" :style="{ textDecoration: item.bought ? 'line-through' : 'none' }">
          {{ item.text }}
        </label>
      </div>
      
    </div>
    <div class="d-flex justify-content-between mt-4 ">
      <div class="btn-font-size text-uppercase" role="button" @click="clearList"><i class="bi bi-trash3 fs-3"></i></div>

      <a href="#" class="btn-more text-white mt-0">More</a>
    </div>
  </div>
</template>
