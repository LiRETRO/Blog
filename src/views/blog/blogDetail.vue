<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="detail">
    <div class="detail-container">
      <h2 class="mb-5">关于RabbitMQ在Liunx系统下的配置</h2>
      <p class="mb-0">home.vue 中router-link修改为:to="{ name:'game1', params: {num: 123} }" params中是要传递的参数，这样传递的参数就不会显示在url中</p>
      <p class="mb-0">2、不显示在url中，如果在PC端将传递的值显示在url中，这样无形中就存在安全隐患，如果客户不小心修改了url那样就会出错，移动端就无所谓了，如何才能不显示在url中，同样很简单，但是需要给映射的路径起一个别名，通过name来取别名
同样只需将上面的main.js中的定义路由改为如下样子，在子路由中通过name来给路径其一个game1的别名。</p>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'blogDetail'
    ]),
    blogId () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions([
      'getBlogDetail'
    ]),
    init () {
      let _this = this
      this.getBlogDetail(this.blogId).then(function (result) {
        console.log(_this.blogDetail)
      })
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="less">
  #detail {
    .detail-container {
      p {
        text-align: left; 
        text-indent: 2rem;
        line-height: 2;
        word-break: normal;
        font-size: 1rem;
        font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
      }
    }
  }
</style>

