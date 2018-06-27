<template>
  <div>
        <China :datas="chinaplaces"></China>
        <div class="chinawd m1">
            <div class="title">黑龙江</div>
            <div class="content">
                <div class="m">
                    <div>
                        <span>0</span><span>0</span><span>1</span><span>.</span><span>0</span><span>0</span><b>亿元</b>
                    </div>
                    <div>
                        <p>首钢东北振兴产业投资基金(黑龙江)</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="chinawd m2">
            <div class="title">吉林</div>
            <div class="content">
                <div class="m">
                    <div>
                        <span>0</span><span>0</span><span>8</span><span>.</span><span>0</span><span>0</span><b>亿元</b>
                    </div>
                    <div>
                        <p>吉林首钢产业振兴基金合伙企业</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="chinawd m3">
            <div class="title">河北</div>
            <div class="content">
                <div class="m">
                    <div>
                        <span>0</span><span>1</span><span>1</span><span>.</span><span>0</span><span>0</span><b>亿元</b>
                    </div>
                    <div>
                        <p>京冀协同发展曹妃甸投资基金唐山一期</p>
                        <p>唐山协同惠众医疗股权投资基金合伙企业</p>
                        <p>唐山曹妃甸京冀协同绿色产业投资基金合伙</p>
                        <p>唐山京冀协同健康产业基金合伙企业</p>
                        <p>迁安京冀股权投资基金</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="chinawd m4">
            <div class="title">北京</div>
            <div class="content">
                <div class="m">
                    <div>
                        <span>1</span><span>0</span><span>1</span><span>.</span><span>0</span><span>0</span><b>亿元</b>
                    </div>
                    <div>
                        <p>北京首新晋元管理咨询中心</p>
                        <p>北京京西硅谷创新投资中心</p>
                        <p>北京康元同心管理资讯中心</p>
                        <p>首钢园区基金（一期）</p>
                        <p>首钢园区基金（二期）</p>
                        <p>侨梦苑基金</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="chinawd m5">
            <div class="title">四川</div>
            <div class="content">
                <div class="m">
                    <div>
                        <span>0</span><span>0</span><span>9</span><span>.</span><span>0</span><span>0</span><b>亿元</b>
                    </div>
                    <div>
                        <p>成都首钢丝路股权投资基金有限公司</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import China from '../../common/china3';
export default {
    name:'china-fund',
    data(){
        return{
            
        }
    },
    created(){
        this.chinaplaces = require('./places-fund.json');
    },
    components: {
        China
    }

}
</script>
<style lang="scss" scoped>
.chinawd {
  .title {
    height: 75px;
    line-height: 70px;
    font-size: 30px;
    margin-left: 85px;
    margin-bottom: 10px;
  }
  .content{
        margin-left: 80px;
        margin-right: 20px;

        .m {
            height: 170px;
            div:first-child{
                width: 360px; 
                height: 70px; 
                top: 210px; 
                left: 2230px; 
                display: block;
                span{
                    background-color: rgba(36,54,74,.4);
                    width: 45px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    border-radius: 5px;
                    color: #00f6fd;
                    font-size: 35px;
                    font-weight: bold;
                    margin-right: 3px;
                    display: inline-block;
                }
                b{
                    width: 70px;
                    height: 50px;
                    top: 225px;
                    left: 2590px;
                    z-index: 400;
                    font-size: 28px;
                    color: rgb(0, 186, 255);
                    display: inline-block;
                }
            }
            div+div{
                    width: 510px;
                    height: 120px;
                    top: 290px;
                    left: 2230px;
                    font-size: 26px;
                    color: rgb(238, 238, 238);
                    line-height: 45px;
                    display: block;
            }
        }
  }

}
.m1 {
  position: absolute;
  top: 100px;
  left: 2130px;
  background: url(../../assets/image/bg-fund-1.png) no-repeat;
  width: 600px;
  height: 260px;
}
.m2 {
  position: absolute;
  top: 340px;
  left: 2130px;
  background: url(../../assets/image/bg-fund-1.png) no-repeat;
  width: 600px;
  height: 260px;
}

.m3 {
  position: absolute;
  top: 580px;
  left: 2130px;
  background: url(../../assets/image/bg-fund-3.png) no-repeat;
  width: 600px;
  height: 480px;
}
.m4 {
  position: absolute;
  top: 180px;
  left: 205px;
  background: url(../../assets/image/bg-fund-2.png) no-repeat;
  width: 550px;
  height: 480px;
}
.m5 {
  position: absolute;
  top: 680px;
  left: 200px;
  background: url(../../assets/image/bg-fund-4.png) no-repeat;
  width: 555px;
  height: 480px;
}
</style>
