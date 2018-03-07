<template>
  <nav class="nav-menu">
    <div class="logo"></div>
    <router-link to="/home" class="home-link">HOME</router-link>
    <router-link to="/job" class="job-link">JOBS</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
    
    }
  }
}
</script>

<style>
/* 导航栏及元素宽高固定 */
.nav-menu {
  height: 48px;
}
.nav-menu .logo {
  float: left;
  width: 200px;
  height: 48px;
  background: url(../../static/images/xdf-logo-s.png) left center no-repeat;
}
.nav-menu .home-link, .job-link {
  display: inline-block;
  width: 130px;
  font-size: 26px;
  font-weight: bold;
  line-height: 48px;
  text-decoration: none; 
  color: #303133;
}
</style>

