<template>
  <div>
111
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
    console.log(this);
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
div{
  font-size: .6rem;
}
</style>
