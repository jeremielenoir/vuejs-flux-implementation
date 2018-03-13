<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#/">Accueil</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item" @click="activate(1)" :class="{ active: isActive == 1}">
        <a class="nav-link" href="#/" >TodoList</a>
      </li>
      <li class="nav-item" @click="activate(2)" :class="{ active: isActive == 2}">
        <a class="nav-link" href="#/page1" >Features</a>
      </li>
      <li class="nav-item" @click="activate(3)" :class="{ active: isActive == 3}">
        <a class="nav-link" href="#/contact" >Pricing</a>
      </li>
    </ul>
    </div>

  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    <h1>Todo List</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  el: '#app',
  data () {
    return {
      isActive: 0
    }
  },
  methods: {
    activate: function (value) {
      this.isActive = value
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
