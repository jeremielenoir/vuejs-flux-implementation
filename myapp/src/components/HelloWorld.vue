<template>
  <div class="hello">
    <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo">
    <button v-on:click="addNewTodo">Ajouter</button>
    <ul>
      <li v-for="(todo,key) in todos" v-bind:key="key">
        {{ todo.id }} : {{ todo.title }}
        <button v-on:click="todos.splice(index,1)">x</button>
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Faire la vaisselle'
        },
        {
          id: 2,
          title: 'Sortir les poubelles'
        },
        {
          id: 3,
          title: 'Tondre la pelouse'
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
