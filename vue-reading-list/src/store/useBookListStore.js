import { defineStore } from 'pinia'
import { dummyBooks } from './dummyData';

// this is where we set up the store using Pinia - which is an option of state management tool. We can define our objects structure and also create any methods for manipulating the stored data. Here, I have set the the state to be stored as in local storage, which allows the app to maintain your booklist even when you refresh the page or re-open the app.

export const useBookListStore = defineStore('bookList', {
    state: () => ({
        bookList: [],
        id: 0,
        sortCriteria: "default",
      }),
      persist: {
        enabled: true,
        strategies: [
          {
            key: 'book-list-state',
            storage: localStorage,
          },
        ],
      },
      getters: {
        sortedBookList: (state) => {
          if (state.sortCriteria === "title") {
            return state.bookList.sort((a, b) => a.title.localeCompare(b.title));
          } else if (state.sortCriteria === "author") {
            return state.bookList.sort((a, b) => a.author.localeCompare(b.author));
          } else if (state.sortCriteria === "priority") {
            const priorityValues = { "Must read!": 3, "Want to read": 2, "Might read": 1 };
            return state.bookList.sort((a, b) => priorityValues[b.priority] - priorityValues[a.priority]);
          } else {
            // Default sort order
            return state.bookList.sort((a, b) => a.id - b.id);
          }
        },
      },
      actions: {
        addBook(title, author, priority) {
            const book = {
              title,
              author,
              priority,
             id: this.id++, 
             read: false,
             dateRead: null,
             };
             this.bookList.push(book);
          
        },
        addDummyData() {
          const storedData = localStorage.getItem('book-list-state');
          if (!storedData) {
            dummyBooks.forEach(book => {
              this.bookList.push(book);
            });
          }
        },
        deleteBook(bookId) {
            this.bookList = this.bookList.filter((object) => {
              return object.id !== bookId;
            });
          },
          sortBooks(selectedSortingOption) {
            this.sortCriteria = selectedSortingOption;
          },

          toggleRead(idToFind) {
            const book = this.bookList.find((obj) => obj.id === idToFind);
            if (book) {
              book.read = !book.read;
              if (book.read) {
                book.dateRead = new Date().toLocaleDateString();
              } else {
                book.dateRead = null;
              }
            }
          },
        }
    })
