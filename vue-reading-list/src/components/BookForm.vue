<script>
import { ref } from "vue";

// I extracted the form component so that the app could be extended in the future to allow for editing of books in the list
// Idea for future development: reuse form for editing books by passing in a different submit action and button text!

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      default: "",
    },
    priorityOptions: {
      type: Array,
      default: () => ["Must read!", "Want to read", "Might read"],
    },
    buttonText: {
      type: String,
      default: "Add",
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const bookTitle = ref(props.title);
    const bookAuthor = ref(props.author);
    const bookPriority = ref(props.priority);

    function submitForm() {
      props.onSubmit(bookTitle.value, bookAuthor.value, bookPriority.value);
      bookTitle.value = "";
      bookAuthor.value = "";
      bookPriority.value = "";
    }

    return {
      title: bookTitle,
      author: bookAuthor,
      priority: bookPriority,
      priorityOptions: props.priorityOptions,
      buttonText: props.buttonText,
      submitForm,
    };
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="title" type="text" placeholder="Title" />
    <input v-model="author" type="text" placeholder="Author" />
    <select v-model="priority">
      <option value="" disabled selected>Select priority</option>
      <option v-for="option in priorityOptions" :value="option">
        {{ option }}
      </option>
    </select>
    <div>
      <button type="submit">{{ buttonText }}</button>
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
