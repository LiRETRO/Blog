<template>
  <div class="main" id="page-top">
    <header> 
   	<!-- <div class="header-logo">
	    <router-link to="/">LiRETRO</router-link>
	  </div>  -->
		<a id="header-menu-trigger" class="black-style" href="#">
		 	<span class="header-menu-text">Menu</span>
		  <span class="header-menu-icon"></span>
		</a> 
		<nav id="menu-nav-wrap">
			<a href="#" class="close-button" title="close"><span>Close</span></a>	
	   	<h3>LiRETRO.</h3>  
			<ul class="nav-list">
				<li class="current"><router-link class="smoothscroll" to="/">Main</router-link></li>
				<li><router-link class="smoothscroll" to="/about">About</router-link></li>
				<li><router-link class="smoothscroll" to="/blog">Blog</router-link></li>
				<li><router-link class="smoothscroll" to="/picture">Picture</router-link></li>
			</ul>	
      <!-- <ul class="header-social-list">
        <li>
        <a href="#"><i class="fa fa-facebook-square"></i></a>
        </li>
        <li>
        <a href="#"><i class="fa fa-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-behance"></i></a>
        </li>
        <li>
        <a href="#"><i class="fa fa-dribbble"></i></a>
        </li>
        <li>
        <a href="#"><i class="fa fa-instagram"></i></a>
        </li>
      </ul>		 -->
		</nav> 
	</header>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
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
    </nav> -->
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
      // 菜单栏
      $('#header-menu-trigger').on('click', function(event) {
        event.preventDefault()
        event.stopPropagation()
        _this.toggle()
      })
      $('a.close-button').on('click', function(event) {
        event.preventDefault()
        event.stopPropagation()
        _this.toggle()
      })
      // $(document).on('click', ':not(#menu-nav-wrap), :not(#header-menu-trigger)', function (event) {
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
    toggle () {
      let flag = $('body').hasClass('menu-is-open')
      if (flag) {
        $('body').removeClass('menu-is-open').find('#header-menu-trigger').removeClass('is-clicked')
      } else {
        $('body').addClass('menu-is-open').find('#header-menu-trigger').addClass('is-clicked')
      }
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

.menu-is-open #menu-nav-wrap {
  transform: translateX(0) !important;
  visibility: visible !important;
  -webkit-overflow-scrolling: touch !important;
}

.main {
  height: 100%;
  // nav
  header {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 19951212;
    .header-logo {
      position: absolute;
      right: 26px;
      top: 30px;
      transition: all 1s ease-in-out;
      a {
        display: block;
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        width: 60px;
        height: 60px;
        background: url(../../../static/images/logo.png) no-repeat center;
        background-size: 60px 60px;
        font: 0/0 a;
        text-shadow: none;
        color: transparent;
        transition: all 0.5s ease-in-out;
      }
    }
    #header-menu-trigger {
      display: block;
      position: fixed;
      left: 100px;
      top: 30px;
      height: 42px;
      width: 42px;
      line-height: 42px;
      font-family: "montserrat-regular", sans-serif;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: .2rem;
      color: rgba(255, 255, 255, 0.5);
      transition: all 0.3s ease-in-out;
      &.black-style {
        color: rgba(0, 0, 0, 0.5) !important;
        .header-menu-icon {
          background-color: rgba(0, 0, 0, 1) !important;
        }
        &:hover, &:focus {
          color: #000000 !important;
        }
      }
      &:hover, &:focus {
        color: #FFFFFF;
      }
      .header-menu-text {
        display: block;
        position: absolute;
        top: 0;
        right: 9px;
        width: 75px;
        text-align: center;
        background-color: transparent;
        transition: all 0.3s ease-in-out;
      }
      .header-menu-icon {
        display: block;
        height: 2px;
        width: 24px;
        background-color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: -75px;
        margin-top: -2px;
        &::before {
          top: -9px;
          content: '';
          width: 100%;
          height: 100%;
          background-color: inherit;
          position: absolute;
          left: 0;
        }
        &::after {
          bottom: -9px;
          content: '';
          width: 100%;
          height: 100%;
          background-color: inherit;
          position: absolute;
          left: 0;
        }
      }
    }
    #menu-nav-wrap {
      background: #111111;
      color: rgba(255, 255, 255, 0.25);
      font-family: "montserrat-regular", sans-serif;
      font-size: 1.5rem;
      line-height: 1.6;
      padding: 3rem 2.5rem;
      text-align: left;
      height: 100%;
      width: 240px;
      position: fixed;
      left: 0;
      top: 0;
      visibility: hidden;
      z-index: 800;
      overflow-y: auto;
      transform: translateX(-100%);
      transition: all 0.4s ease-in-out;
      .close-button {
        display: block;
        height: 30px;
        width: 30px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 36px;
        right: 30px;
        font: 0/0 a;
        text-shadow: none;
        color: transparent;
      }
      a {
        color: rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease-in-out;
        
        &:visited {
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease-in-out;
        }
        &:focus {
          color: white;
        }
        &:active {
          color: white;
          outline: 0;
        }
        a:hover {
          outline: 0
        }
        span::before {
          transform: rotate(-45deg);
          content: "";
          display: block;
          height: 2px;
          width: 12px;
          background-color: #fff;
          position: absolute;
          top: 50%;
          left: 9px;
          margin-top: -1px;
        }
        span::after {
          transform: rotate(45deg);
          content: "";
          display: block;
          height: 2px;
          width: 12px;
          background-color: #fff;
          position: absolute;
          top: 50%;
          left: 9px;
          margin-top: -1px;
        }
      }
      h3 {
        color: white;
        font-family: "montserrat-regular", sans-serif;
        font-size: 1.3rem;
        line-height: 1;
        margin-bottom: 1.5rem;
        font-style: normal;
        text-rendering: optimizeLegibility;
      }
      .nav-list {
        margin: 1.5rem 0;
        padding: 0 0 1.8rem 0;
        list-style: none;
        line-height: 3.6rem;
        li {
          padding-left: 0;
          font-size: 1rem;
          border-bottom: 1px dotted rgba(255, 255, 255, 0.03);
          display: list-item;
          &:first-child {
            border-top: 1px dotted rgba(255, 255, 255, 0.03);
          }
          a {
            color: rgba(255, 255, 255, 0.25);
            display: block;
          }
        }
      }
    }
  }
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
  background: #29d;
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
