<template>
  <div id="china2"></div>
</template>
<script>
import * as d3 from "d3";
export default {
    name:'china2',
    props:['datas'],
    data(){
        return{
            
        }
    },
    mounted() {
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

        var svg = d3.select("#china2")
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

        var places=this.datas;

        //插入分组元素
        var company = svg.selectAll(".company")
                        .data(places.company)
                        .enter()
                        .append("g")
                        .attr("class","company")
                        .attr("transform",function(d){
                            //计算标注点的位置
                            var coor = projection([d.log, d.lat]);
                            return "translate("+ coor[0] + "," + coor[1] +")";
                        });
                //插入一个圆
                company.append("circle")
                        .attr('stroke', '#fff')
                        .attr("fill", "#0f0")
                        .attr("r",5);
        //插入一条线
        company.append('path')
                .attr('class','liners')
                .attr('stroke', '#0f0')
                .attr('stroke-width', '1')
                .attr('fill', 'none')
                //    设置路径信息
                .attr('d', function(d,i){
                        if(d.log>115){
                            return 'M0,0 '+(g_width-projection([d.log, d.lat])[0]-1000) +','+(g_height-projection([d.log, d.lat])[1]-588+i*60)+''
                        }else{
                            return 'M0,0 '+(-projection([d.log, d.lat])[0]+1200) +','+(-projection([d.log, d.lat])[1]-100+i*60)+''
                        }
                    });
        // 添加公司名称
        company.append("text")
                // .attr('stroke', '#999')
                .attr("fill", "#cfc")
                .style("outline","1px solid #0f0")
                .attr('x',function(d,i){                                
                        if(d.log>115){
                            return g_width-projection([d.log, d.lat])[0]-995;
                        }else{
                            return -projection([d.log, d.lat])[0]+1195;
                        }
                    })
                .attr('y',function(d,i){
                        if(d.log>115){
                            return g_height-projection([d.log, d.lat])[1]-588+i*60;
                        }else{
                            return -projection([d.log, d.lat])[1]-100+i*60;
                        }
                    })
                .style("text-anchor",function(d,i){
                        if(d.log>115){
                            return "start";
                        }else{
                            return "end";
                        }
                    })
                .text(function(d,i){return d.name})
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

        location.append("text")
                .attr('stroke', '#999')
                .attr("fill", "#fff")
                .attr('font-size','26')
                .attr('y','-20')
                .style("text-anchor","middle")
                .text(function(d,i){return d.name})

        location.append('path')
                .attr('class','liners')
                .attr('stroke', '#fff')
                .attr('stroke-width', '3')
                .attr('fill', 'none')
                //    设置路径信息
                .attr('d', function(d,i){
                        if(i==0){
                            return 'M0,0  -80,80  '+(projection([d.log, d.lat])[0] - g_width+240) +',80';
                        }else if(i==1){
                            return 'M0,0 20,20  '+(g_width-projection([d.log, d.lat])[0]-700) +',20';
                        }else if(i==2){
                            return 'M0,0 50,50  '+(g_width-projection([d.log, d.lat])[0]-700) +',50';
                        }
                    });
        // 波纹动画
        setInterval(()=>{
            location.append("circle")
                .attr("r",3)
                // .on("mousemove",function(d,i){
                //     d3.select(this)
                //         .attr("fill","yellow");
                //     //添加城市提示框的div  
                //     d3.select(".tooltip").remove();
                //     var tooltip = d3.select("body").append("div")  
                //                     .attr("class","tooltip") //用于css设置类样式  
                //                     .attr("opacity",0.5)
                //                     .style('font-size','16px;')
                //                     .style('position','absolute')
                //                     .style('background-color','#f60')
                //                     .style('min-width','60px')
                //                     .style('height','auto')
                //                     .style('color','#fff')
                //                     .style('border-style','solid')
                //                     .style('border-width','1px')
                //                     .style('border-radius','5px')
                //                     .style('text-align','center');
                //     //设置tooltip文字 
                //     tooltip.html(d.name)  
                //     //设置tooltip的位置(left,top 相对于页面的距离)   
                //             .style("left",(d3.event.pageX)+"px")  
                //             .style("top",(d3.event.pageY+20)+"px")  
                //             .style("opacity",1.0);  
                // })
                // .on("mouseout",function(d,i){
                //     d3.select(this)
                //         // .attr("fill",color(i))
                //         .attr("fill","#071752");
                //     d3.select(".tooltip").remove(); 
                // })
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
        //插入一张图片
        // location.append("image")
        //         .attr("x",40)
        //         .attr("y",-40)
        //         .attr("width",90)
        //         .attr("height",90)
        //         .attr("xlink:href",function(d){
        //             return d.img;
        //         });

    }
}
</script>
<style lang="scss" scoped>
    #china{
        position: relative;
    }
</style>
