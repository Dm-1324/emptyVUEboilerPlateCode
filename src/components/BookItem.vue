<template>
  <li>
    <h2>Book Name is- {{ title }} written by {{ author }}</h2>
    <h3>This book is {{ isRead ? 'read' : 'not read' }} by you</h3>
    <button @click="$emit('toggle-book', id)">Mark as {{ isRead ? 'unread' : 'read' }}</button>
    <button @click="$emit('delete-book', id)">Delete Book</button>
  </li>
</template>

<script>
export default {
  emits: ['toggle-book', 'delete-book'],
  data() {
    return {}
  },
  props: {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isRead: { type: Boolean, required: true },
    id: { type: String, required: true },
  },
  methods: {},
}
</script>

<style>
li {
  background: white;
  padding: 1rem;
  margin: 0.7rem 0;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease-in-out;
}

li:hover {
  transform: scale(1.02);
}

h2 {
  font-size: 1.2rem;
  color: #222;
  margin: 0 0 0.3rem 0;
}

h3 {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.8rem;
}

button {
  margin-right: 10px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
}

button:first-of-type {
  background: #4caf50;
  color: white;
}

button:first-of-type:hover {
  background: #43a047;
}

button:last-of-type {
  background: #e74c3c;
  color: white;
}

button:last-of-type:hover {
  background: #c0392b;
}
</style>
