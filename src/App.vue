<template>
  <div id="app">
    <!--音乐-->
    <!-- <div class="video_exist off" id="audio_btn" style="display: block; z-index:999999;">
      <div id="yinfu"></div>
      <audio preload="none" id="media" src="/static/music/astronaut.mp3" loop="loop"></audio>
    </div> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    init () {
      // 音乐按钮
      $("#audio_btn").bind('click', function() {
        $(this).hasClass("off") ? ($(this).addClass("play_yinfu").removeClass("off"), $("#yinfu").addClass("rotate"), $("#media")[0].play()) : ($(this).addClass("off").removeClass("play_yinfu"), $("#yinfu").removeClass("rotate"),
        $("#media")[0].pause());
      });
    }
  },
  mounted () {
    // this.init();
  }
}
</script>

<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

#audio_btn {
  position: fixed;
  right: 20px;
  top: 12px;
  z-index: 200;
  display: none;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  cursor: pointer;
  .play_yinfu {
    position: fixed;
    right: 20px;
    float: right;
    top: 12px;
    width: 30px;
    height: 30px;
    background-image: url("/static/images/music.gif");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60px 60px;
  }
  .rotate {
    position: fixed;
    right: 20px;
    float: right;
    top: 12px;
    width: 30px;
    height: 30px;
    background-size: 100% 100%;
    background-image: url("/static/images/music_off.png");
    animation: rotating 1.2s linear infinite;
  }
}


@-webkit-keyframes rotating {
  from {
      -webkit-transform: rotate(0deg);
  }
  to {
      -webkit-transform: rotate(360deg);
  }
}

@keyframes rotating {
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
}

@-moz-keyframes rotating {
  from {
      -moz-transform: rotate(0deg);
  }
  to {
      -moz-transform: rotate(360deg);
  }
}

.off {
  position: fixed;
  right: 10px;
  float: right;
  top: 1px;
  background-size: 100% 100%;
  background-image: url("/static/images/music_no.png");
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
