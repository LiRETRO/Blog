<template>
  <div class="comment">
      <div id="disqus_thread"></div>
  </div>
</template>
<script>
export default {
  props: {
    disqusIdentifier: {
      type: String,
      default: 'liretro-blog//about/'
    },
    disqusUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      disqusShortname: 'liretro-blog'
    }
  },
  methods: {
    init () {
      var d = document, s = d.createElement('script');
      s.src = `https://${this.disqusShortname}.disqus.com/embed.js`;
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    }
  },
  created () {
    this.init();
  }
}
</script>