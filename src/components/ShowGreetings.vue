<template>
  <div>
    <button @click="getGreetings">Get Greetings</button>
    <h1 v-if="greetings">{{ greetings }}</h1>
    <p class="error" v-if="errorMessage">{{ errors }}</p>
  </div>
</template>
<script>
import {HTTP} from '../http-constants'
export default {
  name: 'ShowGreetings',
  data () {
    return {
      greetings: '',
      errors: ''
    }
  },
  methods: {
    getGreetings: function () {
      HTTP.get('/greetings')
        .then(response => {
          this.greetings = response.data.message
        })
        .catch(e => {
          this.errors = e
        })
    }
  }
}
</script>
<style scoped>
.error {
  color: red;
}
</style>
