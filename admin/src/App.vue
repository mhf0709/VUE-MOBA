<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default{
    methods:{
    tip(){
  }
},
mounted(){
  this.tip()
}
  }
</script>
<style>
@import "~assets/css/global.css";

html,
body {
  margin: 0;
  padding: 0;
}
html {
  height: 100vh;
}
body {
  height: 100%;
  min-width: 1200px;
}
#app {
  height: 100%;
}
</style>
