<template>
    <div class="m">
        <ul>
            <li>
                <div class="money"><span>5.5</span>亿元</div>
                <div class="title"><p>北京康元同心管理咨询中心</p></div>
            </li>
            <li>
                <div class="money"><span>5.5</span>亿元</div>
                <div class="title"><p>唐山曹妃甸侨创股权投资基金合伙企业</p></div>
            </li>
            <li>
                <div class="money"><span>5.5</span>亿元</div>
                <div class="title"><p>唐山京冀协同健康产业基金合伙企业</p></div>
            </li>
            <li>
                <div class="money"><span>5.5</span>亿元</div>
                <div class="title"><p>迁安京冀股权投资基金</p></div>
            </li>
            <li>
                <div class="money"><span>5.5</span>亿元</div>
                <div class="title"><p>首钢园区基金（一期）</p></div>
            </li>
            <li>
                <div class="money"><span>5.5</span>亿元</div>
                <div class="title"><p>首钢园区基金（二期）</p></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'app',
}
</script>
<style lang="scss" scoped>
    .m{
        ul {
            padding-left: 0;
            li{
                padding: 10px;
                list-style: none;
                font-size: 20px;
                margin-bottom: 20px;
                line-height: 25px;
                .title{
                    border-left: 4px #1AF2FF solid;
                    padding-left: 4px;
                }
                .money{
                    float:right;
                }
                &:nth-child(2n-1){
                    background-color: rgba($color: #0C1D5C, $alpha: 0.8)
                }
            }
        }
    }
</style>

