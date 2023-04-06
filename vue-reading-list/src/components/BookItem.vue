<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    priorityColor() {
      switch (this.book.priority) {
        case "Must read!":
          return "priority high";
        case "Want to read":
          return "priority medium";
        case "Might read":
          return "priority low";
        default:
          return null;
      }
    },
    readButton() {
      if (this.book.read) {
        return "read";
      } else {
        return "unread";
      }
    }
  },
  methods: {
    deleteBook() {
      this.$emit("deleteBook", this.book);
    },
    toggleRead() {
      this.$emit("toggleRead", this.book);
    },
  },
};
</script>

<template>
    <div class="book-card" v-if="book">
        <div :class="priorityColor">
            <span>{{ this.book.priority }}</span>
        </div>
      <div class="book-info">
        <h2>{{ book.title }}</h2>
        <p>By {{ book.author }}</p>
      </div>
      <div class="readDate">
        <p v-if="book.read">Marked as read on: </p>
        <p v-if="book.read">{{ book.dateRead }}</p>
      </div>
      <div>
      <button class="deleteButton" @click="deleteBook">Delete</button>
      <button :class="readButton" @click="toggleRead">
        {{ book.read ? "Read!" : "Read it?" }}
      </button>
    </div>
    </div>
  </template>
  
  
  <style scoped>
.book-card {
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}


  h2 {
    font-weight: 600;
  }

  button {
    border-radius: 6px;
    padding: 2px 6px;
    color: white;
  }

  .deleteButton {
    background-color: rgb(239 68 68);
    color: white;
  }
  
  .readDate {
    font-size: small;
    font-style: italic;
  }

  .book-info {
    margin-bottom: 10px;
    padding: 20px;
  }

.priority {
  color: white;
  border-radius: 6px 6px 0px 0px;
}

  .high {
    background-color: rgb(239 68 68);
  }

  .medium {
    background-color: rgb(249 115 22);
  }

  .low {
    background-color: #3dcac3;
  }

  .read {
    text-decoration: line-through;
    background-color: rgb(13 148 136);;
  }

  .unread {
    background-color: #38b2ac;
  }


  </style>