<template>
  <div class="main" id="page-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <router-link class="navbar-brand js-scroll-trigger" to="/">
        <span class="d-block d-lg-none">Clarence Taylor</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../../static/images/head.png" alt="">
        </span>
      </router-link>
      <button class="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/picture">Picture</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/skills">Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/interests">Interests</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/awards">Awards</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid p-0">
      <transition :name="transitionName" mode="out-in" >
        <router-view class="child-view" :v-show="!isIndex" ref="child"/>
      </transition>
    </div>
    <!--音乐-->
    <div class="video_exist off" id="audio_btn" style="display: block;z-index:999999;">
      <div id="yinfu"></div>
      <audio preload="auto" id="media" src="../../../static/music/butterfly.mp3" loop="loop" volumn="0"></audio>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-top',
      menu: [
        'about', 'blog', 'picture', 'skills', 'interests', 'awards'
      ],
      isIndex: true,
      curPageName: ''
    }
  },
  methods: {
    init () {
      let _this = this
      // 动态给nav button添加事件
      // 如果宽度 < 992px，则为移动端，添加data-toggle="collapse" properties
      // 如果宽度 >= 992px，则为pc端，点击隐藏导航栏
      let width = this.getDocumentWidth
      if (width >= 992) {
        $('button.navbar-toggler').on('click', function(event) {
          let isCollapse = $('body').hasClass('body-full-set')
          if(isCollapse) {
            // 展开 -> 隐藏
            $('body').removeClass('body-full-set').find('#sideNav').removeClass('hide')
          } else {
            // 隐藏 -> 展开
            $('body').addClass('body-full-set').find('#sideNav').addClass('hide')
          }
          if(_this.curPageName === 'picture') {
            _this.$refs.child.filterAll.apply()
          }
        })
      } else {
        $('button.navbar-toggler').attr('data-toggle', 'collapse')
      }
      this.audioAutoPlay('media');
      $("#audio_btn").bind('click', function() {
        $(this).hasClass("off") ? ($(this).addClass("play_yinfu").removeClass("off"), $("#yinfu").addClass("rotate"), $("#media")[0].play()) : ($(this).addClass("off").removeClass("play_yinfu"), $("#yinfu").removeClass("rotate"),
        $("#media")[0].pause());
      });
    },
    audioAutoPlay (id) {
        var audio = document.getElementById(id);
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name !== 'blogDetail') {
        const toDepth = this.menu.findIndex(item => item === to.name)
        const fromDepth = this.menu.findIndex(item => item === from.name)
        this.transitionName = toDepth < fromDepth ? 'slide-top' : 'slide-down'
        this.isIndex = to.path != '/' ? false : true
        this.curPageName = this.menu[toDepth]
      } else {
        this.transitionName = "fade"
      }
    }
  },
  computed: {
    getDocumentWidth () {
      return window.innerWidth
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style lang="less">
@import '../../assets/global/global.less';

// 动画
.child-view {
  transition: all .3s cubic-bezier(.68, .2, .27, 1);
}
.slide-top-enter, .slide-down-leave-active  {
  transform: translateY(-75px);
  opacity: 0;
}
.slide-top-leave-active, .slide-down-enter  {
  transform: translateY(75px);
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.main {
  height: 100%;
}

// 音乐播放器
#audio_btn {
  position: fixed;
  right: 20px;
  top: 10px;
  z-index: 200;
  display: none;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  cursor: pointer;
}
.play_yinfu {
  position: fixed;
  right: 20px;
  float: right;
  top: 10px;
  width: 30px;
  height: 30px;
  background-image: url("../../../static/images/music.gif");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 60px 60px;
}

.rotate {
  position: fixed;
  right: 20px;
  float: right;
  top: 10px;
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  background-image: url("../../../static/images/music_off.png");
  -webkit-animation: rotating 1.2s linear infinite;
  -moz-animation: rotating 1.2s linear infinite;
  -o-animation: rotating 1.2s linear infinite;
  animation: rotating 1.2s linear infinite;
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
  background-image: url("../../../static/images/music_no.png");
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
