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
								<span class="viewnum iconfont icon-read">浏览（2251）</span>
							</p>
						</ul>
					</div>
          <ol class="page-navigator">
            <span style="float: left;">【已显示{{(pageIndex - 1) * pageSizeData + 1 + '至' + (pageIndex === Math.ceil(total / pageSizeData) ? total : pageIndex * pageSizeData) + '项结果' }}】共{{Math.ceil(total / pageSizeData)}}页</span>
            <li class="prev" v-show="notFirstPage">
              <a href="" @click="prev"><i class="iconfont icon-jiantou_shangyiye" />上一页</a>
            </li>
            <template v-for="(item, index) of pageShowLimit" >
              <li class="current" :key="item">
                <a href="">{{ item }}</a>
              </li>
            </template>
            <li class="next" v-show="notLastPage">
              <a href="" @click="next">后一页<i class="iconfont icon-jiantou_xiayiye"/></a>
            </li>
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
      pageIndex: 1,                       // 当前页
      pageShowLimit: 6,                  // 显示多少页码
      curLastPage: 0,
      curFirstPage: 0,
      pageSizeData: this.$props.pageSize, // 每页显示数据量
      notFirstPage: false,                
      notLastPage: false,
      pageArr: []
    }
  },
  methods: {
    init () {
      this.pageShowLimit = Math.ceil(this.total / this.pageSizeData) >= 11 ? 11 : Math.ceil(this.total / this.pageSizeData)
      this.notFirstPage = this.pageIndex === 1 ? false : true
      this.notLastPage = this.pageIndex === Math.ceil(this.total / this.pageSizeData) ? false : true
    },
    prev () {

    },
    next () {

    },
    calcuCurPageLimit () {
      
    }
  },
  computed: {
    total () {
      return this.$props.totalRecord
    }
  },
  created () {
    this.init()
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
            padding: 0 10px;
            height: 30px;
            line-height: 30px;
            text-decoration: none;
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


