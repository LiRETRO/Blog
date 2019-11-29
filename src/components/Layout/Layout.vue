<template>
  <div class="layout-root">
    <publicNav></publicNav>
    <header class="intro-header" :style="`background-image: url('${header.background}')`">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="site-heading" :id="header.id">
              <h1>{{ header.title }}</h1>
              <span class="subheading">{{ header.subheading }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <transition :name="transitionName" mode="out-in" >
        <!-- <keep-alive></keep-alive> -->
        <router-view class="child-view" :v-show="!isIndex" ref="child" @toggleLoading="toggleLoading"/>
      </transition>
    </div>
    <publicFooter></publicFooter>
    <!-- <loading :loadingVisible="loading"></loading> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import loading from '@/components/Loading';
import publicNav from '@/components/PublicNav.vue';
import publicFooter from '@/components/Footer.vue';
export default {
  data () {
    return {
      transitionName: 'slide-right',
      menu: [
        'home', 'about', 'archive', 'privatePublish'
      ],
      isIndex: true,
      curPageName: ''
    }
  },
  methods: {
    init () {
      this.dropBootstrap();
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
    next();
  },
  components: {
    loading,
    publicNav,
    publicFooter
  },
  computed: {
    ...mapGetters([
      'record',
      'loading',
      'header'
    ]),
    getDocumentWidth () {
      return window.innerWidth
    }
  },
  mounted () {
    this.init();
  }
}
</script>
<style lang="less">
@import '../../assets/global/global.less';
@import '../../../static/css/pace-theme-flash.css';

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
</style>
