<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App2'
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  background-color: #091740;
  font-weight: 800;
  color: #fff;
}
p{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
div:before{
  content: " ";
  clear: both;
}

.text-right{
  text-align: right;
}
.text-center{
  text-align:center;
}
.text-left{
  text-align: left;
}
</style>
