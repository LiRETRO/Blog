<template>
  <article class="login_bg">
    <div class="middle_frame">
      <form method="post">
        <div class="user-container">
          <h4 class="Title pb-24">
            <span>登陆</span>
          </h4>
          <div class="mt-8 pb-8">
            <div class="form-group TextField TextField--medium mb-0">
              <div class="row">
                <div class="col-sm-12">
                  <label for="ucp_login_email_field">
                    <span>用户名或邮箱</span>
                  </label>
                  <input  class="TextField__element form-control"
                    type="text"
                    name="username"
                    id="ucp_login_email_field"
                    value
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 pb-8">
            <div class="form-group TextField TextField--medium mb-0">
              <div class="row">
                <div class="col-sm-12">
                  <label for="ucp_login_password_field">
                    <span>密码</span>
                  </label>
                  <div class="mb-8 pull-right">
                    <div
                      class="TextField__password-visibility-indicator"
                      tabindex="-1"
                      role="button"
                    >
                      <span class="isvg loaded SVG-wrapper SVG-loaded">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          class="SVG SVG--inline c-bw-6 mr-4"
                        >
                          <path
                            d="M8 14C3.27 14 .254 8.713.128 8.489a.998.998 0 0 1-.002-.975C.251 7.289 3.246 2 8 2c4.731 0 7.746 5.287 7.872 5.512a1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14zM8 4C5.146 4 2.958 6.835 2.181 7.999 2.962 9.162 5.16 12 8.001 12c2.836 0 5.033-2.834 5.817-4C13.036 6.835 10.84 4 8 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            fill="#151922"
                          ></path>
                          <!-- <path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424zM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0zM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8z" fill="#151922"></path> -->
                        </svg>
                      </span>
                    </div>
                  </div>
                  <input
                    class="TextField__element form-control"
                    type="password"
                    name="password"
                    id="ucp_login_password_field"
                    value
                  >
                </div>
              </div>
            </div>
          </div>
          <button class="Button Button--blue Button--block mb-8 mt-16" type="submit">
            <span>登陆</span>
          </button>
          <router-link to="/" class="Link Link--alt">
            <p class="Text small fwm mt-24 mb-12">
              <span>忘记密码?</span>
            </p>
          </router-link>
          <span class="Text small c-bw-6 fwm mr-4">
            <span>还没有帐号吗?</span>
          </span>
          <router-link class="Link Link--alt Link--alt" to="/register">
            <span class="Text small fwm">
              <span>赶快去注册</span>
            </span>
          </router-link>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  }
};
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
    content: "";
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
    width: 25%;
    .user-container {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      text-align: left;
      .Title {
        font-size: 32px;
        line-height: 44px;
        font-weight: 800;
        letter-spacing: -.25px;
        color: #383c43;
      }
      label {
        display: inline-block;
        max-width: 100%;
        color: #73757a;
        font-weight: 600;
        font-size: 12px;
        margin-bottom: 8px;
      }
      .TextField__element {
        border-color: #b9babd;
        color: #73757a;
        border-radius: 3px;
        -webkit-box-shadow: none;
        box-shadow: none;
        height: 46px;
        padding: 9px 15px;
      }
      .TextField__password-visibility-indicator {
        color: #b9babd;
        cursor: pointer;
        text-decoration: underline;
        outline: none;
        .SVG-wrapper .SVG--inline {
        display: inline-block;
        vertical-align: middle;
          * {
            transition: fill .25s ease-out;
          }
        }
      }
      .Button {
        outline: none;
        touch-action: manipulation;
        cursor: pointer;
        user-select: none;
        transition: color .25s ease-out,background-color .25s ease-out,border-color .25s ease-out;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        padding: 7px 18px;
        font-size: 16px;
        line-height: 28px;
        font-weight: 600;
        color: #fff;
        border: 2px solid transparent;
        border-radius: 3px;
      }
      .Button--block {
        width: 100%;
      }
      .Button--blue {
        background-color: #4687ff;
        border-color: #4687ff;
        &:hover {
          background-color: #90b7ff;
          border-color: #90b7ff;
          color: #fff;
        }
      }
      .Link {
        cursor: pointer;
        transition: all .25s ease-out;
        text-decoration: none;
        background-color: transparent;
        color: #4687ff;
      }
    }
  }
  .text-center {
    text-align: center;
  }
}
</style>

