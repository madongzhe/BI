<template>
    <div class="pie" id="pieone">
    </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "Pieone",
  props: ["data"],
  mounted() {
    var width = 480;
    var height = 250;
    var margin = {
        left: 270,
        top: 50,
        right: 50,
        botton: 50
    };
    var g_width = width - margin.left - margin.right;
    var g_height = height - margin.top - margin.botton;

    var svg = d3
      .select("#pieone")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    var g = svg
      .append("g")
      .attr("width", g_width)
      .attr("height", g_height)
      .attr(
        "transform",
        "translate(" + (width - 100) / 2 + "," + height / 2 + ")"
      );

    var dataval = this.data;

    var datapie = d3
      .pie()
      .sort(null) //不排序，不写则会从大到小，顺时针排序。
      .value(function(d) {
        return d[1]; //设置value值为上面的2二维数组中的数字
      })(dataval);

    var outerRadius = g_width / 2.5; //外半径
    var innerRadius = g_width / 4; //内半径，为0则中间没有空白

    var arcs = d3
      .arc() //弧生成器
      .innerRadius(innerRadius) //设置内半径
      .outerRadius(outerRadius); //设置外半径
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var pies = g
      .selectAll("path")
      .data(datapie)
      .enter()
      .append("path")
      .attr("d", arcs)
      .attr("fill", function(d, i) {
        return color(i);
      })
      .on("mouseover", function(d, i) {
        mouseover(this,d,i)
      })
      .on("mouseout", function(d, i) {
        mouseout(this,d,i);
      });

    var text = svg
      .selectAll(".text")
      .data(datapie) //返回是pie(data0)
      .enter()
      .append("g")
      .attr("class", "text")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .append("text")
      .style("text-anchor", function(d, i) {
        //根据文字在是左边还是右边，在右边文字是start，文字默认都是start。
        return (d.startAngle + d.endAngle) / 2 < Math.PI ? "start" : "end";
      })
      .style("font-size", "14px")
      .attr("transform", function(d, i) {
        var pos = arcs.centroid(d); //centroid(d)计算弧中心
        pos[0] =
          outerRadius *
            ((d.startAngle + d.endAngle) / 2 < Math.PI ? 1.1 : -1.1) -
          50;
        pos[1] *= 1.5; //将文字移动到外面去。
        return "translate(" + pos + ")";
      })
      .attr("dy", ".3em") //将文字向下偏移.3em
      .text(function(d) {
        //设置文本
        return d.data[0];
      })
      .attr("fill", function(d, i) {
        return color(i);
      });
    var line = svg
      .selectAll(".line") //添加文字和弧之间的连线
      .data(datapie) //返回是pie(data0)
      .enter()
      .append("g")
      .attr("class", "line")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .append("polyline")
      .attr("points", function(d, i) {
        var pos1 = arcs.centroid(d),
          pos2 = arcs.centroid(d),
          pos3 = arcs.centroid(d);
        (pos1[0] = pos1[0] * 1 - 50), (pos1[1] *= 1);
        (pos2[0] = pos2[0] * 1.2 - 50), (pos2[1] *= 1.5);
        pos3[0] =
          outerRadius *
            ((d.startAngle + d.endAngle) / 2 < Math.PI ? 1.05 : -1.05) -
          50;
        pos3[1] *= 1.5;
        //pos1表示圆弧的中心边缘位置，pos2是向上稍微去了一下，pos3就是将pos2平移后得到的位置
        //三点链接在一起就成了线段。
        return [pos1, pos2, pos3];
      })
      .style("fill", "none")
      .style("stroke", function(d, i) {
        return color(i);
      })
      .style("stroke-width", "3px");
    // .style('stroke-dasharray',"5px")  // 虚线
    // console.log(pies._groups[0])
    var i=0;
    setInterval(()=>{
      if(i<datapie.length-1){
        i++;
      }else{
        i=0;
      }
      mouseover(pies._groups[0][i],datapie[i],i)
      setTimeout(()=>{
        mouseout(pies._groups[0][i],datapie[i],i)
      },1900)
      // pies._groups[0][i].onmouseover()
      // console.log(pies._groups[0][i]);
    },2000)

    function mouseover(that,d,i){
      d3.select('#pieone')
          .append("div")
          .text(d.data[1]+"笔")
          .attr('class','num')
          .style('color',color(i))
          .style('font-size','20px')
          .style('width','100px')
          .style('position','absolute')
          .style('text-align','center')
          .style('left',(width / 2-100)+'px')
          .style('top',(height / 2 - 15)+'px');

        d3.select(text._groups[0][i])
          .transition()
          .duration(1000)
          .ease(d3.easeBounceOut)
        .attr("transform", function(d, i) {
          var pos = arcs.centroid(d); //centroid(d)计算弧中心
          pos[0] = outerRadius * ((d.startAngle + d.endAngle) / 2 < Math.PI ? 1.2 : -1.2) - 50;
          pos[1] *= 1.8; //将文字移动到外面去。
          return "translate(" + pos + ")";
        });
        d3.select(line._groups[0][i])
          .transition()
          .duration(1000)
          .ease(d3.easeBounceOut)
        .attr("points", function(d, i) {
          var pos1 = arcs.centroid(d),
            pos2 = arcs.centroid(d),
            pos3 = arcs.centroid(d);
          (pos1[0] = pos1[0] * 1 - 50), (pos1[1] *= 1);
          (pos2[0] = pos2[0] * 1.2 - 50), (pos2[1] *= 1.8);
          pos3[0] = outerRadius * ((d.startAngle + d.endAngle) / 2 < Math.PI ? 1.15 : -1.15) - 50;
          pos3[1] *= 1.8;
          //pos1表示圆弧的中心边缘位置，pos2是向上稍微去了一下，pos3就是将pos2平移后得到的位置
          //三点链接在一起就成了线段。
          return [pos1, pos2, pos3];
        });
        d3.select(that)
          .transition()
          .duration(1000)
          .ease(d3.easeBounceOut)
          .attr("d", arcs.outerRadius(g_width / 2.1).innerRadius(g_width / 4));
    }
    function mouseout(that,d,i){
      d3.select('.num').remove();
        d3.select(that)
          .transition()
          .duration(1000)
          .attr("d", arcs.outerRadius(g_width / 2.5).innerRadius(g_width / 4));
        d3.select(text._groups[0][i])
          .transition()
          .duration(1000)
          .attr("transform", function(d, i) {
            var pos = arcs.centroid(d); //centroid(d)计算弧中心
            pos[0] =
              outerRadius *
                ((d.startAngle + d.endAngle) / 2 < Math.PI ? 1.1 : -1.1) -
              50;
            pos[1] *= 1.5; //将文字移动到外面去。
            return "translate(" + pos + ")";
        });
        d3.select(line._groups[0][i])
          .transition()
          .duration(1000)
          .attr("points", function(d, i) {
            var pos1 = arcs.centroid(d),
              pos2 = arcs.centroid(d),
              pos3 = arcs.centroid(d);
            (pos1[0] = pos1[0] * 1 - 50), (pos1[1] *= 1);
            (pos2[0] = pos2[0] * 1.2 - 50), (pos2[1] *= 1.5);
            pos3[0] = outerRadius * ((d.startAngle + d.endAngle) / 2 < Math.PI ? 1.05 : -1.05) - 50;
            pos3[1] *= 1.5;
            //pos1表示圆弧的中心边缘位置，pos2是向上稍微去了一下，pos3就是将pos2平移后得到的位置
            //三点链接在一起就成了线段。
            return [pos1, pos2, pos3];
        });
    }
  }
};
</script>

<style lang="scss" scoped>
  .pie{
    position: relative;
  }
</style>
