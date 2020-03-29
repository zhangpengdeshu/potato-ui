<template>
    <div class="row" :style="style" :class="rowClass">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .row {
        display: flex;
        &.align-left {
            justify-content: flex-start;
        }
        &.align-right {
            justify-content: flex-end;
        }
        &.align-center {
            justify-content: center;
        }
    }
</style>
<script>
export default {
    name: 'row',
    props: {
        gutter: {
            type: [Number, String]
        },
        tag: {
            type: String,
            default: 'div'
        },
        align: {
            type: String,
            validator (value) {
                return ['left', 'right', 'center'].includes(value)
            }
        }
    },
    mounted () {
        this.$children.forEach(vm => {
            vm.gutter = this.gutter
        })
    },
    computed: {
        style () {
            const ret = {}
            if (this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`
                ret.marginRight = ret.marginLeft
            }
            return ret
        },
        rowClass () {
            let { align } = this
            return [align && `align-${align}`]
        }
    }
}
</script>

