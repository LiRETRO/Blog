<template>
  <div class="main" id="page-top">
    <header> 
        <div class="menu">
          <nav class="nav" id="topnav">
            <h1 class="logo">
              <span class="nav_head"><img src="../../../static/images/head.png" class="nav_head_pic"></span>
              <router-link id="topnav_current" to="/index" replace >LiRETRO</router-link>
            </h1>
            <li name="blog"><router-link to="/blog" replace><h3>博客</h3></router-link></li>
            <li name="picture"><router-link to="/picture" replace><h3>展示</h3></router-link></li>
            <li style="float: right;" class="">
                <span class="avatar" style="display: block; width: auto;">
                    <span style="vertical-align: middle;"><router-link to="/login" replace>登录</router-link>/<router-link to="/register" replace>注册</router-link></span>
                </span>
            </li>
            <!--search begin-->
            <div id="search_bar" class="search_bar" style="display:none;">
                <form id="searchform" action="/nav/search" method="post" name="searchform">
                    <input class="input" placeholder="想搜点什么呢..." type="text" name="keyboard" id="keyboard">
                    <input type="hidden" name="show" value="title">
                    <input type="hidden" name="tempid" value="1">
                    <input type="hidden" name="tbname" value="news">
                    <input type="hidden" name="Submit" value="搜索">
                    <span class="search_ico"></span>
                </form>
            </div>
            <!--search end-->
          </nav>
      </div>
	  </header>
    <div class="container-fluid p-0">
      <transition :name="transitionName" mode="out-in" >
        <keep-alive>
          <router-view class="child-view" :v-show="!isIndex" ref="child" @toggleLoading="toggleLoading"/>
        </keep-alive>
      </transition>
    </div>
    <footer>
      <p>Copyright © 2018 [LiRETRO] All Rights Reserved.
        <br>
        <a target="_blank" href="http://www.miitbeian.gov.cn">{{ record }}</a>
      </p>
    </footer>
    <!--音乐-->
    <div class="video_exist off" id="audio_btn" style="display: block; z-index:999999;">
      <div id="yinfu"></div>
      <audio preload="none" id="media" src="../../../static/music/butterfly.mp3" loop="loop"></audio>
    </div>
    <loading :loadingVisible="loading"></loading>
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
      // let _this = this
      // // 动态给nav button添加事件
      // // 如果宽度 < 992px，则为移动端，添加data-toggle="collapse" properties
      // // 如果宽度 >= 992px，则为pc端，点击隐藏导航栏
      // let width = this.getDocumentWidth
      // if (width >= 992) {
      //   $('button.navbar-toggler').on('click', function(event) {
      //     let isCollapse = $('body').hasClass('body-full-set')
      //     if(isCollapse) {
      //       // 展开 -> 隐藏
      //       $('body').removeClass('body-full-set').find('#sideNav').removeClass('hide')
      //     } else {
      //       // 隐藏 -> 展开
      //       $('body').addClass('body-full-set').find('#sideNav').addClass('hide')
      //     }
      //     if(_this.curPageName === 'picture') {
      //       _this.$refs.child.filterAll.apply()
      //     }
      //   })
      // } else {
      //   $('button.navbar-toggler').attr('data-toggle', 'collapse')
      // }
      // // 菜单栏
      // $('#header-menu-trigger').on('click', function(event) {
      //   event.preventDefault()
      //   event.stopPropagation()
      //   _this.toggle()
      // })
      // $('a.close-button').on('click', function(event) {
      //   event.preventDefault()
      //   event.stopPropagation()
      //   _this.toggle()
      // })
      // $('ul.nav-list').delegate('li', 'click', function (event) {
      //   if (!$(this).hasClass('current')) {
      //     $(this).addClass('current').siblings().removeClass('current')
      //   }
      // })
      // $('div.container-fluid').on('click', function (event) {
      //   event.stopPropagation()
      //   let flag = $('body').hasClass('menu-is-open')
      //   flag && _this.toggle()
      // })
      // 音乐按钮
      this.audioAutoPlay('media');
      $("#audio_btn").bind('click', function() {
        $(this).hasClass("off") ? ($(this).addClass("play_yinfu").removeClass("off"), $("#yinfu").addClass("rotate"), $("#media")[0].play()) : ($(this).addClass("off").removeClass("play_yinfu"), $("#yinfu").removeClass("rotate"),
        $("#media")[0].pause());
      });
    },
    audioAutoPlay (id) {
        var audio = document.getElementById(id);
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
      'loading'
    ]),
    getDocumentWidth () {
      return window.innerWidth
    }
  },
  mounted () {
    this.init()
    console.log(returnCitySN)
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
// .pace {
//   pointer-events: none;

//   user-select: none;
// }

// .pace-inactive {
//   display: none;
// }

// .pace .pace-progress {
//   background: #ff0000;
//   position: fixed;
//   z-index: 2000;
//   top: 0;
//   right: 100%;
//   width: 100%;
//   height: 2px;
// }

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
