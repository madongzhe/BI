<template>
    <div>
        <div class="car-title"></div>
        <div class="car-count">
            <div class="t">
                各类型停车位累计数量
            </div>
            <div class="tu">
                <div class="name">
                    <p v-for="item in car.carport" :key="item.name">
                      {{item.name}}
                    </p>
                </div>
                <div class="bar">
                  <template v-for="(item, index) in car.carport">
                    <div :class="'progress m'+index"  :key="index">
                      <span v-bind:style="{width: item.gross/car.carport[0].gross*100 +'%'}"></span>
                    </div>
                  </template>
                </div>
                <div class="number">
                    <p v-for="item in car.carport" :key="item.name">
                      {{item.gross}}
                    </p>
                </div>
            </div>
        </div>
        <div class="car-money">
            <div class="day-money">
                <div class="t text-right">今日累计收入<br><span>（元）</span></div>
                <div class="m ziti">
                    {{getAns(car.money.zfb+car.money.wx+car.money.yl+car.money.xj)}}
                </div>
                <div class="yesterday text-left ziti">较昨日同期 <br><span>+2.3%</span></div>
            </div>
            <div class="zf">
                <div>
                    <img src="../../assets/image/zfb.png" width="50">
                    <p>支付宝支付</p><p>{{getAns(car.money.zfb,1)}}元</p>
                </div>
                <div>
                    <img src="../../assets/image/wx.png" width="50">
                    <p>微信支付</p><p>{{getAns(car.money.wx,1)}}元</p>
                </div>
                <div>
                    <img src="../../assets/image/yinlian.png" width="50">
                    <p>银联支付</p><p>{{getAns(car.money.yl,1)}}元</p>
                </div>
                <div>
                    <img src="../../assets/image/yinlian.png" width="50">
                    <p>现金</p><p>{{getAns(car.money.xj,1)}}元</p>
                </div>
            </div>
            <div class="tu">
				<svg width="900" height="257"></svg>
            </div>
        </div>
    </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "Car",
  data() {
    return {
      car: {
        carport: [
          { name: "住宅", gross: 23414 },
          { name: "写字楼", gross: 3421 },
          { name: "商超", gross: 53532 },
          { name: "酒店", gross: 12143 },
          { name: "医院", gross: 45432 },
          { name: "机场", gross: 54212 },
          { name: "火车站", gross: 73214 }
        ],
        money: { zfb: 1142, wx: 1131, yl: 364,xj:3215 },
        timedata:[
						["1:00",40],
						["2:00",100],
						["3:00",90],
						["4:00",60],
						["5:00",120],
						["6:00",180],
						["7:00",100],
						["8:00",90],
						["9:00",60],
						["10:00",120],
						["11:00",180]
					]
      }
    };
  },
  mounted() {
    this.car.carport.sort(function(a, b) {
      return b.gross - a.gross;
	  });
    var data = this.car.timedata;
    this.bar1up(data,0)
    this.s();
  },
  methods: {
    // 动态数据
    s() {
      setInterval(()=>{
        for(var i=0;i<this.car.carport.length;i++){
           this.car.carport[i].gross+=Math.round(Math.random()*10);
        }
        this.car.carport.sort(function(a, b) {
          return b.gross - a.gross;
        });
          
        
        // 柱状图
        this.car.money.zfb+=Math.round(Math.random()*10)-50;
          this.car.money.wx+=Math.round(Math.random()*10)-50;
          this.car.money.yl+=Math.round(Math.random()*10)-50;
          this.car.money.xj+=Math.round(Math.random()*10)-50;
          var w=this.car.money.zfb;
          setInterval(()=>{
            if(this.car.money.zfb<w+50){
              this.car.money.zfb+=1;
              this.car.money.wx+=1;
              this.car.money.yl+=1;
              this.car.money.xj+=1;
            }
          },20)
        if(parseInt(this.car.timedata[this.car.timedata.length-1][0].split(':')[0])<24){
          this.car.timedata.push([(parseInt(this.car.timedata[this.car.timedata.length-1][0].split(':')[0])+1)+':00',Math.round(Math.random()*200)])
          this.bar1up(this.car.timedata,1)
        }else{
          this.car.timedata=[['01:00',Math.round(Math.random()*200)]];
          this.bar1up(this.car.timedata,1)
        }
        
        // console.log(this.car.timedata)
      },5000)
      
    },
    bar1up(data,n){
      const xValue = function(d){return d[0]};
      //   const xLabel = 'State';
      const yValue = function(d){return d[1]};
      const yLabel = '今日收入趋势';
      const margin = { left: 50, right: 15, top: 50, bottom: 40 };

      const svg = d3.select('svg');
      svg.select('g').remove();// 移除
      svg.select('defs').remove();// 移除
      const width = svg.attr('width');
      const height = svg.attr('height');
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const g = svg.append('g')
                  .attr('transform', `translate(${margin.left},${margin.top})`);
      const xAxisG = g.append('g')
                      .attr('transform', `translate(0, ${innerHeight})`);
      const yAxisG = g.append('g');

      var x = d3.scaleBand().rangeRound([0, innerWidth]).padding(0.1),
          y = d3.scaleLinear().rangeRound([innerHeight, 0]);

      yAxisG.append('text')
            .attr('class', 'axis-label')
            .attr('x', 0)
            .attr('y', -20)
            .attr('fill','#fff')
            .style('font-size','20px')
            //   .attr('transform', `rotate(-90)`)
            .style('text-anchor', 'start')
            .text(yLabel);

        const xScale = d3.scaleBand()
                          .paddingInner(0.6)
                          .paddingOuter(0.4);
        const yScale = d3.scaleLinear();

        const xAxis = d3.axisBottom()
                          .scale(xScale)
                          .tickSize(-innerHeight);

        const yTicks = 5;
        const yAxis = d3.axisLeft()
                        .scale(yScale)
                        .ticks(yTicks)
                        .tickPadding(15)
                        // .tickFormat(d3.format('.0s'))
                        .tickSize(-innerWidth);
      
      //   d3.json('../assets/data/bar4.json', function(error, data){
          xScale.domain(data.map(xValue))
                .range([0, innerWidth]);
          
          yScale.domain([0, d3.max(data, function(d){return yScale(yValue(d))})])
                .range([innerHeight, 0])
                .nice(yTicks);

          //定义一个线性渐变  
          var a = d3.rgb(255,0,0);     
          var b = d3.rgb(0,255,0);     
          var defs = svg.append("defs");
          
          var linearGradient = defs.append("linearGradient")  
                                  .attr("id","linearColor")  
                                  .attr("x1","0%")  
                                  .attr("y1","0%")  
                                  .attr("x2","0%")  
                                  .attr("y2","100%");  
              
          var stop1 = linearGradient.append("stop")  
                                    .attr("offset","0%")  
                                    .style("stop-color",'#02FFFE');  
              
          var stop2 = linearGradient.append("stop")  
                                    .attr("offset","100%")  
                                    .style("stop-color",'#0364FF');  
          if(n===0){
            g.selectAll('rect').data(data)
                              .enter().append('rect')
                              .attr('x', function(d){return xScale(xValue(d))})
                              // .attr('y', function(d){return yScale(yValue(d))})
                              .attr('width', function(d){return xScale.bandwidth()})
                              .attr("fill","url(#" + linearGradient.attr("id") + ")")
                              .on("mouseover",function(d,i){
                                  d3.select(this).attr("fill", "#00C");
                                  d3.select(".car-money .tu")
                                  .append("div")
                                  .style("left",(xScale(xValue(d))+35)+"px")  
                                  .style("top",(yScale(yValue(d))+10)+"px")
                                  .style("position","absolute")
                                  .style("border","1px #ccc solid")
                                  .style("min-width","30px")
                                  .style("padding","2px") 
                                  .style("text-align","center")  
                                  .style("border-radius","3px")  
                                  .attr("class","tips")
                                  .text(d[1]+'元');
                              })
                              .on("mouseout", function (d, i) {
                                  d3.select(this).attr("fill", "url(#" + linearGradient.attr("id") + ")");
                                  // 移除提示框
                                  d3.selectAll(".tips").remove();
                              })
                              // .attr('height', function(d){return innerHeight - yScale(yValue(d))})
                              .transition()
                              .duration(2000)
                              .ease(d3.easeBounceOut)
                              .attrTween('height', function(d){return d3.interpolate(0,innerHeight - yScale(yValue(d)))})
                              .attrTween('y', function(d){return d3.interpolate(innerHeight,yScale(yValue(d)))});
                              // .ease(d3.easeLinear);
          }else{
            g.selectAll('rect').data(data)
                              .enter().append('rect')
                              .attr('x', function(d){return xScale(xValue(d))})
                              // .attr('y', function(d){return yScale(yValue(d))})
                              .attr('width', function(d){return xScale.bandwidth()})
                              .attr("fill","url(#" + linearGradient.attr("id") + ")")
                              .on("mouseover",function(d,i){
                                  d3.select(this).attr("fill", "#00C");
                                  d3.select(".car-money .tu")
                                  .append("div")
                                  .style("left",(xScale(xValue(d))+35)+"px")  
                                  .style("top",(yScale(yValue(d))+10)+"px")
                                  .style("position","absolute")
                                  .style("border","1px #ccc solid")
                                  .style("min-width","30px")
                                  .style("padding","2px") 
                                  .style("text-align","center")  
                                  .style("border-radius","3px")         
                                  .attr("class","tips")
                                  .text(d[1]+"元");
                              })
                              .on("mouseout", function (d, i) {
                                  d3.select(this).attr("fill", "url(#" + linearGradient.attr("id") + ")");
                                  // 移除提示框
                                  d3.selectAll(".tips").remove();
                              })
                              // .attr('height', function(d){return innerHeight - yScale(yValue(d))})
                              .transition()
                              .duration(1750)
                              .ease(d3.easeBounceOut)
                              .attrTween('height', function(d,i){return d3.interpolate(i===data.length-1?0:innerHeight - yScale(yValue(d)),innerHeight - yScale(yValue(d)))})
                              .attrTween('y', function(d,i){return d3.interpolate(i===data.length-1?innerHeight:yScale(yValue(d)),yScale(yValue(d)))});
          }
            

          xAxisG.call(xAxis);
          xAxisG.selectAll('.tick line').remove();
          xAxisG.selectAll('.tick text')
                // .attr('transform', 'rotate(-45)')
                .attr('transform', 'translate(0,10)')
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'middle')
                .attr('x', -5)
                .attr('y', 6)
                .attr('dy', 0)
                .attr('fill','#fff');
      
          yAxisG.call(yAxis);
          yAxisG.selectAll('.tick line')
                .attr("stroke",function(d,i){return i>0?"#00f":"#ccc"})
                .attr('stroke-width', function(d,i){return i>0?"1":"3"});
          
      yAxisG.selectAll('.tick text')
            .attr('fill','#fff');
      yAxisG.selectAll('.domain').remove();
      xAxisG.selectAll('.domain').remove();

      // 画线

      var scale_x = d3.scaleLinear()
        .domain([0, data.length - 1])
        .range([0, innerWidth]);
      var scale_y = d3.scaleLinear()
        .domain([0, d3.max(data.map(function(d,i){return d[1]}))])
        .range([innerHeight, 0]);

      var line_generator = d3.line()
        .x(function (d, i) {
          return scale_x(i);
        })
        .y(function (d) {
          return scale_y(d);
        })
        .curve(d3.curveBasis);
      g.append("path")
        .attr("d", line_generator(data.map(function(d,i){return d[1]})))
        .attr("fill", "none")
        .attr("stroke", "#ff0");



    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: yejingFont;
  src: url("../../assets/yejing.ttf");
}
.car-title {
  width: 100%;
  height: 75px;
  text-align: left;
  line-height: 75px;
  font-size: 25px;
  margin-left: 40px;
  small {
    font-size: 70%;
    margin-left: 10px;
  }
}
.car-count {
  float: left;
  width: 705px;
  height: 410px;
  // background: #bbb;
  .t {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    margin-left: 30px;
  }
  .tu {
    overflow: hidden;
    .name {
      width: 100px;
      text-align: center;
      line-height: 50px;
      float: left;
      background-color: rgba(16, 26, 85, 0.5);
    }
    .bar {
      width: 500px;
      overflow: hidden;
      line-height: 50px;
      float: left;
    }
    @keyframes barWidth0
    {
      0% {width: 0;}
      50% {width: 478px;}
    }
    @keyframes barWidth1
    {
      0% {width: 0;}
      5% {width: 0;}
      55% {width: 478px;}
    }
    @keyframes barWidth2
    {
      0% {width: 0;}
      10% {width: 0;}
      60% {width: 478px;}
    }
    @keyframes barWidth3
    {
      0% {width: 0;}
      15% {width: 0;}
      65% {width: 478px;}
    }
    @keyframes barWidth4
    {
      0% {width: 0;}
      20% {width: 0;}
      70% {width: 478px;}
    }
    @keyframes barWidth5
    {
      0% {width: 0;}
      25% {width: 0;}
      75% {width: 478px;}
    }
    @keyframes barWidth6
    {
      0% {width: 0;}
      30% {width: 0;}
      80% {width: 478px;}
    }
    @keyframes barWidth7
    {
      0% {width: 0;}
      45% {width: 0;}
      85% {width: 478px;}
    }
    @keyframes barWidth8
    {
      0% {width: 0;}
      50% {width: 0;}
      90% {width: 478px;}
    }
    @keyframes barWidth9
    {
      0% {width: 0;}
      55% {width: 0;}
      100% {width: 478px;}
    }

    .m0{
      animation: barWidth0 2s;
    }
    .m1{
      animation: barWidth1 2s;
    }
    .m2{
      animation: barWidth2 2s;
    }
    .m3{
      animation: barWidth3 2s;
    }
    .m4{
      animation: barWidth4 2s;
    }
    .m5{
      animation: barWidth5 2s;
    }
    .m6{
      animation: barWidth6 2s;
    }
    .m7{
      animation: barWidth7 2s;
    }
    .m8{
      animation: barWidth8 2s;
    }
    .m9{
      animation: barWidth9 2s;
    }
    .progress {
      height: 20px;
      background: #041074;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      border-radius: 10px;
      margin: 15px 10px 30px;
      
      // -moz-animation: barWidth 1s;	/* Firefox */
      // -webkit-animation: barWidth 1s;	/* Safari 和 Chrome */
      span {
        position: relative;
        float: left;
        margin: 0 -1px;
        min-width: 30px;
        height: 19px;
        line-height: 16px;
        text-align: right;
        // background: #ECC42E;
        // border: 1px solid;
        // border-color: #bfbfbf #b3b3b3 #9e9e9e;
        border-radius: 10px;

        background-image: linear-gradient(60deg, transparent 0rem, transparent 0.8rem, #ECC422 0.8rem, #ECC42E 1.6rem, transparent 1.6rem, transparent 2.4rem, #ECC42E 2.4rem);
        background-color: #f7db77;
        background-size: 30px 40px;
        // box-shadow: 1px 1px 5px rgba(0, 140, 213, .8);
        // box-shadow: 1px 1px 5px rgba(0, 140, 213, .8);
        // -webkit-animation: process 1000ms infinite linear;
        // animation: process 1000ms infinite linear;
        &:after{
              position: absolute;
              display: block;
              content: "";
              width: 150px;
              max-width: 100%;
              height: 18px;
              right: 0;
              top: 0;
              -webkit-border-radius: 10px;
              border-radius: 10px;
              // background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 98%, rgba(255,255,255,0) 100%);
              // background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(98%,rgba(255,255,255,0.6)), color-stop(100%,rgba(255,255,255,0)));
              // background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 98%,rgba(255,255,255,0) 100%);
              // background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 98%,rgba(255,255,255,0) 100%);
              // background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 98%,rgba(255,255,255,0) 100%);
              background: -webkit-linear-gradient(left, rgba($color: #F7E5A3, $alpha: 0) , #F7E5A3);
              // background: linear-gradient(left,#ECC42E,#F7E5A3);
              animation: right 2000ms infinite ease-in-out;
        }
      }
    }
    /* 动画 */
    @-webkit-keyframes process {
        0% { background-position: 0 0; }
        100% { background-position: 30px 0; }
    }
    @keyframes process {
        0% { background-position: 0 0; }
        100% { background-position: 30px 0; }
    }
    @keyframes right{
      0% { right: 0; }
      70% { right: 0; }
      72% { right: -5px; }
      76% { right: 0; }
      83% { right: -3px; }
      89% { right: 0; }
      100% { right: 0; }
    }
    .number {
      width: 100px;
      text-align: center;
      height: 50px;
      line-height: 50px;
      float: left;
    }
  }
}
.ziti {
  font-family: yejingFont;
}
.car-money {
  float: left;
  width: 900px;
  margin: 0 35px;
  .day-money {
    overflow: hidden;
    height: 75px;
    & > div {
      float: left;
      margin: 0 5px;
    }
    .t {
      width: 150px;
      font-size: 22px;
    }
    .m {
      font-size: 50px;
      letter-spacing: 15px;
      color: #09FAFF;
      text-shadow: 1px 1px 0 #ccc;
    }
    .yesterday {
      font-size: 22px;
      span {
        padding: 0 5px;
        background-color: red;
        border-radius: 3px;
      }
    }
  }
  .zf {
    overflow: hidden;
    height: 80px;
    // background-color: #f00;
    display: flex;
    div {
      flex: 1;
      height: 50px;
      margin: 10px 10px;
      padding: 5px;
      border: #1331ab 3px solid;
      border-radius: 5px;
      background-color: rgba(25, 40, 113, 0.5);
      img {
        float: left;
      }
      p {
        margin-left: 60px;
      }
    }
  }
  .tu {
    width: 100%;
    height: 255px;
    background-color: rgb(12, 11, 61);
    position: relative;
  }
}
</style>


