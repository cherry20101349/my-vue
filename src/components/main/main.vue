<template>
  <div>
    <login></login>
    111
    <p>{{ $store.state.isLogin }}</p>
  </div>
</template>

<script>
import login from "../../components/login/login";
export default {
  name: "HelloWorld",
  components: {
    login,
  },
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
<style></style>
