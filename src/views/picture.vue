<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="picture">
    <div class="categories">
      <ul class="cat">
        <li>
          <ol class="type">
            <li><a href="#" data-filter="*" class="active">All</a></li>
            <li><a href="#" data-filter=".xdyc" class="">XDYC</a></li>
            <li><a href="#" data-filter=".lkh" class="">LKH</a></li>
            <li><a href="#" data-filter=".jh">BookManager</a></li>
          </ol>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="portfolio-items isotope">
        <div class="col-sm-6 col-md-3 col-lg-3 xdyc isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/head.png" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 lkh isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/test1.jpg" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/test1.jpg" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 xdyc isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/head.png" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 jh isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/test2.jpg" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/test2.jpg" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 lkh isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/test1.jpg" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/test1.jpg" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 jh isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/test2.jpg" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/test2.jpg" class="img-responsive"> </a> </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lightbox-overlay">
      <div class="lightbox-warp">
        <div class="lightbox-content">
          <img class="content-img"/>
        </div>
        <div class="lightbox-title-wrap">
          <span class="lightbox-title"></span>
        </div>
      </div>
      <a class="lightbox-nav nav-prev" style="left: 0;">Previous</a>
      <a class="lightbox-nav nav-next" style="right: 0;">Next</a>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      lightBoxImgArr: [],
      lightBoxVisibleElementArr: [],
      lightBoxCurIndex: 0
    }
  },
  methods: {
    init () {
      var _this = this
      $('.portfolio-items').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        masonry: {
          columnWidth: 10
        }
      })
      // Button Click Event
      $("ol.type a").on('click', function(event) {
        event.preventDefault()
        if ($(this).hasClass('active')) {
          return false;
        }
        $("ol.type a").removeClass('active')
        $(this).addClass('active')
        let filterType = $(this).attr('data-filter')
        $('.portfolio-items').isotope({
          filter: filterType
        })
        return false;
      })

      // show lightbox
      $('.portfolio-items a').on("click", function(event) {
        event.preventDefault()
        var $this = $(this)
        // 将所有存在于页面上（not invisiable）全部对象的形式添加到数组里面
        $('.portfolio-items .isotope-item:visible').each(function() {
          let $source = $(this).find('a')
          let title = $source.attr('title')
          let path = $source.attr('href')
          _this.lightBoxImgArr.push({ title, path })
          _this.lightBoxVisibleElementArr.push($source[0])
        })
        _this.lightBoxCurIndex = _this.lightBoxVisibleElementArr.findIndex(item => this === item)
        $(".lightbox-title").text(_this.lightBoxImgArr[_this.lightBoxCurIndex].title)
        $(".content-img").attr('src', _this.lightBoxImgArr[_this.lightBoxCurIndex].path)
        $('div.lightbox-overlay').addClass('lightbox-open')
      })
      // hide lightbox
      $('div.lightbox-overlay').on('click', function(event) {
        $(this).removeClass('lightbox-open')
        _this.lightBoxImgArr = []
        _this.lightBoxVisibleElementArr = []
        _this.lightBoxCurIndex = 0
      })
      // prev and next button
      $("div.lightbox-overlay a.lightbox-nav").on('click', function(event) {
        event.preventDefault()
        event.stopPropagation()
        let curIndex = _this.lightBoxCurIndex
        let length = _this.lightBoxImgArr.length
        if ($(this).hasClass('nav-prev')) {
          if ((curIndex - 1) >= 0) {
            _this.lightBoxCurIndex--
            $(".lightbox-title").text(_this.lightBoxImgArr[_this.lightBoxCurIndex].title)
            $(".content-img").attr('src', _this.lightBoxImgArr[_this.lightBoxCurIndex].path)
          }
        } else {
           if ((curIndex + 1) < length) {
            _this.lightBoxCurIndex++
            $(".lightbox-title").text(_this.lightBoxImgArr[_this.lightBoxCurIndex].title)
            $(".content-img").attr('src', _this.lightBoxImgArr[_this.lightBoxCurIndex].path)
          }
        }
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style lang="less">
  // selector
  .categories {
    padding-bottom: 30px;
    text-align: center;
    ul, ol {
      list-style: none !important;
    }
    .type {
      margin-left: -100px;
      li {
        display: inline-block;
        margin-left: 20px;
        a {
          text-decoration: none;
          border: 1px solid #777;
          color: #555;
          padding: 8px 20px;
          &.active, &:hover {
            background: #222;
            border: 1px solid #222;
            color: #fff;
          }
        }
      }
    }
  }
  // fillter
  .isotope {
    position: relative; width: 100%;
    .isotope-item {
      .portfolio-item {
        transition: transform .5s ease;
        margin: 15px 0;
        &:hover {
          transform: scale(1.1);
        }
        .hover-bg {
          height: 195px;
          overflow: hidden;
          position: relative;
          .hover-text {
            transition: opacity .5s ease;
            position: absolute;
            text-align: center;
            margin: 0 auto;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.66);
            padding: 30% 0 0 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: all 0.5s;
            & > h4 {
              text-transform: uppercase;
              opacity: 0;
              color: #fff;
              transform: translateY(-100%);
              transition: opacity .5s ease;
            }
          }
          &:hover {
            .hover-text {
              opacity: 1;
              & > h4 {
                opacity: 1;
              }
            }
          }
          .img-responsive{
            display: block;
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  // lightBox
  .lightbox-overlay {
    background: rgba(0,0,0,0.6);
    transition: all .2s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99998;
    width: 100%;
    height: 100%;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    .lightbox-warp {
      transition: all .3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
      position: absolute;
      top: 10%;
      bottom: 10%;
      left: 10%;
      right: 10%;
      transform: translateY(-10%);
    }

    &.lightbox-open {
      visibility: visible;
      opacity: 1;
      .lightbox-warp {
        transform: translateY(0);
      }
    }
    .lightbox-content {
      width: 100%;
      height: 100%;
      .content-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
        background: #fff;
        box-shadow: 0px 1px 1px rgba(0,0,0,0.4);
      }
    }
    .lightbox-title-wrap {
      position: absolute;
      bottom: -7%;
      left: 0;
      width: 100%;
      z-index: 99999;
      text-align: center;
      .lightbox-title {
        font: 14px/20px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        background: #000;
        color: #fff;
        padding: 7px 15px;
        border-radius: 30px;
      }
    }
    .lightbox-nav {
      position: absolute;
      display: block;
      top: 10%;
      width: 8%;
      height: 80%;
      text-indent: -9999px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      opacity: 0.5;
      &.nav-prev {
        background-image: url('../../static/images/prev.png');
        border-radius: 3px 0 0 3px;
      }
      &.nav-next {
        background-image: url('../../static/images/next.png');
        border-radius: 3px 0 0 3px;
      }
      &:hover {
        cursor: pointer;
        opacity: 1;
        background-color: transparent;
      }
    }
  }
</style>
