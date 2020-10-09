<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'po-button-group'
export default {
  name: 'ButtonGroup',
  props: {

  },
  computed: {
    classes() {
      return [
        `${prefixCls}`
      ]
    }
  }
}
</script>>
