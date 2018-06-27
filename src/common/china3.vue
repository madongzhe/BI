<template>
  <div id="china3"></div>
</template>
<script>
import * as d3 from "d3";
export default {
    name:'china3',
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
        
        var that = this;
        var svg = d3.select("#china3")
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
        
        // var color = d3.scaleOrdinal(d3.schemeCategory20);
        var color = ["#53FC17","#F60E22","#DE6331","#E5A730","#0094FF"];
        var n=0;

        var root = require('../assets/data/china.json');
        var location = this.datas.location;
        var sh = svg.selectAll("path")
            .data( root.features )
            .enter()
            .append("path")
            .attr("stroke","#fff")
            .attr("stroke-width",1)
            .attr("fill",function(d,i){
                            if(JSON.stringify(location).indexOf(d.properties.name)!=-1){
                                return  color[n++];
                            }else{
                                return "#071752";
                            }
                        })
            .attr("d", path );

            setInterval(()=>{let colorv = 0;sh.transition()
                                .duration(2000)
                                .ease(d3.easeSinInOut)
                                .attrTween("fill",function(d,i){
                                    if(JSON.stringify(location).indexOf(d.properties.name)!=-1){
                                        return  d3.interpolate(color[colorv++],"#071752")
                                    }
                                })},1500);

        var places=this.datas;
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
                .attr('stroke', '#4DFBFF')
                .attr("fill", "#4DFBFF")
                .attr("r",10);
            location.append("circle")
                .attr('stroke', '#000')
                .attr('stroke-width', '3')
                .attr("fill", "#4DFBFF")
                .attr("r",5);
        
    
        //插入一条线
        location.append('path')
                .attr('stroke', '#fff')
                .attr('stroke-width', '3')
                .attr('fill', 'none')
                // 设置路径信息
                .attr('d', function(d,i){
                        if(i==2 || i==4){
                            return 'M0,0  -80,80  '+(-projection([d.log, d.lat])[0]+700) +',80';
                        }else if(i==0){
                            return 'M0,0 130,-130  '+(g_width-projection([d.log, d.lat])[0]-700) +',-130';
                        }else if(i==1){
                            return 'M0,0 60,60  '+(g_width-projection([d.log, d.lat])[0]-700) +',60';
                        }else if(i==3){
                            return 'M0,0 300,300  '+(g_width-projection([d.log, d.lat])[0]-700) +',300';
                        }
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

    }
}
</script>
<style lang="scss" scoped>
    #china{
        position: relative;
    }
</style>
