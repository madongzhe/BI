<template>
  <div>
      <China :datas="chinaplaces"></China>
      <div class="bjcar">
        <div class="title">北京车位</div>
        <div v-for="(item, index) in car.bjcarport" :key="index" :class="'line m'+index">
          <div><span>{{item.name}}</span><span style="float:right">{{item.use}} / {{item.gross}}</span></div>
          <div :class="'progress m'+index"  >
            <span v-bind:style="{width: item.use/item.gross*100 +'%'}"></span>
          </div>
        </div>
      </div>
      <div class="changchuncar">
        <div class="title">长春车位</div>
        <div class="line" v-for="(item, index) in car.changchuncarport" :key="index">
          <div><span>{{item.name}}</span><span style="float:right">{{item.use}} / {{item.gross}}</span></div>
          <div :class="'progress m'+index"  >
            <span v-bind:style="{width: item.use/item.gross*100 +'%'}"></span>
          </div>
        </div>
      </div>
      <div class="tianjincar">
        <div class="title">天津车位</div>
        <div class="line" v-for="(item, index) in car.tianjincarport" :key="index">
          <div><span>{{item.name}}</span><span style="float:right">{{item.use}} / {{item.gross}}</span></div>
          <div :class="'progress m'+index"  >
            <span v-bind:style="{width: item.use/item.gross*100 +'%'}"></span>
          </div>
        </div>
      </div>
      <div class="shanghancar">
        <div class="title">上海车位</div>
        <div class="line" v-for="(item, index) in car.shanghancarport" :key="index">
          <div><span>{{item.name}}</span><span style="float:right">{{item.use}} / {{item.gross}}</span></div>
          <div :class="'progress m'+index"  >
            <span v-bind:style="{width: item.use/item.gross*100 +'%'}"></span>
          </div>
        </div>
      </div>
      <div class="chengducar">
        <div class="title">成都车位</div>
        <div class="line" v-for="(item, index) in car.chengducarport" :key="index">
          <div><span>{{item.name}}</span><span style="float:right">{{item.use}} / {{item.gross}}</span></div>
          <div :class="'progress m'+index"  >
            <span v-bind:style="{width: item.use/item.gross*100 +'%'}"></span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import China from '../../common/china';
export default {
    name:'china-car',
    props:['datas'],
    data () {
        return {
            car:{
                bjcarport:[
                {name:'北京新机场停车楼',use:'2839',gross:'4200'},
                {name:'望京医院停车场',use:'172',gross:'530'},
                {name:'中日友好医院地下停车场',use:'172',gross:'1530'},
                {name:'双桥聚乐汇地下停车库',use:'172',gross:'530'},
                {name:'望京医院停车场',use:'172',gross:'530'},
                {name:'望京医院停车场',use:'172',gross:'530'},
                {name:'望京医院停车场',use:'172',gross:'530'}
                ],
                shanghancarport:[
                {name:'上海停车场',use:'172',gross:'530'}
                ],
                changchuncarport:[
                {name:'长春停车场',use:'172',gross:'530'}
                ],
                chengducarport:[
                {name:'成都停车场',use:'172',gross:'530'}
                ],
                tianjincarport:[
                {name:'天津停车场',use:'172',gross:'530'}
                ]
            },
            chinaplaces:{
                city:{},
                isshow:1
            }
        }
    },
    created(){
        this.chinaplaces.city = require('./places.json');
    },
    components: {
        China
    },
    watch: {
      datas (val, oldval) {
        this.chinaplaces.isshow=val;
        // console.log(this.chinaplaces)
      }
    }
}
</script>
<style lang="scss" scoped>
    .bjcar{
        position: absolute;
        width: 500px;
        height: 650px;
        padding: 5px 50px 30px 75px;
        top:300px;
        left: 170px;
        background: url(../../assets/image/bg-map-1.png) no-repeat;
        overflow: hidden;
        animation: 1s changebjcar;
    }
    @-webkit-keyframes changebjcar {
        0% {transform:scale(0);left: 1300px;}
        100% {transform:scale(1);left: 170px;}
    }
    @-webkit-keyframes changechangchuncar {
        0% {transform:scale(0);left: 1300px;}
        100% {transform:scale(1);left: 2150px;}
    }
    @-webkit-keyframes changetianjincar {
        0% {transform:scale(0);left: 1300px;}
        100% {transform:scale(1);left: 2150px;}
    }
    @-webkit-keyframes changeshanghancar {
        0% {transform:scale(0);left: 1300px;}
        100% {transform:scale(1);left: 2150px;}
    }
    @-webkit-keyframes changechengducar {
        0% {transform:scale(0);left: 1300px;}
        100% {transform:scale(1);left: 2150px;}
    }
    .title{
        font-size: 35px;
        margin-left: 10px;
        line-height: 200%;
    }
    .shanghancar,.changchuncar,.chengducar,.chengducar,.tianjincar{
        position: absolute;
        width: 510px;
        height: 145px;
        padding: 15px 50px 40px 75px;
        left: 2150px;
        background: url(../../assets/image/bg-map-2.png) no-repeat;
    }
    .changchuncar{
        top:250px;
        animation: 1s changechangchuncar;
    }
    .tianjincar{
        top:452px;
        animation: 1s changetianjincar;
    }
    .shanghancar{
        top:654px;
        animation: 1s changeshanghancar;
    }
    .chengducar{
        top:860px;
        animation: 1s changechengducar;
    }
    .line{
        margin: 10px;
        span{
            font-size: 22px;
        }
        .progress {
            height: 12px;
            background: #09364D;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            border-radius: 5px;
            margin: 5px 0 35px;
            // -moz-animation: barWidth 1s;	/* Firefox */
            // -webkit-animation: barWidth 1s;	/* Safari 和 Chrome */
            span {
                position: relative;
                float: left;
                margin: 0 -1px;
                min-width: 30px;
                height: 10px;
                line-height: 8px;
                text-align: right;
                background: rgb(238, 241, 5);
                border: 1px solid;
                border-color: #bfbfbf #b3b3b3 #9e9e9e;
                border-radius: 5px;
            }
        }
    }
</style>
