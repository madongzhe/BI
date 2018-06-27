// scm
<template>
  <div>
      <China :datas="chinaplaces"></China>
      <div class="chinawd m1">
        <div class="title">首钢通钢</div>
          <div class="content">
              <div class="t">
                <span>热卷</span>
            </div>
            <div class="m">
                <div class="m-l">
                    <img src="/static/image/img-scm-rzj.jpg" width="100%" alt="">
                </div>
                <div class="m-r">
                    <Bar :datas="bar1"></Bar>
                </div>
            </div>
          </div>
      </div>
      <div class="chinawd m2">
        <div class="title">首钢水钢</div>
        <div class="content">
            <div class="t">
                <span>建材</span>
            </div>
            <div class="m">
                <div class="m-l">
                    <img src="/static/image/img-scm-jc.jpg" width="100%" alt="">
                </div>
                <div class="m-r">
                    <Bar :datas="bar2"></Bar>
                </div>
            </div>
        </div>
      </div>
      <div class="chinawd m3">
            <div class="title">首钢京唐</div>
            <div class="content">
                <div class="t">
                    <span>热卷</span>
                </div>
                <div class="m">
                    <div class="m-l">
                        <img src="/static/image/img-scm-rzj.jpg" width="100%" alt="">
                    </div>
                    <div class="m-r">
                        <Bar :datas="bar3"></Bar>
                    </div>
                </div>
                <div class="t">
                    <span>中板</span>
                </div>
                <div class="m">
                    <div class="m-l">
                        <img src="/static/image/img-scm-zb.jpg" width="100%" alt="">
                    </div>
                    <div class="m-r">
                        <Bar :datas="bar4"></Bar>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>
<script>
import China from "../../common/china2";
import Bar from "../../common/bar";
export default {
  name: "china-SCM",
  data() {
    return {
        bar1:{
            id:"bar1",
            width:300,
            height:180
        },
        bar2:{
            id:"bar2",
            width:300,
            height:180
        },
        bar3:{
            id:"bar3",
            width:300,
            height:180
        },
        bar4:{
            id:"bar4",
            width:300,
            height:180
        }
    };
  },
  created() {
    this.chinaplaces = require("./places-SCM.json");
  },
  components: {
    China,
    Bar
  }
};
</script>
<style lang="scss" scoped>
.chinawd {
  .title {
    height: 75px;
    line-height: 75px;
    font-size: 30px;
    margin-left: 85px;
    margin-bottom: 10px;
  }
  .content{
      margin-left: 80px;
      margin-right: 20px;
        .t {
            margin: 20px 0 10px;
            height: 40px;
            background: linear-gradient(
                to right,
                #232254 0%,
                rgba($color: #232254, $alpha: 0) 100%
            );
            span {
                line-height: 40px;
                font-size: 20px;
                margin-left: 10px;
            }
        }
        .m {
            display: flex;
            height: 170px;
            .m-l {
                float: left;
                height: 160px;
                width: 235px;
                border: 1px #129 solid;
                padding: 5px;
                overflow: hidden;
                img{
                    height: 100%;
                }
            }
            .m-r {
                float: left;
                margin-left: 10px;
            }
        }
  }

}
.m1 {
  position: absolute;
  top: 250px;
  left: 2130px;
  background: url(../../assets/image/bg-scm-m1.png) no-repeat;
  width: 650px;
  height: 360px;
}
.m2 {
  position: absolute;
  top: 650px;
  left: 2130px;
  background: url(../../assets/image/bg-scm-m1.png) no-repeat;
  width: 650px;
  height: 360px;
}
.m3 {
  position: absolute;
  top: 300px;
  left: 100px;
  background: url(../../assets/image/bg-scm-m3.png) no-repeat;
  width: 650px;
  height: 590px;
}
</style>
