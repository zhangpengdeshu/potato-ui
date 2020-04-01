/*const data = [
  {
      title: 'parent 1',
      expand: true,
      children: [
          {
              title: 'parent 1-1',
              expand: true,
              children: [
                  {
                      title: 'leaf 1-1-1'
                  },
                  {
                      title: 'leaf 1-1-2'
                  }
              ]
          },
          {
              title: 'parent 1-2',
              expand: true,
              children: [
                  {
                      title: 'leaf 1-2-1'
                  },
                  {
                      title: 'leaf 1-2-1'
                  }
              ]
          }
      ]
  }
];

function compileFlatState() {
  let stateTree = data.slice(0);
  let keyCount = 0;
  let childrenKey = 'children';
  const flatTree = [];
  function flattenChildren(node, parent) {
    node.nodeKey = keyCount ++;
    flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey };
    if(typeof parent != 'undefined') {
      flatTree[node.nodeKey].parent = parent.nodeKey;
      flatTree[parent.nodeKey][childrenKey].push(node.nodeKey);
    }

    if(node[childrenKey]) {
      flatTree[node.nodeKey][childrenKey] = [];
      node[childrenKey].forEach(child => flattenChildren(child, node));
    }
  }

  stateTree.forEach(rootNode => {
    flattenChildren(rootNode)
  })

  return flatTree;
}

const flatArr = compileFlatState();
console.log(flatArr);*/
import Tree from './tree.vue';

export default Tree;
