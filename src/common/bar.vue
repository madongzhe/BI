<template>
    <div v-bind:id="datas.id"></div>
</template>
<script>
import * as d3 from "d3";
export default {
    name:'Bar1',
    props:['datas'],
    data(){
        return {};
    },
    mounted(){
        var width = this.datas.width, height = this.datas.height,
            margin = {top: 20, right: 20, bottom: 20, left: 40},
            g_width = width - margin.left - margin.right,
            g_height = height - margin.top - margin.bottom;

        var x = d3.scaleBand().rangeRound([0, g_width]).padding(0.1),
            y = d3.scaleLinear().rangeRound([g_height, 0]);

        var svg = d3.select("#"+this.datas.id)
                    .append("svg")
                    .attr("width",width)
                    .attr("height",height);
        // 添加标题
        // svg.append("text")
        //     .attr("x",width/2)
        //     .attr("y",40)
        //     .attr("text-anchor", "middle")
        //     .text("2017年浏览器使用比例");

        var g = svg.append("g")
                    .attr("width",g_width)
                    .attr("height",g_height)
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // d3.json("http://localhost:801/bar/data/bar1.json", function(error, data) {
            // if (error) throw error;
            var data = require('../assets/data/bar1.json');
            // console.log(data)
            x.domain(data.map(function(d) { return d[0]; }));
            y.domain([0, d3.max(data, function(d) { return d[1]; })]);

            var xAxisG = g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + g_height + ")")
                .call(d3.axisBottom(x));

            xAxisG.selectAll('path')
                .attr("stroke","#ccc")
                .attr('stroke-width',"1");

            xAxisG.selectAll('.tick line')
                .attr("stroke","#ccc")
                .attr('stroke-width',"1");

            xAxisG.selectAll('text')
                .attr("fill","#ccc");

            const yAxisG = g.append("g")
                            .attr("class", "axis axis--y")
                            .call(d3.axisLeft(y).ticks(3));

            yAxisG.selectAll('path')
                .attr("stroke","#ccc")
                .attr('stroke-width',"1");

            yAxisG.selectAll('.tick line')
                .attr("stroke","#ccc")
                .attr('stroke-width',"1");
            yAxisG.selectAll('text')
                .attr("fill","#ccc");

            g.select("g.axis--y.axis")   //add label for y axis  
                .append("text")  
                .attr("fill", "#fff")  
                .attr("text-anchor", "start")  
                .attr("x", -margin.left)  
                .attr("y", -6)  
                .text("单位（万吨）");

            // 添加柱形图
            g.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .style("fill","#3f9")
                .attr("x", function(d) { return x(d[0]); })
                .attr("y", function(d) { return y(d[1]); })
                .attr("width", x.bandwidth())
                .attr("height", function(d) { return g_height - y(d[1]); });
            
            //添加文字
            g.selectAll(".text")
                .data(data)
                .enter()
                .append("text")
                .attr("class", "text")
                .attr("dy", "1em")
                .attr("y", function(d) { return y(d[1]);})
                .attr("x", function(d) { return x(d[0])+x.bandwidth()/2; })
                .attr("text-anchor", "middle")
                .attr("fill","#fff")
                .style("font-size","12px")
                .text(function(d) { return d[1]; });

            // 添加线
            // var line_generator = d3.line()
            //     .x(function (d, i) {
            //         return x(d[0])+20;
            //     })
            //     .y(function (d) {
            //         return y(d[1]/100);
            //     }).curve(d3.curveBasis);

            // g.append("path")
            //     .attr("d", line_generator(data))
            //     .attr("fill", "none")
            //     .attr("stroke", "#f00");
        // });
    }
}
</script>
<style lang="scss" scoped>
    
</style>
