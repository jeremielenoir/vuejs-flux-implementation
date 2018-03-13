<template>
  <div class="hello">
    <div class="container">
      <div class="input-group mb-3">
  <input 
    type="text"
    class="form-control"
    placeholder="add tasks" 
    aria-label="Recipient's username" 
    aria-describedby="basic-addon2"
    v-model="newTodoText" 
    v-on:keyup.enter="addNewTodo" 
    >
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" v-on:click="addNewTodo">Ajouter</button>
  </div>
</div>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tasks</th>
      <th scope="col">Button</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(todo,key) in todos" v-bind:key="key">
      <th scope="row">{{ todo.id }}</th>
      <td>{{ todo.title }}</td>
      <td><button v-on:click="todos.splice(index,1)" class="btn btn-outline-danger">x</button></td>
    </tr>
  </tbody>
</table>
  </div>
  
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
