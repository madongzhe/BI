<template>
<div class="left">
    <div class="model1">
        <Car></Car>
    </div>
    <div class="model2">
        <Medical></Medical>
    </div>
    <div class="model3">
        <SCM></SCM>
    </div>
</div>
</template>
<script>
import Car from './module/car'
import Medical from './module/medical'
import SCM from './module/SCM'
export default {
  name: "Left",
  data () {
    return {
      msg: 'left'
    }
  },
  created(){
      document.title = 'left';
  },
  components: {
    Car,
    Medical,
    SCM
  }
}
</script>
<style lang="scss" scoped>
    .left{
        position: absolute;
        width: 2880px;
        height: 1080px;
        background: url(../assets/image/L-bg.png) no-repeat;
        
        .model1{
            float: left;
            width: 1700px;
            height: 520px;
            // background-color: #000050;
            margin:30px 10px 10px 60px;
        }
        .model2{
            float: left;
            width: 540px;
            height: 520px;
            // background-color: #000050;
            margin: 10px;
        }
        .model3{
            float: left;
            width: 2265px;
            height: 460px;
            // background-color: #000050;
            margin: 10px 10px 10px 60px;;
        }
    }
</style>
