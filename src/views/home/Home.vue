<template>
  <div id="home">
    <mt-header fixed title="首页"></mt-header>
    <mt-swipe :auto="2000" class="mint-swipe">
      <mt-swipe-item class="mint-swipe-item" v-for='item in banner' :key='item.acm'>
        <img :src="item.image" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../assets/image/home/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../assets/image/home/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../assets/image/home/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../assets/image/home/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../assets/image/home/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../assets/image/home/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div>
            </a>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import { Header, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui'
import { getswiperlist } from '../../network/index.js'
export default {
  name: 'Home',
  data () {
    return {
      banner: []
    }
  },
  components: {
    Header,
    Tabbar,
    TabItem,
    Swipe,
    SwipeItem
  },
  created () {
    getswiperlist().then((res) => {
      this.banner = res.data.data.banner.list
      console.log(res.data.data.banner.list)
    })
  }
}
</script>
<style>
#home {
  height: calc(100vh - 50px);
  background-color: #fff;
}
.mint-swipe {
  margin-top: 40px;
  height: 200px;
}
.mint-swipe img {
  height: 100%;
  width: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 {
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
.mui-table-view img{
  height: 60px;
  width: 60px;
}
</style>
