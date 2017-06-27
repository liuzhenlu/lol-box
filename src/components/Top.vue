<template>
  <div class="Top">
    <ul>
        <li @click="toInfo">
            <span class="Infos1" v-if="icolor==0"></span>
            <span class="Infos" v-else></span>
            <p>咨讯</p>
        </li>
        <li @click="toPlayer">
            <span class="Players1" v-if="icolor==1"></span>
            <span class="Players" v-else></span>
            <p>玩家</p>
        </li>
        <li @click="toHero">
            <span class="Heros1" v-if="icolor==2"></span>
            <span class="Heros" v-else></span>
            <p>英雄</p>
        </li>
        <li @click="toVido">
            <span class="Vido1" v-if="icolor==3"></span>
            <span class="Vido" v-else></span>
            <p>视频</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
        icolor:0,
    }
  },
  methods:{
    toInfo(){
        this.icolor=0;
        this.$router.push({
            path:"/imform",
        })
    },
    toHero(){
        this.icolor=2;
        this.$router.push({
            path:"/Heros",
        })
    },
    toPlayer(){
        this.icolor=1;
        this.$router.push({
            path:"/Players",
        })
    },
    toVido(){
        this.icolor=3;
        this.$router.push({
            path:"/Video",
        })
    }
  }
}
</script>

<style scoped lang="less">
   .Top{
       position:fixed;
       width:100%;
       height: .98rem;
       bottom: 0;
       background:#fff;
       font-size:.2rem;
       ul{
        overflow: hidden;
         li{
           float:left;
           width:25%;
           span{
               display: block;
               width:.4rem;
               height:.4rem;
               margin:0 auto;
               background-image: url(../images/icon.png);
               background-size: 2.58rem;
               background-repeat: no-repeat;
           }
           .Heros{
               background-position:-2.18rem 0;
           }
           .Heros1{
               background-position:-2.18rem -.4rem;
           }
           .Vido{
               background-position:-1.35rem -.4rem;
           }
           .Vido1{
               background-position:-1.35rem 0rem;
           }
           .Infos{
               background-position:.05rem 0rem;
           }
           .Infos1{
               background-position:.05rem -.4rem;
           }
           .Players{
               background-position:-.62rem -.4rem;
           }
           .Players1{
               background-position:-.62rem 0rem;
           }
         }
       }
      
   } 
</style>
