<script setup>
import { ref, watch } from 'vue'

const STORAGE_KEY = 'sites-list'

const sitesList = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])

watch(sitesList, (newList) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newList))
}, { deep: true })

const newItemText = ref('')

function addItem() {
  if (newItemText.value.trim() === '') return
  sitesList.value.push({
    id: Date.now(),
    text: newItemText.value.trim(),
  })
  newItemText.value = ''
}

// **Funkcja czyszcząca localStorage i listę**
function clearList() {
  localStorage.clear()        // czyści cały localStorage (możesz też użyć removeItem jeśli chcesz usunąć tylko ten klucz)
  sitesList.value = []     // czyści listę w stanie aplikacji
}
</script>

<template>
  <div>
    <h2>Saved websites</h2>

    <input
      v-model="newItemText"
      @keyup.enter="addItem"
      placeholder="Dodaj nową pozycję"
    />
    <button @click="addItem">Dodaj</button>
    <button @click="clearList" style="margin-left: 10px;">Wyczyść listę</button>

    <ul>
      <li v-for="item in sitesList" :key="item.id">
        <a :href="item.text" target="_blank">
        {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
