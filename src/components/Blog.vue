<template>
  <article>
    <div class="post-preview" v-for="item in data" :key="item.blogId">
      <router-link :to="`/detail/${item.blogId}`">
        <h2 class="post-title" :title="item.blogTitle" v-if="item.blogTitle.length > 28" v-text="item.blogTitle.substring(0, 28)"></h2>
        <h2 class="post-title" :title="item.blogTitle" v-else v-text="item.blogTitle"></h2>

        <h3 class="post-subtitle" :subTitle="item.blogSubTitle" v-if="item.blogSubTitle" v-text="item.blogSubTitle">「计算机科学偶像」- 彼得·约翰·兰丁</h3>

        <div class="post-content-preview" v-if="item.blogContent.length > 200" v-html="item.blogContent.substring(0, 200) + ' ......'"></div>
        <div class="post-content-preview" v-else v-html="item.blogContent"></div>

      </router-link>
      <p class="post-meta">Posted by {{ item.blogPublisher }} on {{ formatDate(new Date(item.blogPublishDate)) }}</p>
      <hr />
    </div>
    <!-- Pager -->
    <ul class="pager" ref="pager">
    
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    'title': String,
    'pageSize': {
      type: Number,
      default: 10
    },
    'data': Array,
    'totalRecord': Number,
    'onPageChange': Function
  },
  data () {
    return {
      pageNum: 1,                         // 当前页
      pageSizeData: this.$props.pageSize, // 每页显示数据量
      monthMapping: {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
      }
    }
  },
  methods: {
    formatDate (date) {
      if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error('IllegalArgumentException: param must be date');
      }
      return `${this.monthMapping[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`;
    },
    drawPage () {
      // 最大页数
      const totalPage = Math.ceil(this.total / this.pageSizeData)
      const isOnePage = this.total <= this.pageSizeData;
      const pageContainer = this.$refs['pager']
      const id = 'pages'
      $(pageContainer).empty()
      if (!isOnePage) {
        // 根据当前pageNum来判断是否渲染前一页||后一页
        if (this.pageNum == 1) {
          $(pageContainer).append(this.template.li_next);
        } else if (totalPage <= this.pageNum) {
          $(pageContainer).append(this.template.li_pre);
        } else {
          $(pageContainer).append(this.template.li_pre);
          $(pageContainer).append(this.template.li_next);
        }
      }
    },
    bindPermanentEvent () {
      const $pageNavigator = $('ul.pager')
      const _this = this
      $pageNavigator.find("li.next a").click(function (event) {
        event.preventDefault()
        if (_this.pageNum == _this.totalPage)
            return;
        _this.pageNum = _this.pageNum + 1
        _this.$emit('onPageChange', _this.pageNum)
      })

      $pageNavigator.find("li.previous a").click(function (event) {
        event.preventDefault()
        if (_this.pageNum === 1)
            return;
        _this.pageNum = _this.pageNum - 1
        _this.$emit('onPageChange', _this.pageNum)
      })
      $pageNavigator.find('input.jumpPage').on('keydown', function (event) {
        if (event.keyCode !== 8 && event.keyCode !== 13 && event.keyCode !== 46 && !/\d/.test(parseInt(event.key))) {
          return false
        }
        // 按下回车进行跳转
        if (event.keyCode === 13) {
          event.preventDefault()
          const pageNum = parseInt($(this).val())
          if (pageNum > 0 && pageNum <= _this.totalPage) {
            _this.pageNum = pageNum
            _this.$emit('onPageChange', _this.pageNum)
            $(this).val('')
          } else {
            $(this).val('')
          }
        }
      })
    },
    initBlogsEffect () {
      $('div.post-preview').each(function(event) {
        $(this).addClass('left-fade-in')
      })
      this.blogEffect();
      window.addEventListener('scroll', this.monitorScroll)
    },
    blogEffect () {
      let _this = this
      $('div.left-fade-in').not('.enter').each(function() {
        let offsetTop = document.body.scrollTop || window.pageYOffset
        let windowHeight = _this.windowSize
        let elemOffsetTop = this.offsetTop
        let elemInnerHeight = this.offsetHeight
        $(this).addClass('enter')
        if(elemOffsetTop + elemInnerHeight < offsetTop + windowHeight){
          
        }
      })
    },
    monitorScroll (event) {
      this.blogEffect()
    }
  },
  computed: {
    total () {
      return this.$props.totalRecord
    },
    totalPage () {
      return Math.ceil(this.total / this.pageSizeData)
    },
    template () {
      return {
        li_pre: '<li class="previous" data-dt-idx="0" id="{0}_previous"><a href="javascript:">Newer Posts ←</a></li>',
        li_next: '<li class="next" data-dt-idx="0" id="{0}_next"><a href="javascript:">Older Posts →</a></li>',
      }
    },
    windowSize () {
      return window.innerHeight;
    }
  },
  watch: {
    total () {
      this.drawPage()
    },
    pageNum (newVal) {
      this.drawPage()
    },
    data () {
      this.$nextTick(function() {
        this.initBlogsEffect()
      })
    }
  },
  mounted () {
    this.bindPermanentEvent();
  }
}
</script>

<style lang="less">
.post-preview {
  transition: all 0.6s ease;
  &.left-fade-in {
    opacity: 0;
    transform: translateX(-40%);
    &.enter {
      opacity: 1;
      transform: translateX(0);
    }
    &:nth-child(1n) {
      transition-delay: 0.07s;
    }
    &:nth-child(2n) {
      transition-delay: 0.20s;
    }
    &:nth-child(3n) {
      transition-delay: 0.33s;
    }
    &:nth-child(4n) {
      transition-delay: 0.46s;
    }
    &:nth-child(5n) {
      transition-delay: 0.59s;
    }
    &:nth-child(6n) {
      transition-delay: 0.72s;
    }
    &:nth-child(7n) {
      transition-delay: 0.85s;
    }
    &:nth-child(8n) {
      transition-delay: 0.98s;
    }
    &:nth-child(9n) {
      transition-delay: 1.11s;
    }
    &:nth-child(10n) {
      transition-delay: 1.24s;
    }
  }
}
</style>


