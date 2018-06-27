<template>
    <div class="scm">
        <div class="scm-title"></div>
        <div class="content">
            <div class="module1">
                <div class="t">应收账款转让金额（万元）</div>
                <div class="m ziti">
                    {{getAns(money,6)}}
                </div>
                <div class="chart">
                    <Pieone v-bind:data="dataval"></Pieone>
                </div>
            </div>
            <div class="module2">
              <!-- <img src="../../assets/image/20180302091825.png" alt=""> -->
              <div class="m">
                <div class="t1">物银通</div>
                <div class="l1"></div>
                <div class="r1">
                  <div></div>
                  <p>物流类</p>
                </div>
                <div class="t2">银企直联</div>
                <div class="l2"></div>
                <div class="r2">
                  <div></div>
                  <p>应付类</p>
                </div>
                <div class="t3">付款代理</div>
                <div class="l3"></div>
                <div class="t4">穿透类型</div>
                <div class="l4"></div>
                <div class="t5">票据类型</div>
                <div class="l5"></div>
                <div class="r6">
                  <div>供应链产品</div>
                </div>
                <div class="t7">企业直连</div>
                <div class="l7"></div>
                <div class="r7">
                  <div></div>
                  <p>物流类</p>
                </div>
                <div class="t8">项目类</div>
                <div class="l8"></div>
                <div class="t9">厂商银</div>
                <div class="l9"></div>
                <div class="t10">银企直联</div>
                <div class="l10"></div>
                <div class="r10">
                  <div></div>
                  <p>存货类</p>
                </div>
                <div class="t11">报税仓类</div>
                <div class="l11"></div>
                <div class="t12">仓单类</div>
                <div class="l12"></div>
                <div class="t13">订单类</div>
                <div class="l13"></div>
              </div>
            </div>
            <div class="module3">
              <div >
                <div class="r"></div>
                <div class="t">EDDM-风控模式</div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pieone from "../../common/pieone";
