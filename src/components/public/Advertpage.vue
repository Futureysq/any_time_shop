<template>
    <div class="advertpage">
        <div class="ad"><button @click="jumpOver">跳过{{num}}</button></div>
        <img src="http://img2.imgtn.bdimg.com/it/u=1789596958,434076310&fm=26&gp=0.jpg" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num:3,
                cleardata:null //清除定时器
            }
        },
        methods:{
            jumpOver(){
                this.$router.push("/home/HomePage");//推荐页面
            }
        },
        created(){
            // 倒计时定时器
            this.cleardata = setInterval(() => {
                if(this.num == 0){
                    this.$router.push("/home/HomePage");//推荐页面
                }else{
                    this.num--;
                }
            }, 1000);
            this.$store.state.vanTabbar = false;
        },
        // 销毁生命周期函数之前停止
        beforeDestroy() { //销毁vue数据与方法。组件结束执行
            // 定时器属于浏览器对象，属于window。
            clearInterval(this.cleardata);
        },
        // created(){
        //     
        // },
        destroyed() {
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="less" scoped>
    .advertpage{
        .ad{
            position: absolute;
            right: 0;
            top: 30px;
        }
        img{
            // margin-top: 150px;
            background-size: cover;
            height: 100%;
        }
        button{
            width: 70px;
            height: 25px;
            border-radius: 15px;
            border: 0;
            outline: none;
            background-color: rgba(153, 151, 151, 0.5);
            font-size: 16px;
            color: #f8f8f8;
        }
        position: fixed;
        height: 100%;
        width: 100%;
    }
</style>