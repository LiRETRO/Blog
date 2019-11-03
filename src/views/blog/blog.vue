<template>
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <div id="tag_cloud" class="tags tags-sup js-tags">
        <a class="tag-button--all focus">
          Show All
          <sup>75</sup>
        </a>
        <a
        >
          笔记
          <sup>39</sup>
        </a>
      </div>
      <div class="mini-post-list js-result">
        <section>
          <a
          >
            <span class="fa listing-seperator">
              <span class="tag-text">2019</span>
            </span>
          </a>
          <div class="post-preview item" data-tags="CS+Idols">
            <a
            ></a>
            <a href="/2019/09/13/peter-john-landin/">
              <h2 class="post-title">Peter John Landin</h2>

              <h3 class="post-subtitle">「计算机科学偶像」- 彼得·约翰·兰丁</h3>
            </a>
            <hr />
          </div>
          <div class="post-preview item" data-tags="Vim,Emacs">
            <a href="/2019/09/08/spacemacs-workflow/">
              <h2 class="post-title">My Spacemacs Workflow</h2>

              <h3 class="post-subtitle">From Vim to Spacemacs</h3>
            </a>
            <hr />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import blogContent from "@/components/Blog.vue";
import { getBlogList } from "@/api/BlogApi";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      query: {
        page: {
          pageSize: 6,
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
      this.initPlugins();
      // 更改标题背景
      this.$store.commit("setHeader", {
        title: "Archive",
        subheading: "Stay Hungry, Stay Foolish",
        background: "/static/images/header_bg.png",
        id: 'tag-heading'
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
    initPlugins() {
      // 初始化tagcloud插件
      $.fn.tagcloud.defaults = {
        //size: {start: 1, end: 1, unit: 'em'},
        color: {start: '#bbbbee', end: '#0085a1'},
      };
      $('#tag_cloud a').tagcloud();
    }
  },
  components: {
    "blog-content": blogContent
  },
  mounted() {
    this.init();
  }
};
</script>

