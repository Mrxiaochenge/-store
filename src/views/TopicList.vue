<template>
<div id="topicList">
        <div>
        <div class="newlist">
       <van-grid  :column-num="1">
     <van-grid-item v-for='(item2,index2) in count' :key="index2" >
       <van-image lazy-load :src="item2.scene_pic_url" />
       <h4 class="title ">{{item2.subtitle}}</h4>
       <p class="price ">{{item2.title}}</p>
     </van-grid-item>
     </van-grid>
    </div>
    </div>


      <tab-btn></tab-btn>
</div>
</template>

<script>
import axios from 'axios'
import tabBtn from '../components/tabBtn'
import api from '@/assets/config/api.js'
export default {
    data() {
        return {
            data:{},
        }
    },
    components: {tabBtn
  },
  computed: {
       count:function(){
        //    console.log(this.data)
         return this.data.data
     }
  },
  async created() {
    let res=await axios.get(api.TopicList)
    console.log(res.data.data);
    this.data=res.data.data
    
  },
}
</script>
<style lang="less" scoped>
.newlist {
    .title {
        margin: 10px;
    }
    .price {
        margin: 10px;
        color: red;
    }
}
</style>
