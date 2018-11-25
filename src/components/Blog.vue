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
							<p class="content" v-if="item.blogContent.length > 120">{{ item.blogContent.substring(0, 120)}}</p>
							<p class="content" v-else>{{ item.blogContent }}</p>
							<p class="author">
								<span class="blog_time iconfont icon-publishtime">{{ new Date(item.blogPublishDate).Format('yyyy-MM-dd hh:mm') }}</span>
								<span class="viewnum iconfont icon-read">浏览（2251）</span>
							</p>
						</ul>
					</div>
          <ol class="page-navigator"><li class="current"><a href="https://liangxingjian.com/page/1/">1</a></li><li><a href="https://liangxingjian.com/page/2/">2</a></li><li><a href="https://liangxingjian.com/page/3/">3</a></li><li><a href="https://liangxingjian.com/page/4/">4</a></li><li><span>...</span></li><li><a href="https://liangxingjian.com/page/9/">9</a></li><li class="next"><a href="https://liangxingjian.com/page/2/">后一页 »</a></li></ol>
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
    'data': Array
  },
  data () {
    return {
    }
  },
  methods: {
    init () {
      if(Object.prototype.toString.call(this.data) !== '[object Array]') {
        this.data = []
      }
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
        h2 {
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
              text-indent: 2rem;
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


