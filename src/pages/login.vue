<template>
  <view class="normal-login-container">
    <view class="logo-content align-center justify-center flex">

      <text class="title">{{ store.title }}</text>
    </view>
    <view class="login-form-content">
      <view class="login-item">
        <up-input
            placeholder="请输入账号"
            border="surround"
            v-model="loginForm.account"
            shape="circle"
            prefixIcon="lock"
            prefixIconStyle="font-size: 22px;color: #909399"
        ></up-input>
      </view>
      <view class="login-item">
        <up-input
            placeholder="请输入密码"
            border="surround"
            password
            v-model="loginForm.pass"
            shape="circle"
            prefixIcon="eye-off"
            prefixIconStyle="font-size: 22px;color: #909399"
        ></up-input>
      </view>
      <view class="action-btn">
       <up-button @click="handleLogin" type="primary" text="登录"></up-button>
<!--        <button @click="handleLogin" class="login-btn cu-btn block bg-blue lg round">登录</button>-->
      </view>
    </view>
  </view>
</template>

<script setup>
import {useAppStore} from "../store/index.js";
import {getLogin} from '../api/login'
const store = useAppStore()
const codeUrl=ref("");
const captchaEnabled=ref(true);
const loginForm=ref({
  loginSource:1,
  account:'admin',
  pass:'123456'
});
const handleLogin = async () =>{
  // await getLogin(loginForm.value)
  uni.switchTab({
    url: '/pages/index/index'  // 确保这里的 URL 是 tabBar 配置中的页面路径
  });
}

</script>


<style lang="scss">
page {
  background-color: #ffffff;
}

.normal-login-container {
  width: 100%;

  .logo-content {
    width: 100%;
    font-size: 21px;
    text-align: center;
    padding-top: 15%;

    image {
      border-radius: 4px;
    }

    .title {
      margin-left: 10px;
    }
  }

  .login-form-content {
    text-align: center;
    margin: 20px auto;
    margin-top: 15%;
    width: 80%;
    .login-item{
      margin-top: 10%;
    }
    .action-btn{
      margin-top: 10%;
    }
  }
}

</style>

