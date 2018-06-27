<template>
  <div class="right">
    <div class="m1">
      <guquantouzi></guquantouzi>
    </div>
    <div class="m2">
      <ziguanzijin></ziguanzijin>
    </div>
    <div class="m3">

    </div>
    <div class="m4">

    </div>
  </div>
</template>
<script>
import guquantouzi from './right/guquantouzi';
import ziguanzijin from './right/ziguanzijin';
export default {
  name: "Right",
  data () {
    return {
      msg: 'Right'
    }
  },
  created(){
      document.title = 'Right';
  },
  components:{
    guquantouzi,
    ziguanzijin
  }
}
</script>
<style lang="scss" scoped>
  .right{
    position:absolute;
    // margin-left: 5760px;
    width: 2880px;
    height: 1080px;
    background: url(../assets/image/R-bg.png) no-repeat;
  }
  .m1{
    position:absolute;
    width: 990px;
    height: 920px;
    left: 520px;
    top:120px;
    // border: 1px #ccc solid;
  }
  .m2{
    position:absolute;
    width: 665px;
    height: 400px;
    left: 1580px;
    top:120px;
  }
  .m3{
    position:absolute;
    width: 510px;
    height: 400px;
    left: 2315px;
    top:120px;
    border: 1px #ccc solid;
  }
  .m4{
    position:absolute;
    width: 1250px;
    height: 415px;
    left: 1580px;
    top:630px;
    border: 1px #ccc solid;
  }
</style>
