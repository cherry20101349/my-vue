<template>
  <div class="hello">
    <router-link to="/home">主页</router-link> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name1: 'cherry'
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      this.axios.post('http://192.168.6.213/tpi/course%20/getCourses').then(() =>{

      }).catch(() => {

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello{
  h1{
    color: darkgreen;
  }
}
</style>
