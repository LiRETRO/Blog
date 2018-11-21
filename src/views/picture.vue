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
                <h4>Project Title</h4>
              </div>
              <img src="../../static/images/head.png" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 xdyc isotope-item" style="transform: translate3d(300px, 0, 0)">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>Project Title</h4>
              </div>
              <img src="../../static/images/head.png" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 lkh isotope-item" style="transform: translate3d(600px, 0, 0)">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>Project Title</h4>
              </div>
              <img src="../../static/images/head.png" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 lkh isotope-item" style="transform: translate3d(900px, 0, 0)">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>Project Title</h4>
              </div>
              <img src="../../static/images/head.png" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 jh isotope-item" style="transform: translate3d(0, 220px, 0)">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>Project Title</h4>
              </div>
              <img src="../../static/images/head.png" class="img-responsive"> </a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 jh isotope-item" style="transform: translate3d(300px, 220px, 0)">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="../../static/images/head.png" title="测试标题">
              <div class="hover-text">
                <h4>Project Title</h4>
              </div>
              <img src="../../static/images/head.png" class="img-responsive"> </a> </div>
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
      $('.portfolio-items').isotope()
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
    backface-visibility: hidden;
    transition-property: height, width;
    transition-duration: 0.8s;
    position: relative; overflow: hidden; height: 675px; width: 100%;
    .isotope-item {
      transition-duration: 0.8s;
      backface-visibility: hidden;
      transition-property: transform, opacity;
      margin-right: -1px;
      z-index: 2;
      position: absolute; left: 0px; top: 0px;
      .portfolio-item {
        margin: 15px 0;
        transition: all 0.5s ease-out;
        &:hover {
          transform: scale(1.1);
        }
        .hover-bg {
          height: 195px;
          overflow: hidden;
          position: relative;
          .hover-text {
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
              transition: all 0.3s;
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
