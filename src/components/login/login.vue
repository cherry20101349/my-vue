<template>
  <div class="login-mask" id="login-mask">
    <div class="login">
      <h3>登录 <i class="close" id="close"></i></h3>
      <form id="loginForm">
        <div>
          <label
            ><input
              class="loginName ipt"
              id="loginName"
              type="text"
              placeholder="请输入账号"
            /><i class="close_ipt none">X</i></label
          ><label
            ><input
              class="password ipt"
              id="password"
              type="password"
              placeholder="请输入密码"
            /><i class="close_ipt none">X</i></label
          >
        </div>
        <p class="error" id="error"></p>
        <input class="submit" id="submit" type="button" value="登录" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  created() {
    console.log(1);
    this.login();
  },
  methods: {
    login() {
      var url = "http://192.168.6.213/tpi/user/login";
      this.axios
        .post(url, {
          loginName: "admin",
          loginSrc: 1,
          password: "fsmeeting0229",
        })
        .then((res) => {
          // // console.log(res.data);
          // this.$message.success("登录成功");
          let data = res.data.body;
          console.dir(11);
          console.dir(data);
          this.$store.dispatch("setUser", true);
          // //根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
          // this.$store.commit("set_token", data["Authentication-Token"]);
          // if (store.state.token) {
          //   this.$router.push("/");
          //   console.log(store.state.token);
          // } else {
          //   this.$router.replace("/login");
          // }
        })
        .catch(() => {
          // this.$message.error(error.status)
          // this.loading = false;
          // this.loginBtn = "登录";
          // this.$message.error("账号或密码错误");
          // console.log(error)
        });
    },
  },
};
</script>

<style scoped>
.login-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.2);
}
.login-mask .login {
  width: 5.5rem;
  height: 4.8rem;
  border-radius: 0.1rem;
  padding: 0 0.44rem;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999;
}
</style>
