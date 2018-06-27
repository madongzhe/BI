// D3.v4 百分比例图
<template>
  <div :id="'pietwo'+data[0]">

  </div>
</template>
<script>
import * as d3 from "d3";
export default {
    name:'pietwo',
    props:["data"],
    watch:{
        data:function(val,oldval){
            this.r(oldval[1]);
        }
    },
    mounted() {
        this.r(2);
    },
    methods: {
        r(old){
            var old = old.toFixed(3)
            var dataval = this.data[1].toFixed(3);
            var width = this.data[2]||120;
            var height = width;
            var twoPi = 2 * Math.PI;
            var margin = {
                            left: 10,
                            top: 10,
                            right: 10,
                            botton: 10
                        };
            var g_width = width - margin.left - margin.right;
            var g_height = height - margin.top - margin.botton;

            var arc = d3.arc()
                        .startAngle(0)
                        .innerRadius(g_height/2-10)
                        .outerRadius(g_height/2);
            var id = "#pietwo"+this.data[0];
            d3.select(id+" svg").remove();
            var g = d3.select(id).append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .append("g")
                        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var background = g.append("path")
                .datum({endAngle: twoPi})
                .style("fill", "#0D4BA9")
                .attr("d", arc);

            var foreground = g.append("path")
                .datum({endAngle:  old * twoPi})
                .style("fill", "orange")
                .attr("d", arc);

            var text = g.append("g")
                            .attr("text-anchor", "middle")
                            
                            // .text(100);
                            
            text.append('text')
                .attr("dy", ".1em")
                .style('font-size','18')
                .style('fill','#3c0')
                .text((dataval*100).toFixed(1)+'%');
            text.append('text')
                .attr("dy", "1.5em")
                .style('font-size','12')
                .style('fill','#fff')
                .text(this.data[3]||'床位利用率');
            

            // d3.interval(function() {
                foreground.transition()
                    .duration(1750)
                    .attrTween("d", function(d) {
                                        var interpolate = d3.interpolate(d.endAngle, dataval * twoPi);
                                        return function(t) {
                                        d.endAngle = interpolate(t);
                                        return arc(d);
                                    };
                    });
            // }, 1750);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

