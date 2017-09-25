<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body,html {
  background:#d6dee0;
  font-family: '微软雅黑';
  height: 100%;
}
ul,li,ol {
  list-style: none;
}
#app {
  height: 100%;
  overflow: hidden;
}
/* @font-face {
  font-family: 'iconfont'; /* project id 409855 */ 
/*  src: url('//at.alicdn.com/t/font_409855_k3558qqrki2ro1or.eot');
  src: url('//at.alicdn.com/t/font_409855_k3558qqrki2ro1or.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_409855_k3558qqrki2ro1or.woff') format('woff'),
  url('//at.alicdn.com/t/font_409855_k3558qqrki2ro1or.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_409855_k3558qqrki2ro1or.svg#iconfont') format('svg');
} */
/* .iconfont{
	font-family:"iconfont";
	font-size:20px;
	font-style:normal;
	-webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale; 
} */

</style>
