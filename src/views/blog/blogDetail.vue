<template>
  <div class="detail_container">
    <header id="header" class="Alaeym-header">
      <div class="Alaeym-header-innWindth">
        <router-link to="/"><h1 class="Alaeym-modal-title">LiRETRO</h1></router-link>
        <nav class="Alaeym-topNav">
          <i class="fa fa-bars fa-2x mobile" data-toggle="modal" id="navBtn" data-target="#nav"></i>
          <ul id="nav" class="modal fade nemo-nav" aria-hidden="false">
            <li><router-link title="LiRETRO" to="/" class="nav-logo">LiRETRO</router-link></li>
            <li><router-link title="首页" to="/"><i class="iconfont icon-home"><b class="navtext">首页</b></i></router-link></li>
            <li><router-link title="留言" to="/"><i class="iconfont icon-message"><b class="navtext">留言</b></i></router-link></li>
            <li><router-link title="标签" to="/"><i class="iconfont icon-tag"><b class="navtext">标签</b></i></router-link></li>
            <li><router-link title="朋友" to="/"><i class="iconfont icon-friend"><b class="navtext">朋友</b></i></router-link></li>
          </ul>
        </nav>
        <div class="Alaeym-header-right">
          <i class="login-btn-nemo" style="">
            <router-link to="/login">登录</router-link>
          </i>
        </div>
      </div>
    </header>
    <article class="Alaeym-banner">
      <div class="apple-banner">
        <div class="banner-bg" style="background-image:url(/static/images/hello_bg.jpg);"></div>
      </div>
    </article>
    <div class="main">
      <article class="Alaeym-main-top">
        <div class="Alaeym-main-top-z">
          <div class="Alaeym-main-top-logo">
            <router-link to="/">
              <img src="/static/images/head.png" alt="/static/images/head.png" title="LiRETRO">
            </router-link>
          </div>
          <div class="Alaeym-main-top-nav">
            <ul>
              <li><a href="/u/10102"><span>访问</span><span class="br">{{ blogDetail.blogVisitedCount }}</span></a></li>
              <li><a href="/u/10102"><span>博客</span><span class="br">0</span></a></li>
              <li><a href="/u/10102/messages"><span>留言</span><span class="br">1</span></a></li>
              <li><a href="/u/10102/friends"><span>关注</span><span class="br">0</span></a></li>
            </ul>
          </div>
        </div>
      </article>
      <div class="Alaeym-main-content">
        <!-- 左侧 -->
        <article class="Alaeym-main-left">
          <div class="Alaeym-main-left-z">
            <!-- 个人信息 -->
            <div class="Alaeym-main-left-myInfo">
              <a href=""><h1>LiRETRO</h1></a>
              <span class="message">关注TA</span>
              <p class="Alaeym-main-left-myInfo-brief">这个人有点懒</p>
              <ul>
                <li><i class="info-extras"></i>未知地区</li>
                <li><i class="info-extras"></i>未知工作</li>
              </ul>
            </div>
          </div>
        </article>
        <!-- 中间 -->
        <article class="Alaeym-main-post single-main-post">
          <div id="single-main-post">
            <div class="Alaeym-main-post-header single-header">
              <div>
                <i class="info-extras"></i><h2>{{ blogDetail.blogTitle }}</h2>
                <p>
                  <i class="iconfont icon-shijian" aria-hidden="true"></i> {{ new Date(blogDetail.blogPublishDate).Format('yyyy-MM-dd hh:mm') }}
                  <i class="iconfont icon-read" aria-hidden="true"></i> {{ blogDetail.blogVisitedCount }}
                  <i class="iconfont icon-message1" aria-hidden="true"></i> 8
                </p>
              </div>
            </div>
            <article class="single" id="single">
              <div class="blog-article-content" v-html="blogDetail.blogContent">
              </div>
              <div class="thumbs-content">
                <input type="hidden" id="thumbs" value="0">
                <span class="thumbs-button iconfont icon-dianzan"> 点赞(0)</span>
              </div>
              <div class="single-footer">
                <p class="single-copyright"><i class="banquan"></i>如果内容侵犯了您的版权,请联系站长及时删除处理</p>
              </div>
              <div>
                <p class="last-article"><i class="banquan"></i>上一篇文章：<a href="">上一篇文章</a></p>
                <p class="next-article"><i class="banquan"></i>下一篇文章：<a href="">下一篇文章</a></p>
              </div>
            </article>
            <div class="fly-panel detail-box" id="flyReply">
              <div class="layui-form layui-form-pane">
                <div class="visitor">
                  <img name="image" id="visitor_img" src="/static/images/default.jpeg" height="42" width="42" class="avatar-42">
                </div>
                <div class="commentform">
                  <div class="layui-form-item lemon_comment_reply">
                    <span class="lemon_comment_reply_user"></span>
                    <span class="lemon_comment_reply_remove" style="float: left"><i class="layui-icon layui-icon-close"></i></span>
                  </div>
                  <div class="comment-textarea error">
                    <input type="hidden" name="reId" value="">
                    <textarea name="content" required="" placeholder="请输入你的评论吧~" class="" style="height: 50px;"></textarea>
                  </div>
                  <ul class="comment-submit">
                    <li class="middle">
                      <button class="commentbutton">发送</button>
                    </li>
                  </ul>
                </div>
              </div>
              <fieldset class="layui-elem-field layui-field-title" style="text-align: center;">
                <legend>点了个评</legend>
              </fieldset>
              <ul class="jieda">
                <li id="10565">
                  <div class="detail-about detail-about-reply">
                    <a class="fly-avatar" href="">
                      <img src="/static/images/test2.jpg">
                    </a>
                    <div class="fly-detail-user">
                      <a class="fly-link" href="">
                        <cite>801131</cite>
                      </a>
                    </div>
                    <div class="detail-hits">
                      <span>2018年12月17日 23:11</span>
                    </div>
                  </div>
                  <div class="detail-body jieda-body photos">
                    <p>
                        不错!
                    </p>
                  </div>
                  <div class="jieda-reply">
                    <input type="hidden" name="id" value="10565">
                    <span type="reply" class="reply-span">
                      <i class="layui-icon layui-icon-dialogue icon-svgmoban53"></i>
                      回复
                    </span>
                  </div>
                </li> 
              </ul>
              <span class="layui-btn layui-btn-primary layui-btn-fluid lemon_comment_more" data-page="2" style="display: none;">加载更多</span>
            </div>
          </div>
        </article>

        <article class="Alaeym-main-right">
          <div class="widget">
            <h3 class="widget-title"><i class="iconfont icon-jiaoyiliangzongpaixing"></i>点击排行</h3>
            <ul class="items hot-views">
              <li class="item">
                <img src="/static/images/test1.jpg" onerror="/static/images/default.jpeg">
                <div>
                  <h4 class="title nowrap"><a href=""># Spring的统一事务模型</a></h4>
                </div>
              </li>
            </ul>
          </div>

          <div class="widget">
            <h3 class="widget-title"><i class="iconfont icon-jiaoyiliangzongpaixing"></i>最新博客</h3>
            <ul class="items hot-views">
              <li class="item">
                <img src="/static/images/test1.jpg" onerror="/static/images/default.jpeg">
                <div>
                  <h4 class="title nowrap"><a href=""># Spring的统一事务模型！</a></h4>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <div class="footerIcon">
          <ul>
            <li><a target="_blank" href="/u/10102" class="onPjax"><span class="fa fa-home"></span></a></li>
          </ul>
        </div>
        <p>
          Copyright © 2018 [Nemo] All Rights Reserved.
        </p>
        <p>
          <a target="_blank" href="http://www.miitbeian.gov.cn">{{ record }}</a>
        </p>
      </div>
    </footer>
  </div>
  <!-- <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="detail">
    <article class="blog-article container">
      <div class="blog-article-hd">
        <h2 class="blog-title">{{ blogDetail.blogTitle }}</h2>
        <p class="blog-meta">
          <span>{{ blogDetail.blogVisitedCount }}次阅读</span>
          &nbsp;-&nbsp;
          <span>{{ new Date(blogDetail.blogPublishDate).Format('yyyy-MM-dd hh:mm') }}</span>
        </p>
      </div>
      <div class="blog-article-bd" v-html="blogDetail.blogContent">
        <p>{{ blogDetail.blogContent }}</p>
      </div>
    </article>
  </section> -->
