<template>
  <article class="login_bg">
    <div class="middle_frame">
      <div class="card">
        <div class="card-main">
          <div class="card-header">
            <div class="card-inner">
              <h1 class="card-heading">登录到用户中心</h1>
            </div>
          </div>
          <div class="card-inner">
            <form action="javascript:void(0);" method="POST">
              <p class="text-center">
                <span class="avatar avatar-inline avatar-lg">
                  <img alt="Login" src="/theme/material/images/users/avatar-001.jpg">
                </span>
              </p>

              <div class="form-group form-group-label">
                <div class="row">
                  <div class="col-md-10 col-md-push-1">
                    <label class="floating-label" for="email">邮箱</label>
                    <input class="form-control" id="email" type="text" name="Email">
                  </div>
                </div>
              </div>
              <div class="form-group form-group-label">
                <div class="row">
                  <div class="col-md-10 col-md-push-1">
                    <label class="floating-label" for="passwd">密码</label>
                    <input class="form-control" id="passwd" type="password" name="Password">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-10 col-md-push-1">
                    <button id="login" type="submit" class="btn btn-block btn-brand waves-attach waves-light waves-effect">登录</button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-10 col-md-push-1">
                    <div class="checkbox checkbox-adv">
                      <label for="remember_me">
                        <input class="access-hide" value="week" id="remember_me" name="remember_me" type="checkbox" checked="">记住我
                        <span class="checkbox-circle"></span><span class="checkbox-circle-check"></span><span class="checkbox-circle-icon icon">done</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
  .login_bg {
    background-size: 100% 100%;
    background-image: url(/static/images/login_bg.jpg);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: inherit;
      filter: blur(3px);
      z-index: 2;
    }
    .middle_frame {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      .card {
        background-color: #fff;
        box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
        display: flex;
        margin-top: 24px;
        margin-bottom: 24px;
        border-radius: 2px;
        .card-main {
          flex: 1;
          min-width: 0;
          .card-header {
            align-items: center;
            border-bottom: 1px solid rgba(0,0,0,.12);
            display: flex;
            min-height: 56px;
            .card-inner {
              flex: 1;
              margin-top: 12px;
              margin-bottom: 12px;
            }
            .card-heading {
              display: block;
              font-size: 20px;
              line-height: 28px;
              margin-top: 0;
              margin-bottom: 0;
            }
          }
          .card-inner {
            margin: 24px 16px;
          }
        }
      }
    }
  }
</style>

