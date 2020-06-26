<template>
    <div id="buycart">
          <div class='info'>
            <span>30天无忧退货</span>
            <span>48小时快速退款</span>
            <span>满88元免邮费</span>
        </div>
        <div class="list">
         <div class="cartItem" v-for="(item,index) in cartList" :key="index">
                <van-checkbox @change="checkEvent($event,item)" v-model="item.checked"></van-checkbox>
                <van-image
                    fit='cover'
                    width="70"
                    height="70"
                    :src="item.list_pic_url"
                />
                <div class="proBrief">
                    <div class="title">    
                        <span>{{item.goods_name}}</span> 
                        <span class="num">X{{item.number}}</span>
                        </div>
                    <p class="brief">{{item.goods_specifition_name_value}}</p>
                     <div class="operate"><a href="javascript:;" @click="add(item.id,item.number)">+</a>
                            <input type="text"  v-model="item.number">
                            <a class="add" href="javascript:;" @click="cut(item.id,item.number)">-</a></div>
                    <p class="price">￥ {{item.retail_price}}</p>
                </div>
            </div>
        </div>
    <van-submit-bar  :price="cartTotal.checkedGoodsAmount*100"  button-text="提交订单"  @submit="onSubmit">
      <van-checkbox v-model="checkedAll" >全选</van-checkbox>
                    </van-submit-bar>
        <div style="height:50px;"></div>
                 <tab-btn></tab-btn>   
    </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
let mapStateObj=mapState(['cartTotal','cartList'])
import tabBtn from '@/components/tabBtn.vue'
export default {
    data(){
        return{
            checked:true
        }
    },
    computed: {
        ...mapStateObj,
        checkedAll:{
            set(val){
         console.log(val)
         if (val) {
         this.cartTotal.checkedGoodsCount=this.cartTotal.goodsCount 
         }
         
         if(val===false){
          this.cartList.goodsCount=0
         console.log('购物车的总数为'+ this.cartList.goodsCount)
         this.checked=val
         }
            },get(){
               if(this.cartTotal.goodsCount==this.cartTotal.checkedGoodsCount){
                    return true;
                }else{
                    return false;
                }
            }
        }
    },
    created() {
        this.$store.dispatch('AjaxCart')
    },
    mounted() {
        console.log(this.cartList);     
          
    },
    methods: {
        onSubmit:function(){

        },
         checkEvent:async function(event,item){
            console.log(item)
            let res = await axios.post(this.$root.api.CartChecked,{isChecked: Number(event),productIds: item.product_id})
            let data = res.data.data
            console.log(data)
            this.$store.commit('setCarList',data.cartList),
            this.$store.commit('setCartTotal',data.cartTotal)
            this.$forceUpdate()
        },
        add:function(id,num){
       for(let i=0;i<this.cartList.length;i++){
                if(this.cartList[i].id==id&& this.cartList[i].number==num){
                        this.cartList[i].number++
                }
        }
        },
    //     cut:async function(id,item){
    //    let res=await axios.post(this.$root.api.CartList)
    //    console.log(res.data.data);
     
       
    //     },
        cut: function(id,num){
        //    console.log(this.cartList);
        //    console.log(id)
        //  let res=await axios.post(this.$root.api.CartGoodsCount)
        //  let data=res.data.data
        //  console.log(data);
         
         var add= document.querySelector('.add')
         for(let i=0;i<this.cartList.length;i++){
                if(this.cartList[i].id==id&& this.cartList[i].number===num){
                        this.cartList[i].number--
                //         console.log(this.cartList[i])
                //         let that=this
                //    this.$store.commit('setCartTotal',this.cartTotal[i])
                //       this.$forceUpdate()
            //         if (this.cartList[i].id==id&& this.cartList[i].number==1) {
            //          add.classList.add('jinzhi');
            //    }else if(this.cartList[i].id==id&& this.cartList[i].number!==1){
            //         add.classList.remove('jinzhi');
            //    }
                }
        }
        }
    },
     components:{
        tabBtn
    }
}
</script>
<style lang='less'>
 #buycart{
        .info{
            display: flex;
            justify-content: space-around;
            font-size: 14px;
            color: #999;
            height: 28px;
            line-height: 28px;
            background: #efefef;
            span{
                position: relative;
            }
            span::before{
                content:"";
                display: block;
                position: absolute;
                left: -10px;
                top: 8px;
                width: 4px;
                height: 4px;
                border-radius: 2px;
                border: 1px solid red;

            }
        }
        .cartItem{
            padding: 0 5px;
            display: flex;
            align-items: center;
            padding: 10px 5px;
            border-bottom: 1px solid #add8e6;
            .van-checkbox{
                margin: 0 5px;
            }
            .van-image{
                background: #efefef;
            }
            .proBrief{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                height: 70px;
                padding: 0 10px;
                position: relative;
                .title{
                    width: 100%;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    .num {
                        color: #ee0a24;
                        font-size: 16px;
                    }
                }
                .brief{
                    margin: 0;
                    color: #999;
                    font-size: 12px;
                }
                .operate{
                    position: absolute;
                    width: 100px;
                    top: 35px;
                    right: 10px;
                    a {
                        display: inline-block;
                        font-size: 20px;
                        width: 20px;
                        text-decoration: none;
                        vertical-align: middle;
                        background-color: lightgray;
                        color: #000;
                    }
                     input {
                         text-align: center;
                         width: 30px;
                   }
                }
               
            }
               .jinzhi {
                         pointer-events:none ;
                   }
        }
          .van-submit-bar {
                      bottom: 45px;
                   }
    }

</style>
