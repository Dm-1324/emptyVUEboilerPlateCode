<template>
  <section>
    <h1>Book Manager App</h1>
    <add-item @add-book="bookAdd"></add-item>
    <ul>
      <book-item
        v-for="book in books"
        :key="book.id"
        :title="book.title"
        :author="book.author"
        :id="book.id"
        :isRead="book.isRead"
        @toggle-book="toggleBook"
        @delete-book="deleteBook"
      >
      </book-item>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      books: [
        { id: 'b1', title: 'Atomic Habits', author: 'James Clear', isRead: true },
        { id: 'b2', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', isRead: false },
        { id: 'b3', title: 'Deep Work', author: 'Cal Newport', isRead: true },
      ],
    }
  },
  methods: {
    toggleBook(id) {
      const currentBook = this.books.find((book) => book.id === id)
      currentBook.isRead = !currentBook.isRead
    },
    bookAdd(title, author) {
      const addNewBook = {
        id: 'b' + (this.books.length + 1),
        title: title,
        author: author,
        isRead: false,
      }
      this.books.push(addNewBook)
    },
    deleteBook(bookID) {
      this.books = this.books.filter((book) => book.id !== bookID)
      console.log(this.books.filter((book) => book.id !== bookID))
    },
  },
}
</script>

<style>
section {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  background-color: white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  padding: 0;
}
</style>
