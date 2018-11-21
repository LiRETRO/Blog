<template>
  <div class="main" id="page-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <router-link class="navbar-brand js-scroll-trigger" to="/">
        <span class="d-block d-lg-none">Clarence Taylor</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../../static/images/head.png" alt="">
        </span>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <router-view class="child-view" :v-show="!isIndex"/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-top',
      menu: [
        'about', 'experience', 'education', 'skills', 'interests', 'awards'
      ],
      isIndex: true
    }
  },
  methods: {
    init () {
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = this.menu.findIndex(item => item === to.name)
      const fromDepth = this.menu.findIndex(item => item === from.name)
      this.transitionName = toDepth < fromDepth ? 'slide-top' : 'slide-down'
      this.isIndex = to.path != '/' ? false : true
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
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
