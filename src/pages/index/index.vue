<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text>这是一个uni-app项目</text>
    </view>
    <Tabbar></Tabbar>
  </view>
</template>

<script setup>
import Tabbar from '../../components/Tabbar/index'
const title =ref('')
onShow(()=>{
  uni.hideTabBar({})
  title.value = import.meta.env.VITE_BASE_API
})
onLoad(()=>{
  console.log('页面加载')
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
