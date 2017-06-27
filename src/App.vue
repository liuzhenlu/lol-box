<template>
  <div id="app">
   
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Top from "@/components/Top";
export default {
  name: 'app',
  data(){
    return{

    }
  },
  created(){
    this.UseRem();
    window.onresize=this.UseRem;
  },
  methods:{
    UseRem(){
      var screenwidth = document.body.clientWidth;
      document.documentElement.style.fontSize = (screenwidth/750)*100+'px';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
