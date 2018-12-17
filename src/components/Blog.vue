<template>
  <article class="container">
    <h1 class="nav_t">
      <router-link to="/blog" class="nav_top_tag">{{ title }}</router-link>
    </h1>
    <div class="blank"></div>
    <div class="blogsbox">
      <ul>
        <div class="blogs" v-for="item in data" :key="item.blogId">
          <li>
            <h3 class="blog_title">
              <router-link :to="`/detail/${item.blogId}`" :title="item.blogTitle" v-if="item.blogTitle.length > 28">{{ item.blogTitle.substring(0, 28) }}</router-link>
              <router-link :to="`/detail/${item.blogId}`" :title="item.blogTitle" v-else>{{ item.blogTitle }}</router-link>
            </h3>
            <span class="blog_pic imgscale" v-if="true">
              <router-link :to="`/detail/${item.blogId}`" :title="item.blogTitle">
								<img src="../../static/images/head.png" :alt="item.blogTitle"/>
							</router-link>
            </span>
            <p class="blog_content" v-if="item.blogContent.length > 245 && false" v-html="item.blogContent.substring(0, 245) + ' ......'"></p>
            <p class="blog_content" v-else-if="item.blogContent.length > 300 && true" v-html="item.blogContent.substring(0, 300) + ' ......'"></p>
						<p class="blog_content" v-else v-html="item.blogContent"></p>
            <p class="blog_author">
              <i class="avatar">
                <img src="../../static/images/head.png"/>
              </i>
              <span class="author">LiRETRO</span>
              <span class="blog_time iconfont icon-shijian">{{ new Date(item.blogPublishDate).Format('yyyy-MM-dd hh:mm') }}</span>
							<span class="viewnum iconfont icon-read">浏览（{{ item.blogVisitedCount }}）</span>
              <router-link :to="`/detail/${item.blogId}`" class="viewmore">阅读更多</router-link>
            </p>
          </li>
        </div>
      </ul>
      <ol class="page-navigator">
        <span style="float: left;">【已显示{{ data.length !== 0 ? (pageNum - 1) * pageSizeData + 1 + '至' + (pageNum === Math.ceil(total / pageSizeData) ? total : pageNum * pageSizeData) + '项结果' : '0至0项结果' }}】共{{ Math.ceil(total / pageSizeData) }}页</span>
        <span style="float: right;">
          <li class="previous" >
            <a href=""><i class="iconfont icon-jiantou_shangyiye"/>上一页</a>
          </li>
          <article ref="pages" style="display: inline-block;"></article>
          <li class="next" >
            <a href="">后一页<i class="iconfont icon-jiantou_xiayiye"/></a>
          </li>
          <input  placeholder="前往" class="jumpPage"/>
        </span>
      </ol>
    </div>
    <div class="sidebar">
      <h2 class="home_title">暂留</h2>
      <div class="about">
        <p class="abname">暂无</p>
      </div>
      <h2 class="home_title">暂留</h2>
      <div class="about">
        <p class="abname">
          暂无
        </p>
      </div>
      <h2 class="home_title">推荐</h2>
      <div class="recommend">
        <router-link to="/" @click="alert('暂留')">
          <ul class="recommend_pic imgscale">
            <i><img src="../../static/images/head.png"></i>
            <p>推荐位</p>
          </ul>
        </router-link>
        <router-link to="/" @click="alert('暂留')">
          <ul class="sidenews">
            <li> <i><img src="../../static/images/head.png"></i>
              <p>推荐位</p>
              <span>2018年12月15日 16:21</span> 
            </li>
          </ul>
        </router-link>
      </div>
      <div class="cloud" style="display: none;">
        <h2 class="hometitle">标签云</h2>
        <ul>
          <a href="/">陌上花开</a> <a href="/">校园生活</a> <a href="/">html5</a> <a href="/">SumSung</a> <a href="/">青春</a> <a href="/">温暖</a> <a href="/">阳光</a> <a href="/">三星</a><a href="/">索尼</a> <a href="/">华维荣耀</a> <a href="/">三星</a> <a href="/">索尼</a>
        </ul>
      </div>
    </div>
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
      pageShowLimit: 6,                   // 最大显示页数
      pageSizeData: this.$props.pageSize, // 每页显示数据量
    }
  },
  methods: {
    drawPage () {
      // 最大页数
      const totalPage = Math.ceil(this.total / this.pageSizeData)
      const pageContainer = this.$refs['pages']
      const id = 'pages'
      $(pageContainer).empty()
      if (this.totalPage <= this.pageShowLimit) {
        for (var i = 1; i <= this.totalPage; i++) {
          var li_page = $(this.template.li_page)
          var li_page_a = $(this.template.li_page_a.format(id, i))
          li_page.append(li_page_a)
          $(pageContainer).append(li_page)
        }
      } else {
        if (this.pageNum < this.pageShowLimit - 2) {
          //后省略
          for (var i = 1; i <= this.pageShowLimit - 2; i++) {
            var li_page = $(this.template.li_page)
            var li_page_a = $(this.template.li_page_a.format(id, i))
            li_page.append(li_page_a)
            $(pageContainer).append(li_page)
          }
          var li_dots = $(this.template.li_dots)
          var li_dots_a = $(this.template.li_dots_a.format(id, totalPage - 1, '...'))
          li_dots.append(li_dots_a)
          $(pageContainer).append(li_dots)

          var li_page = $(this.template.li_page)
          var li_page_a = $(this.template.li_page_a.format(id, totalPage))
          li_page.append(li_page_a)
          $(pageContainer).append(li_page)
        } else if (this.pageNum > totalPage - this.pageShowLimit + 3) {
          //前省略
          var li_page = $(this.template.li_page);
          var li_page_a = $(this.template.li_page_a.format(id, 1));
          li_page.append(li_page_a);
          $(pageContainer).append(li_page);

          var li_dots = $(this.template.li_dots);
          var li_dots_a = $(this.template.li_dots_a.format(id, 2, '...'));
          li_dots.append(li_dots_a);
          $(pageContainer).append(li_dots);

          for (var i = totalPage - this.pageShowLimit + 3; i <= totalPage; i++) {
            var li_page = $(this.template.li_page);
            var li_page_a = $(this.template.li_page_a.format(id, i));
            li_page.append(li_page_a);
            $(pageContainer).append(li_page);
          }
        } else {
          //前后都省略，中间当前页
          var li_page = $(this.template.li_page);
          var li_page_a = $(this.template.li_page_a.format(id, 1));
          li_page.append(li_page_a);
          $(pageContainer).append(li_page);

          var li_dots = $(this.template.li_dots);
          var li_dots_a = $(this.template.li_dots_a.format(id, 2, '...'));
          li_dots.append(li_dots_a);
          $(pageContainer).append(li_dots);
          for (var i = this.pageNum - 2; i <= this.pageNum + 2; i++) {
            var li_page = $(this.template.li_page);
            var li_page_a = $(this.template.li_page_a.format(id, i));
            li_page.append(li_page_a);
            $(pageContainer).append(li_page);
          }

          var li_dots = $(this.template.li_dots);
          var li_dots_a = $(this.template.li_dots_a.format(id, totalPage - 1, '...'));
          li_dots.append(li_dots_a);
          $(pageContainer).append(li_dots);

          var li_page = $(this.template.li_page);
          var li_page_a = $(this.template.li_page_a.format(id, totalPage));
          li_page.append(li_page_a);
          $(pageContainer).append(li_page);
        }
      }
      this.bindEvent()
    },
    bindPermanentEvent () {
      const $pageNavigator = $('ol.page-navigator')
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
    bindEvent () {
      const _this = this;
      $(this.$refs['pages']).find("li a").not(".disabled").not(".next").not(".previous").each(function (index, item) {
        $(item).click(function () {
          var pageNum = parseInt($(this).text())
          _this.$emit('onPageChange', pageNum)
          _this.pageNum = pageNum
        })
      })
    },
    initBlogsEffect () {
      $('div.blogs').each(function(event) {
        $(this).addClass('left-fade-in')
      })
      this.blogEffect()
      // window.addEventListener('scroll', this.monitorScroll)
    },
    blogEffect () {
      let _this = this
      $('ul div.left-fade-in').not('.enter').each(function() {
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
        ul: '<ul class="pagination">',
        li_pre: '<li class="paginate_button previous disabled" id="{0}_previous"></li>',
        li_pre_a: '<a href="javascript:void(0)" class="previous" style="" aria-controls="{0}" data-dt-idx="0" tabindex="0">上一页</a>',
        li_page: '<li class="paginate_button"></li>',
        li_page_a: '<a href="javascript:void(0)"  aria-controls="{0}" data-dt-idx="{1}" tabindex="{1}">{1}</a>',
        li_dots: '<li class="paginate_button"></li>',
        li_dots_a: '<a href="javascript:void(0)"  aria-controls="{0}" class="disabled" tabindex="{1}">{2}</a>',
        li_next: '<li class="paginate_button next disabled" id="{0}_next"></li>',
        li_next_a: '<a href="javascript:void(0)" class="next"  aria-controls="{0}" data-dt-idx="{1}" tabindex="{1}">下一页</a>'
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
    this.bindPermanentEvent()
  }
}
</script>

<style lang="less">
  .container {
    width: 1140px;
    margin: 0 auto;
    overflow: hidden;
    h1.nav_t {
      border-bottom: #bfbfbf 1px solid;
      font-size: 14px;
      font-weight: normal;
      line-height: 40px;
      width: 100%;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .nav_top_tag {
      background: #3a6ab5;
      width: 100px;
      display: block;
      text-align: center;
      float: left;
      color: #fff;
    }
    .blank {
      height: 20px;
      display: block;
      overflow: hidden;
      width: 100%;
      margin: auto;
      clear: both;
    }
    .blogsbox {
      width: 66%;
      overflow: hidden;
      float: left;
      .blogs {
        overflow: hidden;
        margin-bottom: 20px;
        padding: 20px;
        background: #FFF;
        box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
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
            transition-delay: 0.13s;
          }
          &:nth-child(3n) {
            transition-delay: 0.19s;
          }
          &:nth-child(4n) {
            transition-delay: 0.25s;
          }
          &:nth-child(5n) {
            transition-delay: 0.31s;
          }
          &:nth-child(6n) {
            transition-delay: 0.37s;
          }
          &:nth-child(7n) {
            transition-delay: 0.43s;
          }
          &:nth-child(8n) {
            transition-delay: 0.49s;
          }
          &:nth-child(9n) {
            transition-delay: 0.55s;
          }
          &:nth-child(10n) {
            transition-delay: 0.61s;
          }
        }
        li {
          overflow: hidden;
          border-bottom: #eee 1px dashed;
          position: relative;
          min-height: 120px;
          .blog_title {
            margin: 0 0 10px 0;
            font-size: 20px;
            overflow: hidden;
            text-align: left;
          }
          .blog_pic {
            float: left;
            width: 30%;
            max-height: 170px;
            margin-right: 20px;
            display: block;
            overflow: hidden;
            margin-bottom: 10px;
            img {
              width: 100%;
              height: auto;
              transition: all 0.6s ease;
            }
          }
          .blog_content {
            font-size: 14px;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            margin-top: 20px;
            text-align: left;
            word-break: break-all;
          }
          .blog_author {
            margin-top: 5px;
            overflow: hidden;
            color: #999;
            line-height: 34px;
           .avatar {
              position: relative;
              float: left;
              width: 30px;
              height: 30px;
              border-radius: 100%;
              padding: 2px;
              display: block;
              margin: 0 0;
              background: linear-gradient(to top right, rgba(0,153,255,.9), rgba(42,228,197,.7));
              img {
                width: 100%;
                border-radius: 100%;
                height: 100%;
              }
            }
            span {
              bottom: 20px;
              float: left;
              margin-left: 10px;
              &.author {
                color: #333;
                margin-left: 5px;
              }
            }
            .viewmore {
              display: block;
              float: right;
              margin-bottom: 3px;
              padding: 3px 10px;
              background: #12b7de;
              color: #fff;
              border-radius: 3px;
            }
          }
        }
      }
      .page-navigator {
        list-style: none;
        margin: 25px 0;
        padding: 0;
        text-align: center;
        li {
          display: inline-block;
          margin: 0 4px;
          &.current {
            a {
              text-decoration: underline;
              color: #333;
              cursor: default;
            }
          }
        }
        a {
          display: inline-block;
          padding: 0 5px;
          height: 30px;
          line-height: 30px;
          text-decoration: none;
          outline: none;
          &:link, &:visited {
            text-decoration: none;
          }
        }
        .jumpPage {
          width: 40px;
          height: 30px;
          outline: none;
        }
      }
    }
    .sidebar {
      width: 32%;
      overflow: hidden;
      float: right;
      div {
        padding: 35px 30px;
        margin-bottom: 20px;
        background: #FFF;
        box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
      }
      .home_title {
        font-size: 18px;
        color: #282828;
        font-weight: 600;
        margin: 0;
        text-transform: uppercase;
        padding-bottom: 0;
        margin-bottom: 10px;
        text-align: left;
        position: relative;
        &:after {
          content: "";
          background-color: #282828;
          left: 0;
          width: 50px;
          height: 2px;
          bottom: 0;
          position: absolute;
          transition: 0.5s;
        }
      }
      .about {
        background: #FFF;
        overflow: hidden;
      }
      .abname {
        color: #3f3f3f;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 10px;
        text-align: center;
      }
      .recommend {
        .recommend_pic {
          width: 100%;
          height: 170px;
          background: #000;
          margin-bottom: 20px;
          overflow: hidden;
          display: block;
          clear: both;
          position: relative;
          img {
            width: 100%;
            min-height: 170px;
            transition: all .5s ease;
          }
          p {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px 20px;
            font-size: 15px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            background: rgba(0,0,0,0.7);
            color: #fff;
          }
        }
        .sidenews {
          li {
            margin: 0 0 20px 0;
            overflow: hidden;
            i {
              width: 100px;
              height: 75px;
              overflow: hidden;
              display: block;
              border: #efefef 1px solid;
              float: left;
              margin-right: 10px;
            }
            p {
              line-height: 24px;
              color: #888;
              font-size: 15px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              -webkit-line-clamp: 2;
            }
            span {
              font-size: 12px;
              color: #9A9A9A;
              margin-top: 10px;
              display: block;
            }
          }
          img {
            height: 100%;
            max-height: 75px;
            margin: auto;
            transition: all .5s ease;
          }
        }
      }
    }
  }
</style>


