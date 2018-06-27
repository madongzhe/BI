// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.prototype.getAns = function (n, m){
    m = m || 8;
    var pattern = /(?=((?!\b)\d{3})+$)/g;
    var that = parseInt(n).toString();
    var o = ""; //补0
    for (let index = 0; index < m - that.length; index++) {
    o = o + "0";
    }
    return (o + that).replace(pattern, ",");
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
