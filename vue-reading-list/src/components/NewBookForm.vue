<script>
import { useBookListStore } from "../store/useBookListStore";
import BookForm from "./BookForm.vue";

// this component uses the book form and passes the function for adding books, as well as communicating with the store

export default {
  components: {
    BookForm,
  },
  setup() {
    const store = useBookListStore();

    function addItemAndClear(title, author, priority) {
      console.log(title, author, priority);
      if (title.length === 0 || author.length === 0 || priority.length === 0) {
        return;
      }

      // invokes function in the store:
      store.addBook(title, author, priority);
    }

    return {
      addItemAndClear,
    };
  },
};
</script>

<template>
  <div>
    <book-form :on-submit="addItemAndClear" />
  </div>
</template>
