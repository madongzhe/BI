<template>
  <div class="BI">
    <!-- 左 -->
    <Left></Left>
    <!-- 中 -->
    <Middle></Middle>
    <!-- 右 -->
    <Right></Right>
  </div>
</template>

<script>
import Left from './Left'
import Middle from './Middle'
import Right from './Right'
export default {
  name: 'BI',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      chinaplaces:'1'
    }
  },
  created(){
    
  },
  mounted(){
    document.title = 'BI';
  },
  components: {
    Left,
    Middle,
    Right
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.BI{
  position: relative;;
  // width: 8550px;
  // height: 1070px;
  // margin:5px 0;
  // padding: 0 45px;
}
.middle{
  margin-left: 2880px;
}
.right{
  margin-left: 5760px;
}

</style>
