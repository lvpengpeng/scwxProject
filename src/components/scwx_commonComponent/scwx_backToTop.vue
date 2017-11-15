<template>
    <div class="backToTop">
        <div  @click="rocketTop" class="rocket">
           <i class="el-icon-arrow-up"></i>
        </div>
    </div>
</template>

<script>
       
    </script>
<script>
    export default {
        data () {
            return {

            }
        },
            methods: {
                rocketTop () {
                    $('html,body').stop().animate({scrollTop:0});
                }
            },
            mounted () {
                this.$nextTick(function () {
            $(window).scroll(function() {
                if ($(this).scrollTop() > $(this).height()) {
                    $('.rocket').show()
                } else {
                   $('.rocket').hide()
                }
            });
        })
            },
            computed: {


            }
        }
</script>

<style scoped>
.rocket {
width: 40px;
height: 78px;
position: fixed;
right: 30px;
bottom: 30px;
cursor: pointer;
display: none;
z-index:9999;
}
.el-icon-arrow-up {
background:skyblue;width:40px;height:80px;font-size:40px;border-radius:50%;line-height:80px
}
</style>




