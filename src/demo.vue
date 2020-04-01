<template>
  <div>
    <tree :data="data1"></tree>
  </div>
</template>

<script>
import Tree from './packages/tree';
export default {
  name: 'Demo',
  components: {
    Tree,
  },
  data() {
    return {
      data1: [
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
        },
        {
            title: 'parent 2',
            expand: true,
            children: [
                {
                    title: 'parent 2-1',
                    expand: true,
                    children: [
                        {
                            title: 'leaf 2-1-1'
                        },
                        {
                            title: 'leaf 2-1-2'
                        }
                    ]
                },
                {
                    title: 'parent 2-2',
                    expand: false,
                    children: [
                        {
                            title: 'leaf 2-2-1'
                        },
                        {
                            title: 'leaf 2-2-1'
                        }
                    ]
                }
            ]
        }
      ]
    }
  },
}
</script>