export default {
  name: "SCM",
  data() {
    return {
      dataval: [
        ["2001-5000万", 5],
        ["1001-2000万", 6],
        ["501-1000万", 10],
        ["0-500万", 10]
      ],
      money:12312
    };
  },
   mounted() {
     setInterval(()=>{
       var w=this.money+Math.random()*100;
       if(w>1000000){
         w=Math.random()*10000;
       }
       this.s(w);
     },3000)
     
   },
   methods:{
    //  动态数据
    s(w){
      setInterval(()=>{
            if(this.money<w+50){
              this.money+=1;
            }
          },10)
    }
  },
  components: {
    Pieone
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: yejingFont;
  src: url("../../assets/yejing.ttf");
}
.scm {
  .scm-title {
    height: 60px;
    line-height: 60px;
    font-size: 25px;
    margin-top: 10px;
    margin-left: 30px;
    color: #fff;
    small {
      font-size: 70%;
    }
  }
  .ziti {
    font-family: yejingFont;
  }
  .content {
    display: flex;
  }
  .module1 {
    .t {
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      margin-left: 30px;
      color: #fff;
    }
    .m {
      font-size: 50px;
      letter-spacing: 15px;
      color: #09faff;
      margin-left: 30px;
      text-shadow: 1px 1px 0 #ccc;
    }
    .chart {
      height: 235px;
      width: 390px;
      margin: 10px 0 0 20px;
      border: #09faff 2px solid;
      border-radius: 5px;
    }
  }
  .module2 {
    margin: 0 100px;
    .m{
      width: 864px;
      height: 347px;
      position: relative;
      .t1{
        position: absolute;
        background: url(../../assets/image/bg-t1.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:93px;
        left: 100px;
        animation: t1-box 3s ease infinite;
      }
      .l1{
        position: absolute;
        background: url(../../assets/image/bg-l1.png) no-repeat;
        height: 2px;
        width: 125px;
        top:125px;
        left: 170px;
        animation: l1-box 3s ease infinite;
      }
      .r1{
        position: absolute;
        text-align: center;
        top:95px;
        left: 300px;
        &>div{
          background: url(../../assets/image/bg-r1.png) no-repeat;
          height: 52px;
          width: 52px;
        }
        p{
          font-size: 18px;
        }
      }
      .t2{
        position: absolute;
        background: url(../../assets/image/bg-t2.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:200px;
        left: 50px;
        animation: t2-box 3s ease infinite;
      }
      .l2{
        position: absolute;
        background: url(../../assets/image/bg-l2.png) no-repeat;
        height: 17px;
        width: 183px;
        top:233px;
        left: 120px;
        animation: l2-box 3s ease infinite;
      }
      .r2{
        position: absolute;
        text-align: center;
        top:245px;
        left: 300px;
        &>div{
          background: url(../../assets/image/bg-r2.png) no-repeat;
          height: 52px;
          width: 52px;
        }
        p{
          font-size: 18px;
        }
      }
      .t3{
        position: absolute;
        background: url(../../assets/image/bg-t2.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:240px;
        left: 50px;
      }
      .l3{
        position: absolute;
        background: url(../../assets/image/bg-l1.png) repeat-x;
        height: 2px;
        width: 170px;
        top:273px;
        left: 120px;
      }
      .t4{
        position: absolute;
        background: url(../../assets/image/bg-t2.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:280px;
        left: 50px;
      }
      .l4{
        position: absolute;
        background: url(../../assets/image/bg-l3.png) no-repeat;
        height: 11px;
        width: 158px;
        top:303px;
        left: 120px;
      }
      .t5{
        position: absolute;
        background: url(../../assets/image/bg-t2.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:320px;
        left: 50px;
      }
      .l5{
        position: absolute;
        background: url(../../assets/image/bg-l4.png) no-repeat;
        height: 35px;
        width: 173px;
        top:320px;
        left: 120px;
      }
      .r6{
        position: absolute;
        background: url(../../assets/image/bg-r3.png) no-repeat;
        height: 221px;
        width: 221px;
        top:85px;
        left: 370px;
        border-radius: 50%;
        box-shadow: 0 0 250px #099EFC;
        -webkit-animation: r6-box 4s linear both infinite;
        &>div{
          line-height: 220px;
          text-align: center;
          font-size: 26px;
        }
      }
      .t7{
        position: absolute;
        background: url(../../assets/image/bg-t3.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:50px;
        left: 740px;
        animation: t7-box 3s ease infinite;
      }
      .l7{
        position: absolute;
        background: url(../../assets/image/bg-l8.png) no-repeat;
        height: 17px;
        width: 123px;
        top:82px;
        left: 660px;
        animation: l7-box 3s ease infinite;
      }
      .r7{
        position: absolute;
        text-align: center;
        top:95px;
        left: 610px;
        &>div{
          background: url(../../assets/image/bg-r4.png) no-repeat;
          height: 52px;
          width: 52px;
        }
        p{
          font-size: 18px;
        }
      }
      .t8{
        position: absolute;
        background: url(../../assets/image/bg-t3.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:90px;
        left: 795px;
      }
      .l8{
        position: absolute;
        background: url(../../assets/image/bg-l1.png) repeat-x;
        height: 2px;
        width: 170px;
        top:122px;
        left: 670px;
      }
      .t9{
        position: absolute;
        background: url(../../assets/image/bg-t3.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:130px;
        left: 795px;
      }
      .l9{
        position: absolute;
        background: url(../../assets/image/bg-l9.png) no-repeat;
        height: 17px;
        width: 158px;
        top:154px;
        left: 680px;
      }
      .t10{
        position: absolute;
        background: url(../../assets/image/bg-t4.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:198px;
        left: 795px;
      }
      .l10{
        position: absolute;
        background: url(../../assets/image/bg-l8.png) no-repeat;
        height: 17px;
        width: 183px;
        top:230px;
        left: 660px;
      }
      .r10{
        position: absolute;
        text-align: center;
        top:245px;
        left: 610px;
        &>div{
          background: url(../../assets/image/bg-r5.png) no-repeat;
          height: 52px;
          width: 52px;
        }
        p{
          font-size: 18px;
        }
      }
      .t11{
        position: absolute;
        background: url(../../assets/image/bg-t4.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:240px;
        left: 795px;
      }
      .l11{
        position: absolute;
        background: url(../../assets/image/bg-l1.png) repeat-x;
        height: 2px;
        width: 173px;
        top:272px;
        left: 670px;
      }
      .t12{
        position: absolute;
        background: url(../../assets/image/bg-t4.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:280px;
        left: 795px;
      }
      .l12{
        position: absolute;
        background: url(../../assets/image/bg-l9.png) no-repeat;
        height: 11px;
        width: 158px;
        top:305px;
        left: 680px;
      }
      .t13{
        position: absolute;
        background: url(../../assets/image/bg-t4.png) no-repeat;
        width: 114px;
        height: 35px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        top:320px;
        left: 795px;
      }
      .l13{
        position: absolute;
        background: url(../../assets/image/bg-l10.png) no-repeat;
        height: 35px;
        width: 173px;
        top:320px;
        left: 670px;
      }
    }
  }
  @keyframes t1-box {
    0%{
      top:93px;
      left: 100px;
    }
    50%{
      top:88px;
      left: 103px;
    }
    100%{
      top:93px;
      left: 100px;
    }
  }
  @keyframes l1-box {
    0%{
      -webkit-transform:rotate(0deg);
      transform-origin:right center;
      width: 125px;
      left: 170px;
    }
    50%{
      -webkit-transform:rotate(3deg);
      transform-origin:right center;
      width: 122px;
      left: 173px;
    }
    100%{
      -webkit-transform:rotate(0deg);
      transform-origin:right center;
      width: 125px;
      left: 170px;
    }
  }
  @keyframes t2-box {
    0%{
      top:200px;
      left: 50px;
    }
    50%{
      top:195px;
      left: 53px;
    }
    100%{
      top:200px;
      left: 50px;
    }
  }
  @keyframes l2-box {
    0%{
      -webkit-transform:rotate(0deg);
      transform-origin:right center;
      width: 183px;
      left: 120px;
    }
    50%{
      -webkit-transform:rotate(2deg);
      transform-origin:right center;
      width: 180px;
      left: 123px;
    }
    100%{
      -webkit-transform:rotate(0deg);
      transform-origin:right center;
      width: 183px;
      left: 120px;
    }
  }
  @keyframes t7-box {
    0%{
        top:50px;
        left: 740px;
    }
    50%{
        top:45px;
        left: 737px;
    }
    100%{
        top:50px;
        left: 740px;
    }
  }
  @keyframes l7-box {
    0%{
      -webkit-transform:rotate(0deg);
      transform-origin:left center;
        width: 123px;
    }
    50%{
      -webkit-transform:rotate(-2deg);
      transform-origin:left center;
        width: 120px;
    }
    100%{
      -webkit-transform:rotate(0deg);
      transform-origin:left center;
        width: 123px;
    }
  }
  @keyframes r6-box {
    0%{
      box-shadow: 0 0 250px #099EFC;
    }
    50%{
      box-shadow: 0 0 50px #000dff;
    }
    100%{
      box-shadow: 0 0 250px #099EFC;
    }
  }
  .module3 {
    position: relative;
    width: 770px;
    background: url(../../assets/image/fkmx.png) no-repeat;
    .r {
      position: absolute;
      width: 255px;
      height: 255px;
      border: 15px rgba($color: #0d2b4c, $alpha: 0.5) dashed;
      border-radius: 50%;
      left: 248px;
      top: 42px;
      box-shadow: 4px -40px 60px 5px rgb(26, 117, 206) inset;
      -webkit-animation: stars-rotate-reverse 30s linear both infinite;
      animation: stars-rotate-reverse 30s linear both infinite;
    }
    .t {
      position: absolute;
      text-align: center;
      font-size: 30px;
      left: 275px;
      top: 165px;
    }
  }
  @keyframes stars-rotate-reverse {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      border-color: #0d2b4c;
    }
    50% {
      border-color: rgb(26, 117, 206);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      border-color: #0d2b4c;
    }
  }
  @keyframes stars-rotate-reverse {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      border-color: #0d2b4c;
      // box-shadow: 0 0 0 0 rgba($color: #0D2B4C, $alpha: 0.5);
    }
    50% {
      border-color: rgb(26, 117, 206);
      // box-shadow: 0 0 35px 0 rgba($color: #fff, $alpha: 0.5);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      border-color: #0d2b4c;
      // box-shadow: 0 0 0 0 rgba($color: #0D2B4C, $alpha: 0.5);
    }
  }
}
</style>
