<template>
<div class="login">  
  <div class="login-img">
    <h2 class="login-img-h2">智能加密路由网关</h2>
    <div class="login-account">
      <div class="login-yhm">
        <input type="text" class="form-control" placeholder="请输入用户名" v-model="username" @blur="username_s" />
        <span>{{username_ts}}</span>
      </div>
      <div class="login-mm">
        <input type="password" class="form-control" placeholder="请输入密码" v-model="password" @blur="password_s" />
        <span>{{password_ts}}</span>
      </div>
      <div class="login-btn">
        <button class="btn btn-primary" @click="login" type="button">Sign in</button>
        <button class="btn btn-default" @click="reset" type="button">Reset</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      judge: [false, false],
      username_ts: '',
      password_ts: ''
    }
  },
  methods: {
    login: function () {
      if (this.judge[0]) {
        if (this.judge[1]) {
          location.hash = '/content';
        } else {
          this.password_ts = '请填写密码'
        }
      } else {
        this.username_ts = '请填写用户名'
      }
    },
    reset: function () {
      this.username = '';
      this.password = '';
    },
    username_s: function () {
      if (this.username === '') {
        this.judge[0] = false;
      } else {
        this.judge[0] = true;
        this.username_ts = ''
      }
    },
    password_s: function () {
       if (this.password === '') {
         this.judge[1] = false;
       } else {
         this.judge[1] = true;
         this.password_ts = '';
       }
    }
  }
}
</script>


<style scoped>
  .login{
    height: 100%;
  }
  .login-img-h2{
    font-size: 50px;
    color: #007cc2;
    text-align: center;
    position: absolute;
    top: 20%;
    margin-top: -92px;
    width: 100%;
  }
  .login-img{
    width: 100%;
    height: 100%;
    background: url(../assets/login.png) no-repeat center center;
    position: relative;
  }
  .login-account{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 348px;
    height: 184px;
    margin-top: -92px;
    margin-left: -174px;
  }
  .login-account input{
    width: 335px;
    height: 50px;
    margin-bottom: 22px;
    padding-left: 40px;
  }
  .login-btn button{
    width: 157px;
    height: 40px;
    margin-right: 12px;
  }
  .login-yhm input{
    background: #fff url(../assets/yonghuming.png) no-repeat 12px center;

  }
  .login-mm input{
    background: #fff url(../assets/mima.png) no-repeat 12px center;
  }
  
</style>