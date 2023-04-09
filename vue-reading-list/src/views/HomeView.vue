<script setup>
import { ref } from "vue";
import BookList from "../components/BookList.vue";
import NewBookForm from "../components/NewBookForm.vue";
import { useBookListStore } from "../store/useBookListStore";

// set initial values using refs and initial the store instance
const showForm = ref(false);
const store = useBookListStore();
const selectedSortingOption = ref("default");

// I have set up some example data which is populated into the app when the store key value does not exist in the browser's local storage, feel free to comment this line out if you wish to start your list from scratch!
store.addDummyData();

// triggers the stores sorting method with the current selected option
const sortBooks = () => {
  store.sortBooks(selectedSortingOption.value);
};
</script>

<template>
  <div class="button-container">
    <button @click="showForm = !showForm">
      {{ showForm ? "Hide Form" : "Add New Book" }}
    </button>
    <div class="sort-container">
      <label for="sort-select">Sort by:</label>
      <select
        id="sort-select"
        v-model="selectedSortingOption"
        @change="sortBooks"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  </div>
  <NewBookForm v-if="showForm" />
  <BookList />
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(255, 137, 137);
  margin-bottom: 20px;
  padding: 5px;
}

select {
  padding: 5px;
}

label {
  margin-right: 10px;
}

button {
  background-color: #38b2ac;
  margin-top: 20px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: rgb(15 118 110);
}
</style>
