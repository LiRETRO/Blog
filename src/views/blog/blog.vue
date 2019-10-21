<template>
    <div>
		  <blog-content title="技术分享" :data="blogDataList" :pageSize="query.page.pageSize" :totalRecord="totalNum" @onPageChange="onPageChange"></blog-content>
    </div>
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
      this.$emit('toggleLoading', true)
      getBlogList(query).then(data => {
        _this.blogDataList = data.data
        _this.totalNum = data.page.totalNum
        _this.$emit('toggleLoading', false)
      }).catch(error => {
        _this.$emit('toggleLoading', false)
        alert(error.message)
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
  mounted () {
    this.init()
  }
}
</script>

