<template>
  <div class="circleProgress_wrapper">
        <div class="wrapper right">
            <div class="circleProgress rightcircle" v-bind:style="{WebkitTransform: 'rotate('+ ((((data.quantityused/data.quantity)<0.5?(data.quantityused/data.quantity):0.5)*360)-135)+'deg)'}"></div>
        </div>
        <div class="wrapper left">
            <div class="circleProgress leftcircle" v-bind:style="{WebkitTransform: 'rotate('+ ((((data.quantityused/data.quantity)>0.5?(data.quantityused/data.quantity)-0.5:1)*360)-135)+'deg)'}"></div>
        </div>
        <div class="bgcircleprogress">
			<div style="margin-top:20px;">
				<span>{{(data.quantityused/data.quantity*100).toFixed(1)}}</span>%<br>床位利用率
			</div>
		</div>
 </div>
</template>

<script>
export default {
  name: "piePercent",
  props: ["data"]
};
</script>


<style lang="scss" scoped>
.circleProgress_wrapper {
  width: 110px;
  height: 110px;
  // margin: 10px auto;
  position: relative;
  // border:1px solid #ddd;
}
.wrapper {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
.circleProgress {
  width: calc(200% - 24px);
  height: calc(100% - 24px);
  border: 12px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  z-index: 2;
}
.rightcircle {
  border-top: 12px solid green;
  border-right: 12px solid green;
  right: 0;
//   -webkit-animation: circleProgressLoad_right 5s linear infinite;
}
.leftcircle {
  border-bottom: 12px solid green;
  border-left: 12px solid green;
  left: 0;
//   -webkit-animation: circleProgressLoad_left 5s linear infinite;
}
// @-webkit-keyframes circleProgressLoad_right{
//     0%,50%{
//         -webkit-transform: rotate(45deg);
//     }
//     100%{
//         -webkit-transform: rotate(-135deg);
//     }
// }
// @-webkit-keyframes circleProgressLoad_left{
//     0%{
//         -webkit-transform: rotate(45deg);
//     }
//     50%,100%{
//         -webkit-transform: rotate(-135deg);
//     }
// }
.bgcircleprogress {
	width: calc(100% - 22px);
	height: calc(100% - 22px);
	border: 11px solid #024ab0;
	border-radius: 50%;
	position: relative;
	z-index: 1;
    text-align: center;
	font-size: 14px;
	span{
		font-size: 25px;
		color: yellow;
		font-weight: 100;
	}
}
</style>
