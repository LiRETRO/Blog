<template>
  <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div style="margin: auto auto;">
      <h1 class="mb-0">Modified By
        <span class="text-primary">L<span class="lowercase">i</span>RETRO</span>
      </h1>
      <div class="subheading mb-5">Please Send Your Suggestion To
        <a href="mailto:hash@meloli.net">hash@meloli.net</a>
      </div>
      <p class="lead mb-5"></p>
      <!-- <div class="social-icons">
        <a href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    init() {
      // 更改标题背景
      this.$store.commit('setHeader', {
        title: 'About Me',
        subheading: 'There\'s No Moving Back In The World.',
        background: '/static/images/header_bg.png'
      });
    }
  },
  mounted () {
    this.init();
  }
}
</script>
