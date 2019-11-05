<template>
  <div>
    <!-- 未来也会加上 -->
    <!-- <publicNav :isInvert="!blogDetail.blogBackground"></publicNav> -->
    <publicNav :isInvert="true"></publicNav>
    <!-- 未来会加上 -->
    <!-- <header :class="['intro-header', blogDetail.blogBackground ? blogDetail.blogBackground : 'style-text']"> -->
    <header class="intro-header style-text">
      <div class="header-mask"></div>
      <div class="container" v-if="blogDetail">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-heading">
              <!-- <div class="tags">
                  <a class="tag" href="{{ site.baseurl }}/tags/#{{ tag }}" title="{{ tag }}">{{ tag }}</a>
              </div>  文章以后加入标签 -->
              <h1>{{ blogDetail.blogTitle }}</h1>
              <h2 class="subheading">{{ blogDetail.blogSubTitle }}</h2>
              <span class="meta">Posted by Anonymous {{ formatDate(new Date()) }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="container">
        <div class="row">
      <!-- Post Container -->
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 post-container">
            <div v-html="blogDetail.blogContent"></div>
              <ul class="pager">
                  <li class="previous">
                      <a disabled>&larr; Previous Post <br><span>无</span></a>
                  </li>
                  <li class="next">
                     <a disabled >Next Post &rarr; <br><span>无</span></a>
                  </li>
              </ul>
            </div>
          </div>
      </div>
    </article>
    <publicFooter></publicFooter>
  </div>
</template>

<script>
import publicNav from '@/components/PublicNav.vue';
import publicFooter from '@/components/Footer.vue';
export default {
  props: {
    blogDetail: Object
  },
  data () {
    return {
      monthMapping: {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
      }
    }
  },
  methods: {
    formatDate (date) {
      if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error('IllegalArgumentException: param must be date');
      }
      return `${this.monthMapping[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`;
    }
  },
  components: {
    publicNav,
    publicFooter
  }
}
</script>

<style lang="less">
  header.intro-header {
    position: relative;
    background-image: url(/static/images/bg.jpg);
  }
</style>

