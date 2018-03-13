<template>
  <div class="container">
    <h1>axios get fake REST API JSON</h1>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" v-bind:key="user.id">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.title }}</td>
      <td>{{ user.body }}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    var self = this
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        console.log(response.data)
        self.users = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
