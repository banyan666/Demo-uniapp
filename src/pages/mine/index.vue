<template>
  <view style="height: 100%">
    <view class="mine">
      <view style="flex: 2">
        <view style="width: 100%;height: 100%">
          <l-echart ref="mineEcharts"></l-echart>
        </view>
      </view>
      <view style="flex: 4">
        <LimeEchart></LimeEchart>
      </view>
    </view>
    <Tabbar></Tabbar>
  </view>
</template>

<script setup>
import Tabbar from '../../components/Tabbar/index'
import * as echarts from 'echarts'
import LEchart from '../../uni_modules/lime-echart_0.9.6/components/l-echart/l-echart'
import LimeEchart from "../../uni_modules/lime-echart_0.9.6/components/lime-echart/lime-echart";
const mineEcharts = ref(null)
onShow(()=>{
  uni.hideTabBar({})
  console.log(echarts,'echarts')
  nextTick(async ()=>{
    let chartInstance = await mineEcharts.value.init(echarts)
    console.log(chartInstance,'chartInstance')
    if(chartInstance){
      let options = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
      chartInstance.setOption(options,true);
    }
  })
})
onLoad(()=>{
  console.log(mineEcharts.value,'onload')
})

onMounted(()=>{
  console.log(mineEcharts.value,'onmounted')

})
onReady(()=>{
  console.log(mineEcharts.value,'onready')

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