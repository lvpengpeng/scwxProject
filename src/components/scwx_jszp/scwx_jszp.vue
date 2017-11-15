<template>
<div>
    <div :style="btnStyle">
            <ul>
                <li @click="changeLi(index)"  :class="{'isA':isB === index}" :style="{fontSize:'20px',color:'#333333'}" v-for="(item,index) in items">{{ item }}</li>
            </ul>

<p >
<span :class="{'show':isShow}" @click="isShow = !isShow==index" v-for="s in ss">
{{s}}
</span>
</p>
<ul>
<li v-for="(x,index) in tabs" :class="{active:tabIndex==index}" @click="tabIndex=index">{{x}}</li>
</ul>

<!-- <p :class="{'show':isShow}" @click="isShow =!isShow" v-for="(num,index) in numes">
    {{ num }}--{{index}}
</p>
 -->


<scwx_imageCarouse2 :imgArr="imgArr"></scwx_imageCarouse2>

    </div>
    </div>
</template>
<script type="text/javascript">
import scwx_imageCarouse2 from '../scwx_commonComponent/scwx_imageCarousel2.vue';
 export default {
    components: {
        scwx_imageCarouse2
    },
    data () {
        return {
            btnStyle:[
              {paddingTop:'400px'}
            ],
            items:['first','two','three','four'],
            isB:0,
            isShow:true,
            ss:['scdsc','faefsesfre','fesfrres'],
            // numes:[122,323,434,545,654],
            tabs:['cfese','freferfs','refre'],
            tabIndex:0,


            imgArr:[
            {src:require('../../../static/scwx-images/scwx_homePage_imges/footer_QRcode.png')},
            {src:require('../../../static/scwx-images/scwx_homePage_imges/attorney.png')},
            {src:require('../../../static/scwx-images/scwx_homePage_imges/footer_QRcode.png')}
            ]

        }
    },
    methods: {
        changeLi (index) {
            this.isB = index
        }

    }
 }
</script>

<style scoped>
    .isA {
        color:blue;
        padding-bottom: 10px;
        border-bottom: 4px skyblue solid;
    }
   .show {
    color:blue;

   }

   li.active{
            background:skyblue;
        }
.list img {
    width:100px;
    height:100px;
}
scwx_imageCarouse2 img {
width:100px;
height:100px
}
</style>