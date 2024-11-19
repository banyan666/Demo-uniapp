<template>
  <view>
    <up-tabbar
        :value="store.activeTab"
        :fixed="true"
        :placeholder="true"
        :safeAreaInsetBottom="true"
    >
      <up-tabbar-item v-for="(item,index) in tabbarItems" :key="index" :icon="getTabbarIcon(item,index)" :text="item.text" @click="handleTabbarItemClick(item, index)"></up-tabbar-item>
<!--      <up-tabbar-item text="首页" icon="home" ></up-tabbar-item>-->
<!--      <up-tabbar-item text="放映厅" icon="photo" ></up-tabbar-item>-->
<!--      <up-tabbar-item text="直播" icon="play-right" ></up-tabbar-item>-->
<!--      <up-tabbar-item text="我的" icon="account" ></up-tabbar-item>-->
    </up-tabbar>
  </view>
</template>

<script setup>
import {useAppStore} from "../../store";
const store = useAppStore()

const getTabbarIcon = (item, index) => {
  return store.activeTab === index ? item.selectedIconPath : item.iconPath
}
const handleTabbarItemClick = (item,index)=>{
  console.log(store)
  store.activeTab=index
  const path = '/'+item.pagePath
  console.log(path,'ssssssssss')
  uni.switchTab({
    url: path
  })

}

const tabbarItems = [
  {
    "pagePath": "pages/index/index",
    "iconPath": "static/logo.png",
    "selectedIconPath": "static/logo.png",
    "text": "首页"
  },
  {
    "pagePath": "pages/mine/index",
    "iconPath": "static/logo.png",
    "selectedIconPath": "static/logo.png",
    "text": "我的"
  }
  ]
</script>

<style scoped>

</style>