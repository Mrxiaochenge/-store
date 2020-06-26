<template>
    <van-tabbar v-model="tabActive">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="medal-o" to="/topicList">专题</van-tabbar-item>
      <van-tabbar-item icon="qr" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/buyCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/ME">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data(){
        return {
            tabActive:0
        }
    },
    mounted() {        
        switch(this.$route.path){               
                case "/category":               
                    this.tabActive = 2;
                    break;
                case '/':
                    this.tabActive = 0;
                    break;
                    case '/topicList':
                    this.tabActive = 1;
                    break;
                    case '/buyCart':
                    this.tabActive = 3;
                    break;
                     case '/ME':
                    this.tabActive = 4;
                    break;
                default:
                    this.tabActive = 0;
            }
    },   
}
</script>