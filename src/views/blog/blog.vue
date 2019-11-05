<template>
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <div id="tag_cloud" class="tags tags-sup js-tags">
        <a class="tag-button--all focus" rel="2">
          Show All
          <sup>2</sup>
        </a>
        <a v-for="tag in tagList" :key="tag.tagId" :rel="tag.archiveCount" class="tag-button" :title="tag.tagName">
          {{ tag.tagName }}
          <sup v-text="tag.archiveCount"></sup>
        </a>
      </div>
      <div class="mini-post-list js-result">
        <section v-for="(blogs, year) in splitForYear" :key="year">
          <a>
            <span class="fa listing-seperator">
              <span class="tag-text" v-text="year"></span>
            </span>
          </a>
          <div class="post-preview item" v-for="blog in blogs" :key="blog.blogId" data-tags="Vim,Emacs">
            <router-link :to="`/detail/${blog.blogId}`">
              <h2 class="post-title" v-text="blog.blogTitle"></h2>
              <h3 class="post-subtitle" v-text="blog.blogSubTitle"></h3>
            </router-link>
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
import { getTags } from "@/api/TagsApi";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      query: {
        page: {
          pageSize: 6,
          pageNum: 1
        },
        param: {
          searchType: 0
        }
      },
      tagQuery: {
        page: {
          pageSize: 999,
          pageNum: 1
        }
      },
      totalNum: 0,
      blogDataList: [],
      splitForYear: {},
      tagList: []
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
      Promise.all([getBlogList(query), getTags(this.tagQuery)])
        .then(data => {
          _this.blogDataList = data[0].data;
          _this.totalNum = data[0].page.totalNum;
          _this.tagList = data[1].data.list;
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
    },
    groupByYear(arr) {
      let _this = this;
      arr.forEach((value, index, self) => {
        let year = new Date(value.blogPublishDate).getFullYear() || 2019;
        if (!_this.splitForYear[year]) {
          _this.splitForYear[year] = new Array();
        }
        _this.splitForYear[year].push(value);
      });
      return _this.splitForYear;
    }
  },
  components: {
    "blog-content": blogContent
  },
  watch: {
    tagList (newVal, oldVal) {
      this.initPlugins();
    },
    blogDataList(newVal, oldVal) {
      if (JSON.stringify(newVal) !== '{}') {
        this.groupByYear(newVal);
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

