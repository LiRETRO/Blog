<template>
  <div class="container">
    <img src="/static/images/hello_bg.jpg" class="bg"/>
    <div id="home-cover-content" class="c20 fluid-column center-box padding-left-10 padding-right-10">
      <h1>上传与分享您的照片</h1>
      <p class="c20 center-box text-align-center phone-hide phablet-hide">支持拖放上传, 最大10 MB/张 , 无限制的图片外链, BBCode代码, HTML代码, 缩略图, 专属的个人主页, 你要的一切，这里都有<br><br>
  关闭注册，关闭游客上传，不和谐上传删图&amp;账号，请珍惜账号。</p>
      <div class="home-buttons">
        <router-link to="/index"></router-link>      
      </div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/global/global.less';

div.container {
  position: absolute;
  width: 100%;
  height: 100%;
  img.bg {
    width: 100%;
    height: 100%;
    animation-name: bg_animation;
    animation-duration: 8s;
  }
  @keyframes bg_animation {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.12);
    }
  }
}
</style>
