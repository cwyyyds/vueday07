<template>
  <div>
    <router-link to="/homePage">首页</router-link>
    <router-link to="/order">分类</router-link>
    <router-link to="/classification">订单</router-link>
    <router-link to="/my">我的</router-link>
    <p>显示路由切换的页面</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
router-link {
  margin-right: 8px;
}
</style>
