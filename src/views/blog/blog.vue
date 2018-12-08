<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="blog">
    <!-- <TimeLine :data="blogList" orientation='horizontal' :eventsPerSlide="8"></TimeLine> -->
		<blog-content title="技术分享" :data="blogDataList" :pageSize="query.page.pageSize" :totalRecord="totalNum" @onPageChange="onPageChange"></blog-content>
  </section>
</template>

<script>
import blogContent from '@/components/Blog.vue'
import { getBlogList } from '@/api/BlogApi'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      query: {
        page: {
          pageSize: 6,
          pageNum: 1
        }
      },
      totalNum: 0,
      blogDataList: []
    }
  },
  computed: {
    ...mapGetters([
      'ipJson'
    ])
  },
  methods: {
    ...mapActions([
      'getLocalIp'
    ]),
    init () {
				this.fetchList(this.query)
    },
    fetchList (query) {
      let _this = this
      getBlogList(query).then(data => {
        _this.blogDataList = data.resultObj
        _this.totalNum = data.page.totalNum
      })
    },
    onPageChange (pageNum) {
      this.query.page['pageNum'] = pageNum
      this.fetchList(this.query)
    }
	},
	components: {
		'blog-content': blogContent
	},
  created () {
    this.init()
  }
}
</script>
