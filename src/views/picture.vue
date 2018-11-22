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
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/test1.jpg" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 lkh isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/test1.jpg" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 jh isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/test2.jpg" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 jh isotope-item">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>测试标题</h4>
              </div>
              <img src="../../static/images/test2.jpg" class="img-responsive"> </a> </div>
          </div>
        </div>
      </div>
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
    init () {
      $('.portfolio-items').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        masonry: {
          columnWidth: 0
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
              transform: translateY(0%);
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
</style>
