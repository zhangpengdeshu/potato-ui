<template>
  <div :class="prefixCls">
    <gulu-tree-node 
      v-for="(item, i) in stateTree" 
      :key="i" 
      :data="item"
      :children-key="childrenKey"></gulu-tree-node>
  </div>
</template>
<script>
import GuluTreeNode from './tree-node.vue';
import Emitter from '../../mixins/emitter';

const prefixCls = 'gulu-tree'

export default {
  name: 'Tree',
  mixins: [Emitter],
  components: {
    GuluTreeNode
  },
  provide() {
    return {
      TreeInstance: this
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    render: {
      type: Function
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      stateTree: this.data,
      flatState: [],
    }
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.stateTree = this.data;
        this.flatState = this.compileFlatState();
        this.rebuildTree();
      }
    }
  },
  methods: {
    compileFlatState() {
      let keyCounter = 0;
      let childrenKey = this.childrenKey;
      const flatTree = [];
      function flattenChildren(node, parent) {
        node.nodeKey = keyCounter ++;
        flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey };
        if(typeof parent !== 'undefined') {
          flatTree[node.nodeKey].parent = parent.nodeKey;
          flatTree[parent.nodeKey][childrenKey].push(node.nodeKey);
        }
        if (node[childrenKey]) {
          flatTree[node.nodeKey][childrenKey] = [];
          node[childrenKey].forEach(child => flattenChildren(child, node));
        }
      }

      this.stateTree.forEach(rootNode => {
        flattenChildren(rootNode)
      });
      return flatTree;
    },


  }
}
</script>