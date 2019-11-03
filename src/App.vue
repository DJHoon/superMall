<template>
  <div id="app">
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="mui-tab-item">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link  to="/member" class="mui-tab-item">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link  to="/cart" class="mui-tab-item">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link  to="/search" class="mui-tab-item">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  name: 'App',
  components: {
    Tabbar,
    TabItem
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
</style>
