<template>
  <div>
    111
    <p>{{ $store.state.name }}</p>
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
    console.log(this);
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
div {
  font-size: 0.6rem;
}
</style>
