import { createApp } from 'vue'
import App from './App.vue'
import BookItem from './components/BookItem.vue'
import AddItem from './components/AddItem.vue'

const app = createApp(App)

app.component('book-item', BookItem)
app.component('add-item', AddItem)

app.mount('#app')
