<template>
  <div>
      <China :datas="chinaplaces"></China>
      <!-- 首钢医院 -->
      <div class="chinawd m1 border">
            <div class="title">
              <div>{{medical[0].name}}</div>
              <div>
                  <div class="polygon"></div>
                  最后数据更新时间 2018/01/05 13:00:00
              </div>
            </div>
            <div class="m">
                <div class="m-l">
                    <div>
                        <p>已接待人数</p>
                        <span>{{medical[0].quantity}}</span>
                    </div>
                    <div>
                        <p>等待人数</p>
                        <span>{{medical[0].quantityused}}</span>
                    </div>
                </div>
                <div class="tu">
                  <Pietwo :data="[1,medical[0].useBed/medical[0].Bed]"></Pietwo>
                </div>
                <div class="m-r">
                    <div>
                        <p>已使用床位 / 开放床位数</p>
                        <span class="a">{{medical[0].useBed}}</span> <span>/</span> <span>{{medical[0].Bed}}</span>
                    </div>
                    <div>
                        <p>剩余空闲床位</p>
                        <span>{{medical[0].Bed - medical[0].useBed}}</span>
                    </div>
              </div>
            </div>
            <div class="b">预计明日新增床位 <span>96</span></div>
      </div>
      <!-- 水钢医院 -->
      <div class="chinawd m2 border">
        <div class="title">
            <div>{{medical[1].name}}</div>
            <div>
                <div class="polygon"></div>
                最后数据更新时间 2018/01/05 13:00:00
            </div>
          </div>
          <div class="m">
              <div class="m-l">
                  <div>
                      <p>已接待人数</p>
                      <span>{{medical[1].quantity}}</span>
                  </div>
                  <div>
                      <p>等待人数</p>
                      <span>{{medical[1].quantityused}}</span>
                  </div>
              </div>
              <div class="tu">
                <Pietwo :data="[2,medical[1].useBed/medical[1].Bed]"></Pietwo>
              </div>
              <div class="m-r">
                  <div>
                      <p>已使用床位 / 开放床位数</p>
                      <span class="a">{{medical[1].useBed}}</span> <span>/</span> <span>{{medical[1].Bed}}</span>
                  </div>
                  <div>
                      <p>剩余空闲床位</p>
                      <span>{{medical[1].Bed - medical[1].useBed}}</span>
                  </div>
            </div>
          </div>
          <div class="b">预计明日新增床位 <span>96</span></div>
      </div>
      <!-- 贵钢医院 -->
      <div class="chinawd m3 border">
          <div class="title">
        <div>{{medical[2].name}}</div>
        <div>
            <div class="polygon"></div>
            最后数据更新时间 2018/01/05 13:00:00
        </div>
        </div>
        <div class="m">
            <div class="m-l">
                <div>
                    <p>已接待人数</p>
                    <span>{{medical[2].quantity}}</span>
                </div>
                <div>
                    <p>等待人数</p>
                    <span>{{medical[2].quantityused}}</span>
                </div>
            </div>
            <div class="tu">
            <Pietwo :data="[3,medical[2].useBed/medical[2].Bed]"></Pietwo>
            </div>
            <div class="m-r">
                <div>
                    <p>已使用床位 / 开放床位数</p>
                    <span class="a">{{medical[2].useBed}}</span> <span>/</span> <span>{{medical[2].Bed}}</span>
                </div>
                <div>
                    <p>剩余空闲床位</p>
                    <span>{{medical[2].Bed - medical[2].useBed}}</span>
                </div>
        </div>
        </div>
        <div class="b">预计明日新增床位 <span>96</span></div>
      </div>

      <div class="chinal1 m4">

      </div>
      <div class="chinal2 m5">

      </div>
  </div>
</template>
<script>
import Pietwo from "../../common/pietwo";
import China from "../../common/china1";
export default {
  name:'china-car',
  props:['datas'],
  data() {
    return {
      medical: [
        {
          name: "首钢医院",
          quantity: 1236,
          quantityused: 865,
          useBed: 832,
          Bed: 997
        },
        {
          name: "水钢医院",
          quantity: 936,
          quantityused: 360,
          useBed: 932,
          Bed: 1031
        },
        {
          name: "贵钢医院",
          quantity: 836,
          quantityused: 465,
          useBed: 832,
          Bed: 997
        }
      ],
      chinaplaces:{
          city:{},
          isshow:1
      }
    };
  },
  created() {
    this.chinaplaces = require("./places-medical.json");
  },
  components: {
    China,
    Pietwo
  },
  watch: {
    datas (val, oldval) {
      this.chinaplaces.isshow=val;
    }
  }
};
</script>
<style lang="scss" scoped>
.border {
  border: 1px rgba($color: #003cf7, $alpha: 1) solid;
}
.chinawd {
  position: absolute;
  width: 560px;
  height: 250px;
  left: 2100px;
  border-radius: 5px;
  padding: 5px;
  background-color: rgba($color: #000, $alpha: 0.1);
  .title {
    height: 40px;
    line-height: 200%;
    font-size: 22px;
    display: flex;
    margin-bottom: 10px;
    & > div:first-child {
      width: 170px;
      text-align: center;
      height: 40px;
    }
    & > div + div {
      position: relative;
      background-color: rgba($color: #122140, $alpha: 0.5);
      height: 40px;
      flex: 1;
      margin-left: 40px;
      padding-right: 10px;
      font-size: 14px;
      text-align: right;
      color: #2ebff6;
      .polygon {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 40px solid rgba($color: #122140, $alpha: 0.5);
        border-left: 40px solid transparent;
        left: -40px;
      }
    }
  }
  .m {
    display: flex;
    .m-l {
      & > div {
        width: 170px;
        height: 70px;
        background-color: rgba($color: #20b, $alpha: 0.3);
        margin-bottom: 10px;
        text-align: center;
        p {
          font-size: 15px;
          line-height: 250%;
        }
        span {
          font-size: 24px;
          line-height: 100%;
          text-shadow: 0 0 10px #ccc;
        }
      }
    }
    .tu {
      width: 130px;
      margin: 20px 20px 10px 40px;
    }
    .m-r {
      & > div:first-child {
        margin-top: 20px;
        p {
        }
        span {
          font-size: 30px;
          font-weight: 100;
        }
        .a {
          color: #ffe600;
          font-size: 36px;
          font-weight: 100;
        }
      }
      & > div + div {
        span {
          font-size: 36px;
          font-weight: 100;
          color: #0ce6ff;
        }
      }
    }
  }
  .b {
    background-color: rgba($color: #22f, $alpha: 0.5);
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    span {
      font-size: 20px;
      vertical-align: bottom;
    }
  }
}
.chinal1{
  position: absolute;
  width: 470px;
  height: 320px;
}
.chinal2{
  position: absolute;
  width: 470px;
  height: 580px;
}
.m1 {
  top: 150px;
}
.m2 {
  top: calc(150px + 280px);
}
.m3 {
  top: calc(150px + 280px + 280px);
}
.m4{
  top: 150px;
  left:100px;
  background:url(../../assets/image/jxzlq.png) no-repeat;
}
.m5{
  top: calc(150px + 350px);
  left:100px;
  background:url(../../assets/image/lpszlq.png) no-repeat;
}
</style>
