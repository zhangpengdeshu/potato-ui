<template>
    <div :class="classes" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
// gutter
const prefixCls = 'po-row'
export default {
    name: 'PoRow',
    props: {
        gutter: {
            type: Number,
            default: 0,
        }
    },
    computed: {
        classes() {
            return [
                prefixCls,
            ]
        },
        rowStyle() {
            const ret = {};
            if (this.gutter !== 0) {
                ret = {
                    marginLeft: -this.gutter / 2 + 'px',
                    marginRight: -this.gutter / 2 + 'px',
                }
            }
            return ret;
        }
    },
    mounted () {
        this.$children.forEach(child => {
            child.gutter = this.gutter;
        })
    }
}
</script>