<template>
    <div>
         <div class="header">
             <!-- <van-icon name="chat-o" /> -->
    <div class="touxiang">
         <van-icon name="contact" />
    </div>
     <p>请先登录</p>
         </div>
         <van-grid  :column-num="3">
  <van-grid-item icon="bill-o" text="我的订单" />
    <van-grid-item icon="gift-card-o" text="优惠券" />
      <van-grid-item icon="gift-o" text="礼品卡" />
        <van-grid-item icon="star-o" text="我的收藏" />
          <van-grid-item icon="eye-o" text="我的足迹" />
            <van-grid-item icon="vip-card-o" text="会员福利" />
              <van-grid-item icon="bag-o" text="账号安全" />
                <van-grid-item icon="chat-o" text="联系客服" />
            <van-grid-item icon="smile-comment-o" text="帮助中心" />
                 <van-grid-item icon="location-o" text="地址管理" />
              <van-grid-item icon="records" text="意见反馈" />
</van-grid>
         <tab-btn></tab-btn>
    </div>
</template>
<script>
import tabBtn from '../components/tabBtn.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        tabBtn 
    }
}
</script>
<style lang="less" scoped>
 .header {
     width: 100%;
     height: 240px;
     background-color: #333333;
     .touxiang {
      width: 100px;
      height: 100px;
      background-color: #fff;
     border-radius: 50%;
     position: absolute;
     top:115px;
     left: 20px;
     .van-icon {
         font-size: 95px;  
         color: #ccc; 
     }
     }
     
     p {
         font-size: 24px;
         color: #ccc;
         position: absolute;
         left: 140px;
         top: 130px;
     }
 }
</style>
