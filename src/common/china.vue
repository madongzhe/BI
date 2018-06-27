<template>
  <div id="china"></div>
</template>
<script>
import * as d3 from "d3";
export default {
    name:'china',
    props:['datas'],
    data(){
        return{
            
        }
    },
    mounted(){
        this.china();
        this.c()
    },
    methods: {
        china() {
            var width  = 2880;
            var height = 1080;
            var margin = {
                        left: 50,
                        top: 180,
                        right: 50,
                        botton: 30
                    }
            var g_width = width - margin.left - margin.right;
            var g_height = height - margin.top - margin.botton;

            var svg = d3.select("#china")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        
            var projection = d3.geoMercator()
                                .center([107, 31])
                                .scale(1100)
                                .translate([width/2, height/2]);
            
            var path = d3.geoPath()
                        .projection(projection);
            
            
            var color = d3.scaleOrdinal(d3.schemeCategory20);
            
            var root = require('../assets/data/china.json');

            svg.selectAll("path")
                .data( root.features )
                .enter()
                .append("path")
                .attr("stroke","#fff")
                .attr("stroke-width",1)
                // .attr("fill", function(d,i){
                //     return color(i);
                // })
                .attr("fill","#071752")
                .attr("d", path )
                .on("mousemove",function(d,i){
                    d3.select(this)
                        .attr("fill","yellow");
                    //添加提示框的div  
                    d3.select(".tooltip").remove();
                    var tooltip = d3.select("body").append("div")  
                                    .attr("class","tooltip") //用于css设置类样式  
                                    .attr("opacity",0.5)
                                    .style('font-size','16px;')
                                    .style('position','absolute')
                                    .style('background-color','white')
                                    .style('min-width','120px')
                                    .style('height','auto')
                                    .style('color','#333')
                                    .style('border-style','solid')
                                    .style('border-width','1px')
                                    .style('border-radius','5px')
                                    .style('text-align','center');
                    //设置tooltip文字  
                    tooltip.html(root.features[i]["properties"]["name"])  
                    //设置tooltip的位置(left,top 相对于页面的距离)   
                            .style("left",(d3.event.pageX)+"px")  
                            .style("top",(d3.event.pageY+20)+"px")  
                            .style("opacity",1.0);  
                })
                .on("mouseout",function(d,i){
                    d3.select(this)
                        // .attr("fill",color(i))
                        .attr("fill","#071752");
                    d3.select(".tooltip").remove(); 
                });

            var places=this.datas.city;
            //插入分组元素
            var location = svg.selectAll(".location")
                            .data(places.location)
                            .enter()
                            .append("g")
                            .attr("class","location")
                            .attr("transform",function(d){
                                //计算标注点的位置
                                var coor = projection([d.log, d.lat]);
                                return "translate("+ coor[0] + "," + coor[1] +")";
                            });
            //插入一个圆
            var cr = location.append("circle")
                    .attr('stroke', '#f00')
                    .attr("fill", "#f00")
                    .attr("r",3);
            // 波纹动画
            setInterval(()=>{
                location.append("circle")
                    .attr("r",3)
                    .on("mousemove",function(d,i){
                        d3.select(this)
                            .attr("fill","yellow");
                        //添加城市提示框的div  
                        d3.select(".tooltip").remove();
                        var tooltip = d3.select("body").append("div")  
                                        .attr("class","tooltip") //用于css设置类样式  
                                        .attr("opacity",0.5)
                                        .style('font-size','16px;')
                                        .style('position','absolute')
                                        .style('background-color','#f60')
                                        .style('min-width','60px')
                                        .style('height','auto')
                                        .style('color','#fff')
                                        .style('border-style','solid')
                                        .style('border-width','1px')
                                        .style('border-radius','5px')
                                        .style('text-align','center');
                        //设置tooltip文字 
                        tooltip.html(d.name)  
                        //设置tooltip的位置(left,top 相对于页面的距离)   
                                .style("left",(d3.event.pageX)+"px")  
                                .style("top",(d3.event.pageY+20)+"px")  
                                .style("opacity",1.0);  
                    })
                    .on("mouseout",function(d,i){
                        d3.select(this)
                            // .attr("fill",color(i))
                            .attr("fill","#071752");
                        d3.select(".tooltip").remove(); 
                    })
                    // .attr('stroke', '#f00')
                    // .attr("fill", "#f00")
                    .transition()
                    .duration(2000)
                    // .ease(d3.easeExpOut)
                    .attrTween('r', function(d){return d3.interpolate(3,30)})
                    .attrTween('fill-opacity', function(d){return d3.interpolate(1,0)})
                    .attrTween('stroke-opacity', function(d){return d3.interpolate(1,0)})
                    .attrTween("fill", function(d){return d3.interpolate('#f00','#ff0')})
                    .remove();
            },1000);
                    
            //插入一条线
            var path=location.append('path')
                    .attr('class','liners')
                    .attr('stroke', '#fff')
                    .attr('stroke-width', '3')
                    .attr('fill', 'none')
                    //    设置路径信息
                    .attr('d', function(d,i){
                        if(d.name==='北京'){
                            return 'M0,0 -100,100 -900,100';
                        }else if(d.name==='上海'){
                            return 'M0,0 50,50 400,50';
                        }else if(d.name==='长春'){
                             return 'M0,0 50,-50 350,-50';
                        }else if(d.name==='成都'){
                             return 'M0,0 230,230 750,230';
                        }else if(d.name==='天津'){
                             return 'M0,0 30,30 500,30';
                        }
                        // return 'M0,0 20,-40 40,-40';
                        });


            

                //插入一张图片
                // location.append("image")
                //         .attr("x",40)
                //         .attr("y",-40)
                //         .attr("width",90)
                //         .attr("height",90)
                //         .attr("xlink:href",function(d){
                //             return d.img;
                //         });
        },
        // 动态画线
        c(){
            var path = d3.selectAll("#china .liners");
            var totalLength = path.node().getTotalLength();
            path.attr('stroke-dasharray',"0,"+totalLength)
                .transition()
                .duration(1000)
                .delay(1000)
                .attrTween("stroke-dasharray",function(){
                    return d3.interpolateString("0," + totalLength,totalLength + "," + totalLength);
                });
        }
    },
    watch: {
      'datas.isshow' (val, oldval) {
      console.log(val, oldval)
        if(val===1){
            this.c()
        }
      }
    }
}
</script>
<style lang="scss" scoped>
    #china{
        position: relative;
    }
</style>
