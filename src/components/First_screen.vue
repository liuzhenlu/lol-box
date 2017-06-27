<template>
  <div class="firstscreen">
    <img src="../images/first.jpg" class="bgimg">
    <img src="../images/logo.png" class="logoimg">
    <span @click="goto()">进入</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      goto(){
          this.$router.push({path:"/Imform"})
      }
  }
}
</script>

<style scoped lang="less">
    .firstscreen{
        position:relative;
        .bgimg{
            display: block;     
            top:0;
            width:100%;
        }
        .logoimg{
            position:absolute;
            width:4.9rem;
            top:6.38rem;
            left:1.4rem;
        }
        span{
            display:block;
            width:2.19rem;
            height: .66rem;
            position:absolute;
            bottom:1.32rem;
            left:2.65rem;
            color:#fff;
            background: #40a6fb;
            text-align: center;
            line-height: .66rem;
            font-size: .35rem;
        }
    }
</style>
