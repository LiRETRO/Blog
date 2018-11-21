<template>
  <div id="my-timeline">

  </div>
</template>

<script>
export default {
  props: {
    'eventsPerSlide': Number,       // 每页显示数据数量
    'slide': Number,        // 初始页数
    'orientation': String,  // 朝向 默认auto,[horizontal, vertical]
    'prevArrow': String,         // 上一页数据
    'nextArrow': String,         // 下一页数据
    'data': Array           // 数据
  },
  data () {
    return {
      defaults: {
        slide: 1,
        eventsPerSlide: 6,
        rootClass: 'roadmap',
        prevArrow: '<i class="iconfont icon-fanhui"></i>',
        nextArrow: '<i class="iconfont icon-gengduo"></i>',
        orientation: 'auto',
        eventTemplate: '<div class="event">' + '<div class="event__date">####DATE###</div>' + '<div class="event__content">####CONTENT###</div>' + '</div>'
      },
      opts: {}
    }
  },
  computed: {
    
    buildEvent (event, key) {
      var html = '<li class="' + this.opts.rootClass + '__events__event">' + this.opts.eventTemplate + '</li>';
      html = html.replace('####DATE###', event.date);
      html = html.replace('####CONTENT###', event.content);

      var left = 100 / (this.opts.eventsPerSlide - 1) * key;

      return $(html).css('left', left + '%');
    }
  },
  methods: {
    init () {
      this.getOpts()
    },
    getOpts () {
      let temp = {}
      for (let key in this.$props) {
        this.$props[key] && (temp[key] = this.$props[key])
      }
      this.opts = Object.assign({}, this.defaults, temp)
    },
  },
  created () {
    this.init()
  },
  mounted () {
    $('#my-timeline').roadmap(this.data, this.opts);
  }
}
</script>
