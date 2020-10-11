<template>
    <div :class="classes" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'po-col'
export default {
    name: 'PoCol',
    props: {
        span: [Number, String],
        offset: [Number, String]
    },
    data() {
        return {
            gutter: 0
        }
    },
    computed: {
        // Element Ui
        // gutter() {
        //     let parent = this.$parent;
        //     while (parent && parent.$options.componentName !== 'PoRow') {
        //         parent = parent.$parent;
        //     }
        //     return parent ? parent.gutter : 0
        // },
        classes () {
            const ret = []
            ret.push(`${prefixCls}`)
            if(this.span) {
                ret.push(`${prefixCls}-${this.span}`)
            }
            if(this.offset) {
                ret.push(`${prefixCls}-offset-${this.offset}`)
            }
            return ret;
        },
        colStyle() {
            const ret = {};
            if(this.gutter) {
                ret = {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
            return ret;
        }
    }
}
</script>