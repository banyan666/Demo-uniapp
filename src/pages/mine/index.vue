<template>
  <view style="height: 100%">
    <view class="mine">
      <view style="flex: 2;background: #4cd964"></view>
      <view style="flex: 4;background: red"></view>
    </view>
    <Tabbar></Tabbar>
  </view>
</template>

<script setup>
import Tabbar from '../../components/Tabbar/index'
onShow(()=>{
  uni.hideTabBar({})
})
</script>

<style scoped lang="scss">
.mine{
  width: 100%;
  height: calc(100% - 51px);
  display: flex;
  flex-direction: column;
  flex: 1;
  //background: #2c405a;
}
</style>