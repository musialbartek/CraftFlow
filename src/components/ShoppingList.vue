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
  <div>
    <h2>Lista zakupów</h2>

    <input
      v-model="newItemText"
      @keyup.enter="addItem"
      placeholder="Dodaj nową pozycję"
    />
    <button @click="addItem">Dodaj</button>
    <button @click="clearList" style="margin-left: 10px;">Wyczyść listę</button>

    <ul>
      <li v-for="item in shoppingList" :key="item.id">
        <label>
          <input type="checkbox" v-model="item.bought" />
          <span :style="{ textDecoration: item.bought ? 'line-through' : 'none' }">
            {{ item.text }}
          </span>
        </label>
      </li>
    </ul>
  </div>
</template>
