<template>
  <div class="cover hide" ref="cover">
    <i></i>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    loadingVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    loadingVisible (newVal, oldVal) {
      let container = this.$refs['cover'];
      container.style.height = `${document.body.scrollHeight}px`;
      container.className = `cover ${this.loadingVisible ? '' : 'hide'}`;
    }
  }
}
</script>


<style lang="less">
div.cover {
  position: absolute;
  width: 100%;
  // height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .4);
  &.hide {
    display: none;
  }
  i {
    height: 2em;
    width: 2em;
    border-radius: 100%;
    background: #fff;
    display: block;
    margin: 10em auto;
    position: absolute;
    left: 50%;
    animation: spin 2s ease infinite;
  }
  i:before, i:after {
    content: '';
    display: block;
    position: absolute;
    height: inherit;
    width: inherit;
    background: inherit;
    border-radius: inherit;
    animation: spin 2s ease infinite;
  }
  i:before {
    left: -2.3em;
  }
  i:after {
    left: 2.3em;
  }

  @keyframes spin {
    0% {
      top: 0;
      transform: rotate(0deg);
    }
    50% {
      top: -4em;
      transform: rotate(-180deg);
    }
    100% {
      top: 0;
      transform: rotate(-360deg);
    }
  }
}
</style>

