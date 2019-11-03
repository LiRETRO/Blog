<template>
  <div>
    <!-- 未来也会加上 -->
    <!-- <publicNav :isInvert="!blogDetail.blogBackground"></publicNav> -->
    <publicNav :isInvert="false"></publicNav>
    <!-- 未来会加上 -->
    <!-- <header :class="['intro-header', blogDetail.blogBackground ? blogDetail.blogBackground : 'style-text']"> -->
    <header class="intro-header">
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
              <span class="meta">Posted by {{ blogDetail.blogPublisher }} {{ formatDate(new Date(blogDetail.blogPublishDate)) }}</span>
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
                      <router-link v-if="prevAndNext.prev" :to="`/detail/${prevAndNext.prev.blogId}`">&larr; Previous Post <br><span>{{ prevAndNext.prev.blogTitle }}</span></router-link>
                      <a disabled v-else>&larr; Previous Post <br><span>无</span></a>
                  </li>
                  <li class="next">
                      <router-link v-if="prevAndNext.next" :to="`/detail/${prevAndNext.next.blogId}`">Next Post &rarr; <br><span>{{ prevAndNext.next.blogTitle }}</span></router-link>
                      <a disabled v-else>Next Post &rarr; <br><span>无</span></a>
                  </li>
              </ul>
              <comment></comment>
            </div>
          </div>
      </div>
    </article>
    <publicFooter></publicFooter>
  </div>
</template>

<script>
import { getBlogDetail, getBlogPrevAndNext } from '@/api/BlogApi';
import { mapGetters } from 'vuex';
import publicNav from '@/components/PublicNav.vue';
import publicFooter from '@/components/Footer.vue';
import comment from '@/components/Comment.vue';
export default {
  data () {
    return {
      blogDetail: {},
      prevAndNext: {},
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
  computed: {
    ...mapGetters([
      'record'
    ]),
    blogId () {
      return this.$route.params.id
    }
  },
  methods: {
    init () {
      let _this = this
      Promise.all([getBlogDetail(this.blogId), getBlogPrevAndNext(this.blogId)]).then(function (data) {
        _this.blogDetail = data[0].data;
        _this.prevAndNext = data[1].data;
      });
    },
    formatDate (date) {
      if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error('IllegalArgumentException: param must be date');
      }
      return `${this.monthMapping[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`;
    },
    setData(data) {
      this.blogDetail = Object.assign({}, data[0].data);
      this.prevAndNext = Object.assign({}, data[1].data);
    }
  },
  components: {
    publicNav,
    publicFooter,
    comment
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([getBlogDetail(to.params.id), getBlogPrevAndNext(to.params.id)]).then(function (data) {
      next(vm => {
        vm.setData(data);
      });
    }).catch(error => {
      alert(error.message);
      next(false);
    });
  },
  beforeRouteUpdate(to, from, next) {
    let _this = this;
    Promise.all([getBlogDetail(to.params.id), getBlogPrevAndNext(to.params.id)]).then(function (data) {
      _this.setData(data);
      next();
    }).catch(error => {
      alert(error.message);
      next(false);
    });
  }
}
</script>

<style lang="less">
  header.intro-header {
    position: relative;
    background-image: url(/static/images/bg.jpg);
  }
</style>

