<template>
  <component :is="tagName" :class="classes" @click="handleClick">
    <Icon name="loading" v-if="loading"></Icon>
    <Icon :name="icon" v-if="icon && !loading"></Icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </component>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'PoButton',
  components: {
    Icon
  },
  props: {
    // 类型
    type: {
      type: String,
      validator(value) {
        return ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'].indexof(value) > -1
      },
      default: 'default',
    },
    // 大小
    size: {
      type: String,
      validator(value) {
        return ['default', 'small', 'large'].indexOf(value) > -1
      },
      default: 'default'
    },
    // 形状
    shape: String,
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // 是否禁止选中
    disabled: Boolean,
    // 是否为loading状态
    loading: Boolean

  },
  computed: {
    tagName() {
      return 'button'
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
}
</script>