<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="blog">
    <!-- <TimeLine :data="blogList" orientation='horizontal' :eventsPerSlide="8"></TimeLine> -->
		<blog-content title="技术分享" :data="blogList" :pageSize="10" :totalRecord="10"></blog-content>
  </section>
</template>

<script>
import blogContent from '@/components/Blog.vue'
import { mapGetters , mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
        'blogList'
    ])
  },
  methods: {
    ...mapActions([
        'getBlogList'
    ]),
    init () {
				this.getBlogList()
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