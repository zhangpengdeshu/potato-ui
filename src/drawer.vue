<template>
  <transition name="drawer-slide">
    <div
      class="drawer-wrapper"
      :class="direction"
      :style="style"
      v-show="isShow">
      <div class="drawer-container">
        <!-- 头部标题 -->
        <!-- @TODO 头部可能不是居中显示，可能靠左边，也可能考右边，还可能居中 -->
        <header
          class="drawer-header"
          @click="handleClose">
          <slot name="title">
            <p>{{ title }}</p>
          </slot>
        </header>
        <!-- 内容 -->
        <section class="drawer-body">
          <slot></slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Drawer',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: 'calc(100% - 110px)'
    },
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    direction: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['top', 'bottom', 'left', 'right'].indexOf(val) !== -1;
      }
    }
  },
  data() {
    return {
      isShow: this.visible,
    };
  },
  computed: {
    style() {
      const ret = {
        width: this.width,
        height: this.height,
      };
      return ret;
    }
  },
  watch: {
    // 解决子类修改父类数据报错
    visible(val) {
      this.isShow = val;
    }
  },
  methods: {
    /**
     * 关闭
     * @returns close
     */
    handleClose() {
      this.$emit('close');
    }
  }
};
</script>
<style lang="scss" scoped>
  .drawer-wrapper {
    position: fixed;
    background-color: #fff;
    z-index: 100;
    overflow: hidden;
    &.top {
      top: 0;
    }
    &.bottom {
      bottom: 0;
    }
    &.left {
      left: 0;
      top: 0;
    }
    &.right {
      right: 0;
      top: 0;
    }
    .drawer-container {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
    }
    .drawer-header {
     height: 50px;
     display: flex;
     justify-content: center;
     align-content: center;
     align-items: center;
     cursor: pointer;
   }
  }
  .drawer-slide-enter-active {
    animation: slideBottomIn .5s ease-in-out;
  }
  .drawer-slide-leave-active {
    animation: slideBottomIn .5s reverse ease-out;
  }
  @keyframes slideBottomIn {
    from {
        transform: translate3d(0, 100%, 0);
        visibility: visible;
      }

      to {
        transform: translate3d(0, 0, 0);
      }
  }
</style>
