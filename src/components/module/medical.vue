<template>
    <div class="medical">
        <div class="t"></div>
        <div class="list">
            <div v-for="(item,index) in medical" :key="item.name" v-if="index<3&&index>=0" >
                <div>{{item.name}}</div>
                <div>
                    <p>已使用床位/开放床位数</p>
                    <p><span style="color:#f8f800;font-size:30px;">{{item.quantityused}}</span> <span style="color:#fff;font-size:20px;">/ {{item.quantity}}</span></p>
                </div>
                <div>
                    <!-- <PiePercent :data="item"></PiePercent> -->
                    <Pietwo :data="['M2'+index,item.quantityused/item.quantity]"></Pietwo>
                </div>
                <div>
                    <p>剩余床位数</p>
                    <p style="text-align: center;margin-top:10px"><span style="color:#00f8f8;font-size:30px;">{{item.quantity-item.quantityused}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import PiePercent from "../common/piePercent"
import Pietwo from "../../common/pietwo"
export default {
  name: "Medical",
  data() {
    return {
        medical:[
            {"name":"首钢医院","quantity":1236,"quantityused":865},
            {"name":"水钢医院","quantity":936,"quantityused":360},
            {"name":"贵钢医院","quantity":836,"quantityused":465}
        ]
    }
  },
  mounted() {
      setInterval(()=>{
          this.medical[0].quantityused = parseInt(Math.random()*1236);
          this.medical[1].quantityused = parseInt(Math.random()*936);
          this.medical[2].quantityused = parseInt(Math.random()*836);
      },5000)
  },
  components: {
    Pietwo
  }
}
</script>

<style lang="scss" scoped>
.medical{
    // background-color: rgb(0, 0, 80);
    margin-left: 80px;
    height: 520px;
        .t{
            height: 80px;
            line-height: 60px;
            font-size: 25px;
            margin-left: 30px; 
            color: #fff;
            small{
                font-size: 70%;
            }  
        }
        .list{
            &>div{
                width: 480px;
                height: 135px;
                margin: 0 auto 5px;
                border: #1331ab 3px solid;
                border-radius: 5px;
                display: flex;
                &>div:first-child{
                    width: 135px;
                    height: 135px;
                    line-height: 140px;
                    text-align: center;
                    font-size: 24px;
                    color: #fff;
                    background-color: rgba(25, 40, 113, 0.5)
                }
                &>div:nth-child(2){
                    color: #fff;
                    width: 170px;
                    margin: 40px 0 0 10px;
                    span{
                        font-weight: 100;
                    }
                }
                &>div:nth-child(3){
                    color: #fff;
                    width: 130px;
                    margin: 15px 0 0 0;
                }
                &>div:nth-child(4){
                    color: #fff;
                    width: 90px;
                    margin: 40px 0 0 5px;
                    span{
                        font-weight: 100;
                    }
                }
            }
        }
    }
</style>
