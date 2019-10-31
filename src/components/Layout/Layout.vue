<template>
  <div class="layout-root">
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          <router-link class="navbar-brand" to="/">{{ site.name }}</router-link>
        </div>
        <div id="huxblog_navbar">
          <div class="navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <router-link replace to="/">Home</router-link>
              </li>
              <li>
                <router-link replace to="/about/">About</router-link>
              </li>
              <li>
                <router-link replace to="/archive/">Archive</router-link>
              </li>
              <li>
                <router-link replace to="/portfolio/">Portfolio</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <header class="intro-header" style="background-image: url('/static/images/header_bg.png')">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="site-heading">
              <h1>LiRETRO's Blog</h1>
              <span class="subheading">Do what i wanna do</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <transition :name="transitionName" mode="out-in" >
        <keep-alive>
          <router-view class="child-view" :v-show="!isIndex" ref="child" @toggleLoading="toggleLoading"/>
        </keep-alive>
      </transition>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <ul class="list-inline text-center">
                <li>
                    <a target="_blank" :href="`https://www.twitter.com/${site.twitterName}`">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
                <li>
                  <a target="_blank" :href="`https://www.zhihu.com/people/${ site.zhihuName }`">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa  fa-stack-1x fa-inverse">知</i>
                    </span>
                  </a>
                </li>
                <!-- <li>
                    <a target="_blank" href="http://weibo.com/{{ site.weibo_username }}">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-weibo fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li> -->
                <li>
                    <a target="_blank" :href="`https://www.facebook.com/${ site.facebookName }`">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
                <li>
                    <a target="_blank" :href="`https://github.com/${ site.githubName }`">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </li>
            </ul>
            <p class="copyright text-muted">
              Copyright &copy; {{ site.name }} {{ site.date }} All Rights Reserved.
              <br>
              Theme by <a href="http://huangxuan.me">Hux</a> |
              <iframe
                  style="margin-left: 2px; margin-bottom:-5px;"
                  frameborder="0" scrolling="0" width="91px" height="20px"
                  src="https://ghbtns.com/github-btn.html?user=huxpro&repo=huxpro.github.io&type=star&count=true" >
              </iframe>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import loading from '@/components/Loading'
export default {
  data () {
    return {
      transitionName: 'slide-right',
      menu: [
        'about', 'blog', 'picture', 'login', 'register'
      ],
      isIndex: true,
      curPageName: '',
      paceOptions: {
        ajax: false, // disabled
        document: true, // disabled
        eventLag: false, // disabled
        elements: {
          selectors: ['.main']
        }
      }
    }
  },
  methods: {
    init () {
      this.dropBootstrap();
      this.initPlugins();
    },
    dropBootstrap() {
      // Drop Bootstarp low-performance Navbar
      // Use customize navbar with high-quality material design animation
      // in high-perf jank-free CSS3 implementation
      var $body   = document.body;
      var $toggle = document.querySelector('.navbar-toggle');
      var $navbar = document.querySelector('#huxblog_navbar');
      var $collapse = document.querySelector('.navbar-collapse');

      $toggle.addEventListener('click', handleMagic)
      function handleMagic(e){
        if ($navbar.className.indexOf('in') > 0) {
        // CLOSE
            $navbar.className = " ";
            // wait until animation end.
            setTimeout(function(){
                // prevent frequently toggle
                if($navbar.className.indexOf('in') < 0) {
                    $collapse.style.height = "0px"
                }
            },400)
        }else{
        // OPEN
            $collapse.style.height = "auto"
            $navbar.className += " in";
        }
      }
    },
    initPlugins() {
      // 初始化tagcloud插件
      $.fn.tagcloud.defaults = {
        //size: {start: 1, end: 1, unit: 'em'},
        color: {start: '#bbbbee', end: '#0085a1'},
      };
      $('#tag_cloud a').tagcloud();
      var $nav = document.querySelector("nav");
      if($nav) FastClick.attach($nav);
    },
    removeCurrent(name) {
      if (name !== 'Index' && name !== 'login' && name !== 'register') {
        $(`#topnav li[name=${name}]`).addClass('current').siblings().removeClass('current')
      }
      if (name === 'Index' || name === 'login' || name === 'register') {
        $('#topnav li').each(function(event) {$(this).removeClass('current')})
      }
    },
    toggleLoading (flag) {
      this.$store.commit('setLoading', flag)
    }
  },
  // 渲染该组件对应路由被confirm之前
  beforeRouteEnter (to, from, next) {
    const curRouteName = to.name
    next(vm => {
      // Callback
      if (curRouteName !== 'Index' && curRouteName !== 'login' && curRouteName !== 'register') {
        $(`#topnav li[name=${curRouteName}]`).addClass('current').siblings().removeClass('current')
      }
      if (curRouteName === 'Index' || curRouteName === 'login' || curRouteName === 'register') {
        $('#topnav li').each(function(event) {$(this).removeClass('current')})
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    if (to.name !== 'blogDetail') {
      const toDepth = this.menu.findIndex(item => item === to.name)
      const fromDepth = this.menu.findIndex(item => item === from.name)
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      this.isIndex = to.path != '/' ? false : true
      this.curPageName = this.menu[toDepth]
    } else {
      this.transitionName = "fade"
    }
    this.removeCurrent(to.name)
    next()
  },
  components: {
    loading
  },
  computed: {
    ...mapGetters([
      'record',
      'loading',
      'site'
    ]),
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
.slide-left-enter, .slide-right-leave-active  {
  transform: translateX(-75px);
  opacity: 0;
}
.slide-left-leave-active, .slide-right-enter  {
  transform: translateX(75px);
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

// pace
.pace {
  pointer-events: none;

  user-select: none;
}

.pace-inactive {
  display: none;
}

.pace .pace-progress {
  background: #ff0000;
  position: fixed;
  z-index: 2000;
  top: 0;
  right: 100%;
  width: 100%;
  height: 2px;
}

// 音乐播放器
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
}
.play_yinfu {
  position: fixed;
  right: 20px;
  float: right;
  top: 12px;
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
  top: 12px;
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  background-image: url("../../../static/images/music_off.png");
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
