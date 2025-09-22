<template>
  <form @submit.prevent="addBook">
    <div>
      <label for="Title"> Enter the book name</label>
      <input type="text" placeholder="Title" v-model="enteredBookTitle" />
    </div>
    <div>
      <label for="Author"> Enter the name of the author</label>
      <input type="text" placeholder="Author" v-model="enteredBookAuthor" />
    </div>
    <button>Add Book</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredBookTitle: '',
      enteredBookAuthor: '',
    }
  },
  emits: ['add-book'],
  methods: {
    addBook() {
      this.$emit('add-book', this.enteredBookTitle, this.enteredBookAuthor)
      this.enteredBookAuthor = ''
      this.enteredBookTitle = ''
    },
  },
}
</script>

<style>
form {
  margin-top: 1.5rem;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

div {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #333;
}

input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: border 0.3s;
}

input:focus {
  outline: none;
  border-color: #4caf50;
}

button {
  background: #2196f3;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #1976d2;
}
</style>
