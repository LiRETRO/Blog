<template>
  <div class="container">
			<div class="l_box">
				<div class="topnews">
					<h2>{{ title }}</h2>
					<div class="blogs" v-for="(item) in data" :key="item.blogId">
						<figure>
							<router-link :to="'/detail/' + item.blogId" :title="item.blogTitle">
								<img src="../../static/images/head.png" :alt="item.blogTitle"/>
							</router-link>
						</figure>
						<ul>
							<h3>
								<router-link :to="'/detail/' + item.blogId" :title="item.blogTitle">{{ item.blogTitle }}</router-link>
							</h3>
							<p class="content" v-if="item.blogContent.length > 120" v-html="item.blogContent">{{ item.blogContent.substring(0, 120)}}</p>
							<p class="content" v-else v-html="item.blogContent">{{ item.blogContent }}</p>
							<p class="author">
								<span class="blog_time iconfont icon-publishtime">{{ new Date(item.blogPublishDate).Format('yyyy-MM-dd hh:mm') }}</span>
								<span class="viewnum iconfont icon-read">浏览（{{ item.blogVisitedCount }}）</span>
							</p>
						</ul>
					</div>
          <ol class="page-navigator">
            <span style="float: left;">【已显示{{ data.length !== 0 ? (pageNum - 1) * pageSizeData + 1 + '至' + (pageNum === Math.ceil(total / pageSizeData) ? total : pageNum * pageSizeData) + '项结果' : '0至0项结果' }}】共{{ Math.ceil(total / pageSizeData) }}页</span>
            <span style="float: right;">
            <li class="previous" >
              <a href=""><i class="iconfont icon-jiantou_shangyiye" />上一页</a>
            </li>
            <article ref="pages" style="display: inline-block;"></article>
            <li class="next" >
              <a href="">后一页<i class="iconfont icon-jiantou_xiayiye"/></a>
            </li>
            <input  placeholder="前往" class="jumpPage"/>
            </span>
          </ol>
				</div>
			</div>
			<!-- <div class="r_box">

			</div> -->
		</div>
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
    }
  },
  watch: {
    total () {
      this.drawPage()
    },
    pageNum (newVal) {
      this.drawPage()
    }
  },
  mounted () {
    this.bindPermanentEvent()
  }
}
</script>

<style lang="less">
#blog {
  .container {
    margin: 0 auto;
    font-family: 'Microsoft YaHei' !important;
    .l_box {
      width: 100%;
      float: left;
      .topnews {
        & > h2 {
          text-align: left;
          font-size: 16px;
          font-weight: bold;
          line-height: 36px;
          color: #333;
          border-bottom: #db6d4c 4px solid;
        }
        .blogs {
          user-select: none;
          padding: 30px 0;
          position: relative;
          border-bottom: #BFAB86 1px solid;
          overflow: hidden;
          a {
            outline: none;
            text-decoration: none;
            color: #474645;
            &:link, &:visited {
              text-decoration: none;
              color: #666;
            }
            &:hover {
              color: #db6d4c;
            }
          }
          figure {
            float: left;
            width: 25%;
            overflow: hidden;
            cursor: pointer;
            img {
              width: 100%;
              height: 190px;
              display: block;
              margin: auto;
              transition: all 0.4s;
              &:hover {
                transform: scale(1.1);
              }
            }
          }
          ul {
            float: right;
            line-height: 22px;
            width: 75%;
            color: #777;
            h3 {
              font-size: 1.5rem;
              font-weight: bold;
              transition: all .5s;
              margin-bottom: 10px;
            }
            p.content {
              word-break: break-all;
              text-align: left;
              font-size: 0.96rem;
              height: 90px;
            }
            p.author {
              overflow: hidden;
              clear: both;
              margin: 10px 0;
              display: inline-block;
              color: #999;
              width: 100%;
              span {
                &.blog_time {
                  float: left;
                }
                &.viewnum {
                  float: right;
                }
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
            outline: none;
          }
        }
      }
    }
    .r_box {
      width: 350px;
      float: right;
    }
  }
}
</style>


