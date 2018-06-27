<template>
    <div class="m">
        <div class="row flex StockQ">
	    	<div class="flex-1 text-center num num1">
				<div class="num_title">
					创业投资活跃指数
				</div>
				<div class="num_font">2976</div>
			</div>
			<div class="flex-1 text-center num num2">
				<div class="num_title">
					机构融资景气指数
				</div>
				<div class="num_font">291</div>
			</div>
			<div class="flex-1 text-center num num3">
				<div class="num_title">
					创业投资退出指数
				</div>
				<div class="num_font">6444</div>
			</div>
            <div class="num4 flex">
                <div class="tbheight">
                    <div class="num_title">
                        公募基金
                    </div>
                    <div class="num_font" style="color:#00def8;font-size: 24px;">0.5亿元</div>
                </div>
                <div class="flex-1 text-center">
                    <Pietwo :data="['M2',10/22,100,'占用比例']"></Pietwo>
                </div>
            </div>
		</div>
        <div class="flex details">
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/zhaogang.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/yaodekangming.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/ouzhiyunshang.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/360.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/beiqi.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/liehxk.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/yangbx.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/ftqc.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/guazi.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
            <div class="border-blue-deep">
                <span><img src="../../assets/image/equity/ccbx.png" alt="" srcset=""></span>
                <div class="money">5.6亿元</div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as d3 from "d3";
    import Pietwo from "../../common/pietwo";
    export default {
        name:'app',
        components: {
            Pietwo
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/index";
    .StockQ{
        margin: 10px 0;
        .num{
            height: 85px;
            padding-top: 15px;
            font-size: 26px;
            .num_title{
                font-size: 20px;
                margin: 0px 0px 0px 0px;
                padding: 0px 0px 0px 5px;
            }
        }
        .num1{
            border-left: 6px #3684FB solid;
            background-color: rgba($color: #0C1D5C, $alpha: 0.8);
            .num_font{
                color: #02fcfb;
                padding-top: 5px;
                text-align: center
            }
        }
        .num2{
            border-left: 6px #2CFC19 solid;
            background-color: rgba($color: #0C1D5C, $alpha: 0.8);
            .num_font{
                color: #2CFC19;
                padding-top: 5px;
                text-align: center
            }
        }
        .num3{
            border-left: 6px #E9C734 solid;
            background-color: rgba($color: #0C1D5C, $alpha: 0.8);
            .num_font{
                color: #E9C734;
                padding-top: 5px;
                text-align: center
            }
        }
        .num4{
            height: 100px;
            width: 350px;
            margin-left: 10px;
            background-image: linear-gradient(to right,rgba($color: #0C1D5C, $alpha: 0.8),rgba($color: #0C1D5C, $alpha: 0));
            .tbheight{
                padding: 15px;
                .num_title{
                    font-size: 20px;
                    margin: 0px 0px 0px 0px;
                    padding: 0px 0px 0px 5px;
                }
            }
        }
    }
    .details{
        margin-top: 50px;
        &>div{
            width: 460px;
            height: 90px;
            border-radius: 5px;
            margin-bottom: 45px;
            padding:10px 0;
            display: table;
            &:nth-child(2n){
                margin-left: 50px;
            }
            .money{
                width: 90px;
                height: 90px;
                line-height:90px;
                font-size: 20.5px;
                color: #00def8;
                text-align: center;
                background-color: rgba($color: #0C1D5C, $alpha: 0.8);
                float:right;
            }
            span{ 
                display:table-cell; 
                vertical-align:middle;
                padding-left: 10px;
                img{
                    max-height: 80px;
                }
            } 
        }
    }
</style>

