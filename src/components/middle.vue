<template>
  <div class="middle">
    <div v-bind:class="[model==1?'active':'','btn','car']" @click="model=1">停车数据</div>
    <div v-bind:class="[model==2?'active':'','btn','medical']" @click="model=2">医疗数据</div>
    <div v-bind:class="[model==3?'active':'','btn','supplychain']" @click="model=3">供应链数据</div>
    <div v-bind:class="[model==4?'active':'','btn','fund']" @click="model=4">基金类投资</div>
    <!-- 停车数据 -->
    <!-- <div v-bind:class="[model==1?'show':'hide','map1']">
      <ChinaCar :datas="model"></ChinaCar>
    </div> -->
    <!-- 医疗数据 -->
    <!-- <div v-bind:class="[model==2?'show':'hide','map2']">
      <ChinaMedical :datas="model"></ChinaMedical>
    </div> -->
    <!-- 供应链数据 -->
    <!-- <div v-bind:class="[model==3?'show':'hide','map3']">
      <ChinaSCM :datas="model"></ChinaSCM>
    </div> -->
    <!-- 基金类投资 -->
    <!-- <div v-bind:class="[model==4?'show':'hide','map4']">
      <ChinaFund :datas="model"></ChinaFund>
    </div> -->
    <!-- <keep-alive>    -->
        <component v-bind:is="tabView" :datas="model"></component>  
    <!-- </keep-alive>  -->
  </div>
</template>
<script>
import ChinaCar from './middle/china-car';
import ChinaMedical from './middle/china-medical';
import ChinaSCM from './middle/china-SCM';
import ChinaFund from './middle/china-fund';
export default {
  name: "Middle",
  data () {
    return {
      model:1,
      tabView:ChinaCar
    }
  },
  created(){
      document.title = 'Middle';
  },
  mounted(){
    
    setInterval(()=>{
      if(this.model<4){
        this.model++;
      }else{
        this.model=1;
      }
    },600000)
  },
  components: {
    ChinaCar,
    ChinaMedical,
    ChinaSCM,
    ChinaFund
  },
  watch: {
      model (val, oldval) {
        switch (val) {
          case 1:
            this.tabView=ChinaCar
            break;
          case 2:
            this.tabView=ChinaMedical
            break;
          case 3:
            this.tabView=ChinaSCM
            break;
          case 4:
            this.tabView=ChinaFund
            break;
          default:
            break;
        }
      }
    } 
}
</script>
<style lang="scss" scoped>
  .middle{
    position: absolute;
    width: 2880px;
    height: 1080px;
    background: url(../assets/image/M-bg.png) no-repeat;
    .show{
      display: block;
    }
    .hide{
      display: none;
    }
    .btn{
      padding: 3px 15px;
      margin: 5px;
      display: inline-block;
      cursor:pointer;
      z-index: 10;
      &:hover{
        border: 1px #00DEFF solid;
        border-radius: 5px;
        color: #fff;
        background-color: #02367F;
      }
      &.active{
        border: 1px #00DEFF solid;
        border-radius: 5px;
        color: #fff;
        background-color: #02367F;
      }
      
      &.car,&.medical,&.supplychain,&.fund{
        position: absolute;
        top:40px;
        font-size: 28px;
      }
      &.car{
        left:400px;
      }
      &.medical{
        left:700px;
      }
      &.supplychain{
        left: 2000px;
      }
      &.fund{
        left: 2300px;
      }
    } 
  }
</style>
