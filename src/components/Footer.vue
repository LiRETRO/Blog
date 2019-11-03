<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <ul class="list-inline text-center">
              <li>
                  <a target="_blank" :href="`https://www.twitter.com/${site.twitterName}`">
                      <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                  </a>
              </li>
              <li>
                <a target="_blank" :href="`https://www.zhihu.com/people/${site.zhihuName}`">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-stack-1x fa-inverse">知</i>
                  </span>
                </a>
              </li>
              <!-- <li>
                  <a target="_blank" href="http://weibo.com/{{ site.weibo_username }}">
                      <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-weibo fa-stack-1x fa-inverse"></i>
                      </span>
                  </a>
              </li> -->
              <li>
                  <a target="_blank" :href="`https://www.facebook.com/${ site.facebookName }`">
                      <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                  </a>
              </li>
              <li>
                  <a target="_blank" :href="`https://github.com/${ site.githubName }`">
                      <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                  </a>
              </li>
          </ul>
          <p class="copyright text-muted">
            Copyright &copy; {{ site.name }} {{ site.date }} All Rights Reserved.
            <br>
            Theme by <a target="_blank" href="https://github.com/huxpro">Hux</a> |
            <iframe
                style="margin-left: 2px; margin-bottom:-5px;"
                frameborder="0" scrolling="0" width="91px" height="20px"
                src="https://ghbtns.com/github-btn.html?user=huxpro&repo=huxpro.github.io&type=star&count=true" >
            </iframe>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'site'
    ])
  }
}
</script>