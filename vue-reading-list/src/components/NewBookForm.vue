<script>
import { ref } from "vue";
import { useBookListStore } from "../store/useBookListStore";
export default {
  setup() {
    const newBookTitle = ref("");
    const newBookAuthor = ref("");
    const newBookPriority = ref("");
    const bookPriorityOptions = ["Must read!", "Want to read", "Might read"];
    const store = useBookListStore();

    function addItemAndClear(title, author, priority) {
      console.log(title, author, priority);
      if (title.length === 0 || author.length === 0 || priority.length === 0) {
        return;
      }

      // invokes function in the store:
      store.addBook(
        newBookTitle.value,
        newBookAuthor.value,
        newBookPriority.value
      );
      newBookTitle.value = "";
      newBookAuthor.value = "";
      newBookPriority.value = "";
    }
    return {
      newBookTitle,
      newBookAuthor,
      newBookPriority,
      bookPriorityOptions,
      addItemAndClear,
    };
  },
};
</script>

<template>
  <form
    @submit.prevent="
      addItemAndClear(newBookTitle, newBookAuthor, newBookPriority)
    "
  >
  
      <input v-model="newBookTitle" type="text" placeholder="Title" />

      <input v-model="newBookAuthor" type="text" placeholder="Author" />

      <select v-model="newBookPriority">
        <option value="" disabled selected>Select priority</option>
        <option v-for="option in bookPriorityOptions" :value="option">
          {{ option }}
        </option>
      </select>
    <div>
      <button>Add</button>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.262);
}

input {
  text-align: left;
  margin: 10px;
  padding: 5px;
}

select {
  padding: 5px;
  border-radius: 4px;
}

button {
  border-radius: 6px;
  border: none;
  padding: 5px 10px;
  color: white;
  background-color: #38b2ac;
  text-align: center;
}
</style>