</template>

<script>
import { getBlogDetail } from '@/api/BlogApi'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      blogDetail: {}
    }
  },
  computed: {
    ...mapGetters([
      'record'
    ]),
    blogId () {
      return this.$route.params.id
    }
  },
  methods: {
    init () {
      let _this = this
      getBlogDetail(this.blogId).then(function (data) {
        _this.blogDetail = data.resultObj
      })
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="less">
  // #detail {
  //   .blog-article {
  //     margin: 3rem auto;
  //     .blog-article-hd {
  //       text-align: center;
  //       h2 {
  //         font-size: 2.3rem;
  //         margin-bottom: 1rem;
  //         line-height: 1.15;
  //         font-weight: 400;
  //       }
  //       p {
  //         color: #999;
  //         line-height: 1.5;
  //         font-size: .95rem;
  //       }
  //     }
  //     .blog-article-bd {
  //       word-wrap: break-word;
  //       p {
  //         max-width: 100%;
  //         height: auto !important;
  //         height: auto !important;
  //         text-align: left; 
  //         text-indent: 2rem;
  //         line-height: 2;
  //         font-size: 1rem;
  //         font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  //       }
  //     }
  //   }
  // }
  div.detail_container {
    a, abbr, acronym, address, applet, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, figure, form, h1, h2, h3, h4, h5, h6, html, iframe, ins, kbd, label, legend, li, object, ol, p, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
      border: 0;
      /* font-family: rst,'印品睿圆体'; */
      font: 14px/24px Consolas,"Microsoft Yahei",Arial,"宋体";
      font-style: inherit;
      font-weight: inherit;
      margin: 0;
      outline: 0;
      padding: 0;
      text-decoration: none;
      list-style: none;
      color: #555;
      vertical-align: baseline;
      font-size: 13px;
    }
    background-color: #FFFFFF;
    .nav-logo {
      margin-top: 0 !important;
    }
    .Alaeym-header {
      width: 100%;
      position: fixed;
      z-index: 20;
      top: 0px;
      background: #fff;
      clear: both;
      display: block;
      transition: top 0.5s;
      .Alaeym-header-innWindth {
        max-width: 70rem;
        padding: 0 2em;
        height: 48px;
        margin: auto;
        z-index: 4;
        .Alaeym-modal-title {
          display: none;
          text-align: center;
        }
      }
      .Alaeym-topNav {
        height: 100%;
        float: left;
        li, a {
          line-height: 52px;
        }
        .nav-logo {
          display: block;
        }
        .navtext {
          display: none;
        }
        & > ul {
          height: 100%;
          & > li {
            float: left;
            text-align: center;
            height: 100%;
            position: relative;
            & > a {
              line-height: 48px;
              height: 100%;
              display: block;
              padding: 0 1em;
              font-size: 25px;
              i {
                font-size: inherit;
              }
            }
          }
        }
      }
      .Alaeym-header-right {
        height: 100%;
        float: right;
        position: relative;
        .login-btn-nemo {
          float: right;
          margin-right: 0;
          margin-top: 5px;
          a {
            font-size: 12px;
            width: 40px;
            height: 36px;
            border-radius: 10px;
            background: #FF694E;
            color: #fff;
            line-height: 36px;
            display: block;
            text-align: center;
          }
        }
      }
    }
    .Alaeym-banner {
      height: 380px;
      clear: both;
      display: block;
      .apple-banner, .banner-bg {
        width: 100%;
        height: 100%;
      }
      .banner-bg {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .main {
      width: 100%;
      margin: 0 auto;
      clear: both;
      .detail-box {
        padding: 20px;
      }
      .Alaeym-main-top {
        height: 60px;
        width: 100%;
        background: #fff;
        position: relative;
        z-index: 2;
        border-bottom: 1px solid #e1e8ed;
        .Alaeym-main-top-z {
          max-width: 1200px;
          padding: 0 28px;
          height: 100%;
          margin: 0 auto;
          .Alaeym-main-top-logo {
            width: 300px;
            height: 100%;
            float: left;
            position: relative;
            img {
              max-width: 200px;
              max-height: 200px;
              border-radius: 8px;
              position: absolute;
              left: 0;
              bottom: -30px;
              border: 8px solid #fff;
            }
          }
          .Alaeym-main-top-nav {
            height: 100%;
            position: relative;
            display: block;
            float: left;
            ul {
              span {
                display: block;
                color: rgb(101, 119, 134);
                &.br {
                  font-size: 1.125rem;
                  font-weight: 600;
                }
              }
              li {
                border-color: rgb(101, 119, 134)!important;
                color: rgb(101, 119, 134)!important;
                float: left;
                a {
                  display: block;
                  padding: 10.5px 15px 7.5px 15px;
                  font-size: 12px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
      .Alaeym-main-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        .info-extras {
          content: "";
          width: 4px;
          height: 4px;
          top: 8px;
          float: left;
          margin-right: 8px;
          position: relative;
          border: 2px solid #c3c3c3;
          border-radius: 100%;
          display: inline-block;
          background-color: #FF694E;
          box-sizing: initial;
        }
        .Alaeym-main-left {
          box-sizing: border-box;
          font-size: 14px;
          margin: 0px!important;
          padding: 0px!important;
          text-align: left;
          vertical-align: top;
          width: 25%;
          display: inline-block;
          .Alaeym-main-left-z {
            padding: 35px 5px 0 35px;
            max-height: 100%;
            .Alaeym-main-left-myInfo {
              margin-bottom: 26px;
              h1 {
                font-weight: 600;
                font-size: 21px;
                display: inline;
                i {
                  color: #FF694E;
                }
              }
              .message {
                margin-top: 16px;
                width: 60px;
                height: 36px;
                border-radius: 3px;
                background: #FF694E;
                color: #fff;
                line-height: 36px;
                display: block;
                text-align: center;
                cursor: pointer;
              }
              .Alaeym-main-left-myInfo-brief {
                font-size: 12px;
                margin-top: 15px !important;
                margin-bottom: 15px;
              }
              ul {
                margin-top: 15px;
                li {
                  margin: 5px 0;
                  i {
                    font-size: 18px;
                    color: rgb(101, 119, 134);
                    margin-right: 10px;
                  }
                }
              }
            }
          }
        }
        .Alaeym-main-post {
          box-sizing: border-box;
          font-size: 14px;
          margin-top: 10px;
          text-align: left;
          vertical-align: top;
          width: 50%;
          background: #fff;
          border-radius: 5px;
          border: 1px solid #e1e8ed;
          display: inline-block;
          #single-main-post {
            width: 100%;
          }
          .Alaeym-main-post-header {
            width: 100%;
            min-height: 45px;
            border-bottom: 1px solid #e1e8ed;
            div {
              padding: 15px 15px 15px 30px !important;
            }
            h2 {
              font-weight: 700;
              font-size: 16px;
              margin-bottom: 5px;
            }
            .iconfont {
              font-size: inherit;
            }
          }
          .single {
            font-size: 16px;
            max-width: 100%;
            padding: 15px 30px;
            border-bottom: 1px solid #e1e8ed;
            .blog-article-content * {
              max-width: 100% !important;
            }
            p {
              margin: 20px 0;
              line-height: 2;
              text-indent: 2em;
              word-wrap: break-word;
              z-index: 2;
            }
            .thumbs-content {
              width: 291px;
              margin: 30px auto 10px;
              text-align: center;
              .thumbs-button {
                background-color: #dc3dea;
                &.iconfont {
                  display: inline-block;
                }
              }
              .thumbs-button, .reward-button {
                text-align: center;
                margin: 5px auto;
                padding: 0 20px;
                line-height: 36px;
                color: #fbfbfb;
                text-decoration: none;
                font-weight: bold;
                font-size: 15px;
                border-radius: 25px;
                cursor: pointer;
                opacity: 1;
                transition: all .3s;
              }
            }
            .single-footer {
              margin-top: 60px;
              width: 100%;
              border-top: 1px solid #e1e8ed;
              border-bottom: 1px solid #e1e8ed;
              overflow: hidden;
              display: flex;
              align-items: center;
              max-height: 74px;
              .single-copyright {
                text-align: center;
                line-height: 2;
              }
            }
            .last-article {
              margin-bottom: 0 !important;
            }
            .banquan {
              content: "";
              width: 4px;
              height: 4px;
              margin-right: 8px;
              position: relative;
              border: 2px solid #c3c3c3;
              border-radius: 100%;
              display: inline-block;
              background-color: #FF694E;
              box-sizing: initial;
            }
          }
          .fly-panel {
            margin-bottom: 15px;
            border-radius: 2px;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
            .visitor {
              position: relative;
              float: left;
              .avatar-42 {
                border-radius: 50%;
              }
            }
            .commentform {
              margin-left: 50px;
              padding: 0 15px;
              input, textarea {
                box-shadow: none;
                border: 1px solid #e1e8ed;
                border-radius: 20px;
                box-sizing: border-box;
                padding: 12px;
                resize: none;
                color: #657786;
                outline: none;
              }
              .comment-textarea {
                position: relative;
                width: 100%;
                textarea {
                  font-size: 13px;
                  line-height: 18px;
                  width: 100%;
                  min-height: 90px;
                  overflow: hidden;
                  transition: all .15s ease-in-out;
                }
              }
              .comment-submit {
                font-size: 14px;
                text-align: right;
                .middle {
                  display: inline-block;
                  vertical-align: middle;
                }
              }
              .commentbutton {
                float: left;
                color: rgba(250, 42, 42,.7);
                padding: 8px 20px 8px 20px;
                border: 1px solid rgba(250, 42, 42,.7);
                border-radius: 40px;
                margin-top: 4px;
                background-color: #fff;
                outline: none;
              }
            }
            .layui-elem-field {
              padding: 0;
              font-size: 20px;
              font-weight: 300;
              margin: 10px 0 20px;
              border-width: 1px 0 0;
              border-style: solid;
              legend {
                margin-left: 20px;
                padding: 0 10px;
                font-size: 20px;
                font-weight: 300;
              }
            }
            .jieda {
              margin-bottom: 30px;
              li {
                position: relative;
                padding: 20px 0 10px;
                border-bottom: 1px dotted #DFDFDF;
              }
              .detail-about {
                position: relative;
                line-height: 20px;
                padding: 15px 15px 15px 75px;
                font-size: 13px;
                background-color: #f8f8f8;
                color: #999;
                .detail-hits {
                  position: relative;
                  top: 5px;
                  line-height: 20px;
                  left: 0;
                  span {
                    height: 20px;
                    line-height: 20px;
                  }
                }
              }
              .detail-about-reply {
                padding: 0 0 0 55px;
                background: none;
                .fly-avatar {
                  position: absolute;
                  left: 0;
                  top: 0;
                  img {
                    display: block;
                    width: 45px;
                    height: 45px;
                    margin: 0;
                    border-radius: 50%;
                  }
                }
                .fly-detail-user {
                  white-space: nowrap;
                  overflow: hidden;
                  a {
                    padding-right: 10px;
                    font-size: 14px;
                    cite {
                      font-style: normal;
                      color: #FF694E;
                    }
                  }
                }
              }
              .detail-body {
                margin: 20px 0 0;
                min-height: 306px;
                line-height: 26px;
                font-size: 16px;
                color: #333;
                word-wrap: break-word;
                p {
                  margin-bottom: 15px;
                }
              }
              .detail-body, .detail-body * {
                max-width: 100%;
              }
              .jieda-body {
                margin: 25px 0 20px;
                min-height: 0;
                line-height: 24px;
                font-size: 14px;
              }
              .jieda-reply {
                position: relative;
                span {
                  padding-right: 20px;
                  color: #999;
                  cursor: pointer;
                  i {
                    position: relative;
                    top: 1px;
                    margin-right: 5px;
                    font-size: 16px;
                  }
                }
              }
            }
            .layui-btn {
              display: inline-block;
              width: 100%;
              height: 38px;
              line-height: 38px;
              padding: 0 18px;
              border: 1px solid #C9C9C9;
              background-color: #fff;
              color: #555;
              white-space: nowrap;
              text-align: center;
              font-size: 14px;
              border-radius: 2px;
              cursor: pointer;
              outline: 0;
              transition: all .3s;
              box-sizing: border-box;
            }
          }
        }
        .Alaeym-main-right {
          box-sizing: border-box;
          font-size: 14px;
          margin: 0px;
          padding: 0px;
          vertical-align: top;
          width: 24%;
          padding-left: 25px;
          display: inline-block;
          text-align: left;
          .widget {
            font-size: 14px;
            margin-bottom: 1em;
            color: #444;
            .widget-title {
              font-size: 14px;
              color: #5b5f6d;
              font-weight: bold;
              line-height: 3;
              margin-top: 15px;
            }
            .hot-views {
              .item {
                margin-bottom: .5em;
                overflow: hidden;
                position: relative;
                & > div {
                  max-width: 173px;
                  padding-left: 60px;
                  float: left;
                  position: absolute;
                }
                .title {
                  font-size: 14px;
                  transition: all .2s ease-in-out;
                }
                a {
                  color: #e67864;
                }
                img {
                  max-width: 100px;
                  border-radius: 3px;
                  float: left;
                  width: 50px;
                  height: 50px;
                }
              }
            }
          }
        }
      }
    }
    .footer {
      pointer-events: all;
      max-width: 28.8rem;
      padding-top: 4rem;
      padding-bottom: 4rem;
      margin: 0 auto;
      padding-left: 15px;
      padding-right: 15px;
      border: none !important;
      background: transparent !important;
      .footer-content {
        width: 100%;
        height: auto;
        text-align: center;
        .footerIcon {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          ul li {
            padding: 5px 0;
            padding-left: 20px;
            padding-right: 20px;
            float: left;
            span {
              font-size: 1.3rem;
            }
          }
        }
        .footer-content p {
          margin-top: 15px;
          line-height: 1.5;
        }
      }
    }
  }
</style>

