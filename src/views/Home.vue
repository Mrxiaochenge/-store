<template>
  <div class="home" id="home">
    <!-- 搜索框 -->
    <van-search :v-model="searchData" placeholder="请输入搜索关键词" input-align='center' />


    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" :width="375" :height="200">
    <van-swipe-item v-for="(image, index) in images" :key="index">
    <img class="img" v-lazy="image.image_url" />
    </van-swipe-item>
     </van-swipe>


     <!-- 5个宫格 -->
     <van-grid :column-num='5'>
  <van-grid-item  v-for="(item,index) in channel" :key="index" :icon="item.icon_url" :text="item.name" />
    </van-grid>

    
    <!-- 品牌制造商 -->
    <div class="brandlist">
    <van-panel title="品牌制造商">
       <van-grid  :column-num="2">
     <van-grid-item v-for='(item1,index1) in brandList' :key="index1">
       <van-image lazy-load :src="item1.new_pic_url" />
       <h4 class="title">{{item1.name}}</h4>
       <p class="price">{{item1.floor_price}}元起</p>
     </van-grid-item>
     </van-grid>
    </van-panel>
    </div>


    <!-- 新品首发 -->
    <div class="newlist">
    <van-panel title="新品首发">
       <van-grid  :column-num="2">
     <van-grid-item v-for='(item2,index2) in newGoodsList' :key="index2">
       <van-image lazy-load :src="item2.list_pic_url" />
       <h4 class="title ">{{item2.name}}</h4>
       <p class="price ">{{item2.retail_price}}元起</p>
     </van-grid-item>
     </van-grid>
    </van-panel>
    </div>



    <!-- 人气面板 -->
    <div class="hotlist">
    <van-panel title="人气推荐">
      <van-card v-for="(item3,index3) in hotGoodsList" :key="index3"
     :price="item3.retail_price"
     :desc="item3.goods_brief"
     :title="item3.name"
      :thumb="item3.list_pic_url"
      />
    </van-panel>
    </div>

 <!-- 轮播图 -->
    <van-swipe :autoplay="3000" :width="375" :height="200">
    <van-swipe-item v-for="(image, index) in topicList" :key="index">
    <img class="img" v-lazy="image.item_pic_url" />
    </van-swipe-item>
     </van-swipe>


   <div class="jujia">
    <van-panel title="居家">
       <van-grid  :column-num="2">
     <van-grid-item v-for='(item4,index4) in categoryList' :key="index4">
       <van-image lazy-load :src="item4.list_pic_url" />
       <h4 class="title ">{{item4.name}}</h4>
       <p class="price ">{{item4.retail_price}}元起</p>
     </van-grid-item>
     </van-grid>
    </van-panel>
    </div>

     <div class="jujia">
    <van-panel title="餐厨">
       <van-grid  :column-num="2">
     <van-grid-item v-for='(item5,index5) in categoryList1' :key="index5">
       <van-image lazy-load :src="item5.list_pic_url" />
       <h4 class="title ">{{item5.name}}</h4>
       <p class="price ">{{item5.retail_price}}元起</p>
     </van-grid-item>
     </van-grid>
    </van-panel>
    </div>


     <div class="jujia">
    <van-panel title="餐饮">
       <van-grid  :column-num="2">
     <van-grid-item v-for='(item6,index6) in categoryList2' :key="index6">
       <van-image lazy-load :src="item6.list_pic_url" />
       <h4 class="title ">{{item6.name}}</h4>
       <p class="price ">{{item6.retail_price}}元起</p>
     </van-grid-item>
     </van-grid>
    </van-panel>
    </div>

 <div class="jujia">
    <van-panel title="配件">
       <van-grid  :column-num="2">
     <van-grid-item v-for='(item7,index7) in categoryList3' :key="index7">
       <van-image lazy-load :src="item7.list_pic_url" />
       <h4 class="title ">{{item7.name}}</h4>
       <p class="price ">{{item7.retail_price}}元起</p>
     </van-grid-item>
     </van-grid>
    </van-panel>
    </div>

 <div class="jujia">
    <van-panel title="服装">
       <van-grid  :column-num="2">
     <van-grid-item v-for='(item8,index8) in categoryList4' :key="index8">
       <van-image lazy-load :src="item8.list_pic_url" />
       <h4 class="title ">{{item8.name}}</h4>
       <p class="price ">{{item8.retail_price}}元起</p>
     </van-grid-item>
     </van-grid>
    </van-panel>
    </div>

    <div style="height:50px;"></div>
<tab-btn></tab-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import api from '../assets/config/api.js'
import Vue from 'vue';
import { Lazyload } from 'vant';
import tabBtn from '../components/tabBtn'
Vue.use(Lazyload);
export default {
  name: 'Home',
  data() {
    return {
      searchData:'',
      data:{},
      tabActive:0
    }
  },
  computed: {
    // 轮播图数据
       images:function(){
         if (this.data.banner) {
           return this.data.banner
         }else{
           return []
         }
       },
      //  五宫格的数据
       channel:function(){
         if (this.data.channel) {
           return this.data.channel
         }else{
           return []
         }
       },
       brandList:function(){
          if (this.data.brandList) {
           return this.data.brandList
         }else{
           return []
         }
       },
      newGoodsList:function(){
          if (this.data.newGoodsList) {
           return this.data.newGoodsList
         }else{
           return []
         }
       },
        hotGoodsList:function(){
          if (this.data.hotGoodsList) {
           return this.data.hotGoodsList
         }else{
           return []
         }
       },
       topicList:function(){
         if (this.data.topicList) {
          //  console.log(this.data.topicList)
           return this.data.topicList
         }else {
           return []
         }
       },
       categoryList:function(){
         if(this.data.categoryList){
          //  console.log(this.data.categoryList[0].goodsList)
           return this.data.categoryList[0].goodsList
         }else {
           return []
         }
       },
        categoryList1:function(){
         if(this.data.categoryList){
           return this.data.categoryList[1].goodsList
         }else {
           return []
         }
       },
        categoryList2:function(){
         if(this.data.categoryList){
           return this.data.categoryList[2].goodsList
         }else {
           return []
         }
       },
            categoryList3:function(){
         if(this.data.categoryList){
           return this.data.categoryList[3].goodsList
         }else {
           return []
         }
       },
          categoryList4:function(){
         if(this.data.categoryList){
           return this.data.categoryList[4].goodsList
         }else {
           return []
         }
       }
  },
  components: {tabBtn
  },
async mounted() {
  // console.log(api);
  let res=await axios.get(api.IndexUrl);
  console.log(res.data);
  this.data=res.data.data
 },
}
</script>

<style lang="less" >
#home {
   .van-grid-item{
      overflow: hidden;
    }
  .img{
    width: 375px;
    height: 200px;
  }
  .brandlist {
   .van-grid-item__content{
    padding: 0
    }
    .van-image{
      border: 1px solid #fff;
    }
    .title{
   position: absolute;
    top: 0px;
     left: 10px;
    }
    .price{
       position: absolute;
      top: 25px;
      left: 10px;
      font-size: 14px;
      color: #999;
    }
  }
  .newlist{
      .title{ 
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price{
        font-size: 14px;
        color:#999 ;
      }
    }
    .hotlist{
      .van-card__content{
        justify-content: center;
        text-align:left;
      }
      .van-card__title{
        font-weight: 900;
        color: #333;
        font-size: 14px;
        padding: 5px 0;
      }
      .van-card__price{
        color: red;
      }
    }
    .jujia{
       .title{ 
         font-size: 14px;
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price{
        font-size: 12px;
        color:#999 ;
      }
    }
}

</style>

