<template>
  <div>
    <h2>嵌套路由</h2>
    <router-link to="/homepage">首页</router-link>
    <router-link to="/Journalism">新闻</router-link>
    <router-link to="/Sports">体育</router-link>
    <p>显示路由切换的页面</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
