<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="detail">
    <article class="blog-article container">
      <div class="blog-article-hd">
        <h2 class="blog-title">{{ blogDetail.blogTitle }}</h2>
        <p class="blog-meta">
          <span>2251次阅读</span>
          &nbsp;-&nbsp;
          <span>{{ new Date(blogDetail.blogPublishDate).Format('yyyy-MM-dd hh:mm') }}</span>
        </p>
      </div>
      <div class="blog-article-bd" v-html="blogDetail.blogContent">
        <p>{{ blogDetail.blogContent }}</p>
      </div>
    </article>
  </section>
</template>

<script>
import { getBlogDetail } from '@/api/BlogApi'
export default {
  data () {
    return {
      blogDetail: {}
    }
  },
  computed: {
    blogId () {
      return this.$route.params.id
    }
  },
  methods: {
    init () {
      let _this = this
      getBlogDetail(this.blogId).then(function (data) {
        _this.blogDetail = data.resultObj
      })
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="less">
  #detail {
    .blog-article {
      margin: 3rem auto;
      .blog-article-hd {
        text-align: center;
        h2 {
          font-size: 2.3rem;
          margin-bottom: 1rem;
          line-height: 1.15;
          font-weight: 400;
        }
        p {
          color: #999;
          line-height: 1.5;
          font-size: .95rem;
        }
      }
      .blog-article-bd {
        word-wrap: break-word;
        p {
          max-width: 100%;
          height: auto !important;
          height: auto !important;
          text-align: left; 
          text-indent: 2rem;
          line-height: 2;
          font-size: 1rem;
          font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
        }
      }
    }
  }
</style>

