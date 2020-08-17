<template>
  <div class="hello">
    <h1>{{ msg }}{{ name1 }}</h1>
    <router-link to="/home">主页</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      name1: "cherry",
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      let params = {
        courseType: 0,
        deptId: null,
        grade: null,
        page: 1,
        pageSize: 8,
        subject: "",
      };
      this.axios
        .post("http://192.168.6.213/tpi/course%20/getCourses", params)
        .then(() => {})
        .catch(() => {});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  h1 {
    color: darkgreen;
  }
}
</style>
