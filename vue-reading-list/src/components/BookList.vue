<script>
import { useBookListStore } from "../store/useBookListStore";
import BookItem from "./BookItem.vue";
import { storeToRefs } from "pinia";
export default {
  components: {
    BookItem,
  },
  setup() {
    const store = useBookListStore();
    const { sortedBookList } = storeToRefs(store);
    const { toggleRead, deleteBook } = store;

    return { sortedBookList, toggleRead, deleteBook };
  },
};
</script>

<template>
  <div class="book-list-container">
    <template v-if="sortedBookList && sortedBookList.length">
      <book-item
        v-for="book in sortedBookList"
        :key="book.id"
        :book="book"
        @toggleRead="toggleRead(book.id)"
        @deleteBook="deleteBook(book.id)"
      />
    </template>
    <p v-else>No books found.</p>
  </div>
</template>

<style scoped>
p {
  text-align: center;
}
.read {
  text-decoration: line-through;
}

.book-list-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: stretch;
}

@media (max-width: 1000px) {
  .book-list-container {
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: column;
  }
}
</style>
