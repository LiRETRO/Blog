<template>
  <nav :class="['navbar navbar-default navbar-custom navbar-fixed-top', isInvert ? 'invert' : '']" ref="nav">
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
              <router-link replace to="/publishBlog/">Publish</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    isInvert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    init() {
      this.dropBootstrap();
      this.initPlugins();
      this.initScrollMonitor();
    },
    dropBootstrap() {
      // Drop Bootstarp low-performance Navbar
      // Use customize navbar with high-quality material design animation
      // in high-perf jank-free CSS3 implementation
      var $body = document.body;
      var $toggle = document.querySelector(".navbar-toggle");
      var $navbar = document.querySelector("#huxblog_navbar");
      var $collapse = document.querySelector(".navbar-collapse");

      $toggle.addEventListener("click", handleMagic);
      function handleMagic(e) {
        if ($navbar.className.indexOf("in") > 0) {
          // CLOSE
          $navbar.className = " ";
          // wait until animation end.
          setTimeout(function() {
            // prevent frequently toggle
            if ($navbar.className.indexOf("in") < 0) {
              $collapse.style.height = "0px";
            }
          }, 400);
        } else {
          // OPEN
          $collapse.style.height = "auto";
          $navbar.className += " in";
        }
      }
    },
    initPlugins() {
      // 初始化tagcloud插件
      $.fn.tagcloud.defaults = {
        //size: {start: 1, end: 1, unit: 'em'},
        color: { start: "#bbbbee", end: "#0085a1" }
      };
      $("#tag_cloud a").tagcloud();
      var $nav = document.querySelector("nav");
      if ($nav) FastClick.attach($nav);
    },
    initScrollMonitor() {
      let _this = this;
      let _nav = this.$refs['nav'];
      let beforeScrollTop = document.body.scrollTop || window.pageYOffset;
      window.addEventListener('scroll', event => {
        let offsetTop = document.body.scrollTop || window.pageYOffset;
        let elemOffsetTop = _nav.offsetTop;
        let elemInnerHeight = _nav.offsetHeight;
        /**
         * 首先判断是上滚动还是下滚动
         * 如果是向上滚动，则当前的scrollTop会比之前的越来越小
         * 如果是向下滚动，则当前的scrollTop会比之前的越来越大 
         **/ 
        if (offsetTop > beforeScrollTop) {
          if(elemOffsetTop + elemInnerHeight < offsetTop){
            if (_nav.classList.contains('is-visible') || !_nav.classList.contains('is-fixed')) {
              _nav.classList.remove('is-visible');
              _nav.classList.add('is-fixed');
            }
          }
        } else {
          if (elemOffsetTop + elemInnerHeight > offsetTop) {
            // 即将滚动到头部，去掉fixed
            if (_nav.classList.contains('is-fixed') || _nav.classList.contains('is-visible'))
              _nav.classList.remove('is-fixed', 'is-visible');
          } else {
            if (!(_nav.classList.contains('is-fixed') || _nav.classList.contains('is-visible')))
              _nav.classList.add('is-fixed', 'is-visible');
          }
        }
        beforeScrollTop = offsetTop;
      });
    }
  },
  computed: {
    ...mapGetters(["site"])
  },
  mounted() {
    this.init();
  }
};
</script>