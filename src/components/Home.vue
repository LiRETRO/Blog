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
          <router-link v-for="tag in tags" :key="tag.tagId" :to="{ name: 'archive', params: { tag: tag.tagId } }" v-text="tag.tagName"></router-link>
        </div>
      </section>
      <!-- Short About -->
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
import { getTags } from "@/api/TagsApi";
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
      tagsQuery: {
        page: {
          pageSize: 200,
          pageNum: 1
        }
      },
      totalNum: 0,
      blogDataList: [],
      tags: []
    };
  },
  computed: {
    ...mapGetters(["ipJson"])
  },
  methods: {
    ...mapActions(["getLocalIp"]),
    init() {
      this.fetchList(this.query);
      this.fetchTags(this.tagsQuery);
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
      getBlogList(query).then(data => {
          _this.blogDataList = data.data;
          _this.totalNum = data.page.totalNum;
          _this.$emit("toggleLoading", false);
        }).catch(error => {
          _this.$emit("toggleLoading", false);
          alert(error.message);
        });
    },
    fetchTags(query) {
      let _this = this;
      getTags(query).then(data => {
        _this.tags = data.data.list;
      }).catch(error => {
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