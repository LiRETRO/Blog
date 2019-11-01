<template>
  <div class="row">
    <!-- USE SIDEBAR -->
    <!-- PostList Container -->
    <div class="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12 col-xs-12 postlist-container">
      <blog-content :data="blogDataList" :pageSize="query.page.pageSize" :totalRecord="totalNum" @onPageChange="onPageChange"></blog-content>
    </div>
    <!-- Sidebar Container -->
    <div class="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-12 col-xs-12 sidebar-container">
      <!-- Featured Tags -->
      <section>
        <h5>
          <router-link to="/archive">FEATURED TAGS</router-link>
        </h5>
        <div class="tags">
          <a data-sort="0065" href="/archive/?tag=%E7%9F%A5%E4%B9%8E" title="知乎" rel="10">知乎</a>
          <a data-sort="0036" href="/archive/?tag=%E7%AC%94%E8%AE%B0" title="笔记" rel="39">笔记</a>
          <a data-sort="0039" href="/archive/?tag=Coq" title="Coq" rel="36">Coq</a>
          <a
            data-sort="0039"
            href="/archive/?tag=SF+%28%E8%BD%AF%E4%BB%B6%E5%9F%BA%E7%A1%80%29"
            title="SF (软件基础)"
            rel="36"
          >SF (软件基础)</a>

          <a
            data-sort="0056"
            href="/archive/?tag=PLF+%28%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80%29"
            title="PLF (编程语言基础)"
            rel="19"
          >PLF (编程语言基础)</a>

          <a data-sort="0056" href="/archive/?tag=Web" title="Web" rel="19">Web</a>

          <a
            data-sort="0059"
            href="/archive/?tag=LF+%28%E9%80%BB%E8%BE%91%E5%9F%BA%E7%A1%80%29"
            title="LF (逻辑基础)"
            rel="16"
          >LF (逻辑基础)</a>

          <a data-sort="0068" href="/archive/?tag=UX%2FUI" title="UX/UI" rel="7">UX/UI</a>

          <a data-sort="0069" href="/archive/?tag=%E4%BA%A7%E5%93%81" title="产品" rel="6">产品</a>

          <a data-sort="0069" href="/archive/?tag=PWA" title="PWA" rel="6">PWA</a>

          <a data-sort="0071" href="/archive/?tag=JavaScript" title="JavaScript" rel="4">JavaScript</a>

          <a data-sort="0071" href="/archive/?tag=Slides" title="Slides" rel="4">Slides</a>

          <a data-sort="0072" href="/archive/?tag=%E7%94%9F%E6%B4%BB" title="生活" rel="3">生活</a>

          <a data-sort="0072" href="/archive/?tag=%E8%AF%91" title="译" rel="3">译</a>

          <a data-sort="0072" href="/archive/?tag=%E9%98%BF%E9%87%8C" title="阿里" rel="3">阿里</a>

          <a
            data-sort="0072"
            href="/archive/?tag=%F0%9F%87%AC%F0%9F%87%A7"
            title="🇬🇧"
            rel="3"
          >🇬🇧</a>

          <a data-sort="0072" href="/archive/?tag=Vim" title="Vim" rel="3">Vim</a>

          <a
            data-sort="0073"
            href="/archive/?tag=%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6"
            title="计算机科学"
            rel="2"
          >计算机科学</a>

          <a
            data-sort="0073"
            href="/archive/?tag=%E8%AE%A1%E7%AE%97%E7%90%86%E8%AE%BA"
            title="计算理论"
            rel="2"
          >计算理论</a>

          <a data-sort="0073" href="/archive/?tag=CSS" title="CSS" rel="2">CSS</a>

          <a data-sort="0073" href="/archive/?tag=Wechat" title="Wechat" rel="2">Wechat</a>

          <a
            data-sort="0073"
            href="/archive/?tag=hUX+%E9%9A%8F%E6%83%B3%E5%BD%95"
            title="hUX 随想录"
            rel="2"
          >hUX 随想录</a>
        </div>
        <a
          data-sort="0073"
          href="/archive/?tag=hUX+%E9%9A%8F%E6%83%B3%E5%BD%95"
          title="hUX 随想录"
          rel="2"
        ></a>
      </section>
      <a
        data-sort="0073"
        href="/archive/?tag=hUX+%E9%9A%8F%E6%83%B3%E5%BD%95"
        title="hUX 随想录"
        rel="2"
      >
        <!-- Short About -->
      </a>
      <section class="visible-md visible-lg">
        <a
          data-sort="0073"
          href="/archive/?tag=hUX+%E9%9A%8F%E6%83%B3%E5%BD%95"
          title="hUX 随想录"
          rel="2"
        >
          <hr />
        </a>
        <h5>
          <a
            data-sort="0073"
            href="/archive/?tag=hUX+%E9%9A%8F%E6%83%B3%E5%BD%95"
            title="hUX 随想录"
            rel="2"
          ></a>
          <router-link to="/about">ABOUT ME</router-link>
        </h5>
        <div class="short-about">
          <img src="/static/images/avatar-liretro.jpeg" />
          <p>
            Ther's no moving back in the world.
          </p>
          <!-- SNS Link -->

          <ul class="list-inline">
            <li>
              <a href="https://twitter.com/BeePeeeee">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.zhihu.com/people/LiRETRO">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-stack-1x fa-inverse">知</i>
                </span>
              </a>
            </li>

            <!-- <li>
              <a target="_blank" href="https://weibo.com/">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-weibo fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li> -->

            <li>
              <a target="_blank" href="https://github.com/LiRETRO">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { getBlogList } from "@/api/BlogApi";
import { mapGetters, mapActions } from "vuex";
import blogContent from "@/components/Blog.vue";
export default {
  data() {
    return {
      query: {
        page: {
          pageSize: 10,
          pageNum: 1
        }
      },
      totalNum: 0,
      blogDataList: []
    };
  },
  computed: {
    ...mapGetters(["ipJson"])
  },
  methods: {
    ...mapActions(["getLocalIp"]),
    init() {
      this.fetchList(this.query);
      // 更改标题背景
      this.$store.commit('setHeader', {
        title: 'LiRETRO\'s Blog',
        subheading: 'Do What I Wanna Do',
        background: '/static/images/header_bg.png'
      });
    },
    fetchList(query) {
      let _this = this;
      this.$emit("toggleLoading", true);
      getBlogList(query)
        .then(data => {
          _this.blogDataList = data.data;
          _this.totalNum = data.page.totalNum;
          _this.$emit("toggleLoading", false);
        })
        .catch(error => {
          _this.$emit("toggleLoading", false);
          alert(error.message);
        });
    },
    onPageChange(pageNum) {
      this.query.page["pageNum"] = pageNum;
      this.fetchList(this.query);
    },

  },
  components: {
    "blog-content": blogContent
  },
  mounted() {
    this.init();
  }
};
</script>