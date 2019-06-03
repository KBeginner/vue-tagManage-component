<template>
  <div id="app">
    <tag-manager :tags="tags" :tagName="tagName"></tag-manager>
  </div>
</template>

<script>
import TagManager from './components/tag'

export default {
  name: 'app',
  components: {
    TagManager
  },
  data() {
    return {
      tagName: 'name',
      tags:[
        {
          id: 1,
          name: 'vue.js'
        },
        {
          id: 2,
          name: 'element-ui'
        }
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px auto;
  width: 800px;
}
</style>
