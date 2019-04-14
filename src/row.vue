<template>
    <div class="row" :style="style">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .row {
        display: flex;
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
        }
    }
}
</script>

