<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="blog">
    <!-- <TimeLine :data="blogList" orientation='horizontal' :eventsPerSlide="8"></TimeLine> -->
		<blog-content title="技术分享" :data="blogDataList" :pageSize="10" :totalRecord="10"></blog-content>
  </section>
</template>

<script>
import blogContent from '@/components/Blog.vue'
import { getBlogList } from '@/api/BlogApi'
export default {
  data () {
    return {
      query: {
        page: {
          pageSize: 5,
          pageNum: 2
        },
        resultCode: 'success'
      },
      blogDataList: []
    }
  },
  methods: {
    init () {
				this.fetchList(this.query)
    },
    fetchList (query) {
      let _this = this
      console.log('getApi')
      getBlogList(query).then(data => {
        console.log(data)
        _this.blogDataList = data
      })
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