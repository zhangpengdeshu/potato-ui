<template>
  <ul>
    <li>
      <span v-html="data.title" @click="handleExpand">
       {{ data.title }}
      </span>
      <gulu-tree-node
        v-if="data.expand"
        v-for="(item, i) in children" 
        :key="i" 
        :children-key="childrenKey"
        :data="item"></gulu-tree-node>
    </li>
  </ul>
</template>
<script>
const prefixCls = 'gulu-tree';
export default {
  name: 'GuluTreeNode',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    showCheckBox: {
      type: Boolean,
      default: false,
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
  },
  computed: {
    children() {
      return this.data[this.childrenKey]
    }
  },
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  methods: {
    handleExpand() {
      let item = this.data;
      if(item[this.childrenKey] && item[this.childrenKey].length) {
        this.$set(this.data, 'expand', !this.data.expand);
      }
    },
    handleSelect() {

    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
  }
</style>