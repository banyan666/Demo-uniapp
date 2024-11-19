## vue3 + vite + pinna + uniapp

# 项目启动须知
## 安装依赖包
优先推荐pnpm(安装命令：npm install -g pnpm)
```sh
pnpm install
```

## 启动
```sh
pnpm run dev:`/*平台*/`
```
举例 pnpm run dev:h5

## 打包生产
```sh
pnpm run build:`/*平台*/`
```
举例 pnpm run build:h5

## 相关文档
[uniapp](https://uniapp.dcloud.net.cn/)
[uview-plus](https://uiadmin.net/uview-plus/components/intro.html)

## 文件路径介绍
```sh
src/api //请求接口目录
src/components //组件目录
src/pages //各个页面路径
src/static //静态资源目录
src/store //pinna状态管理目录
src/utils //工具函数目录