<template>
    <div class="col" :class="colClass" :style="style">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluCol',
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        }
    },
    data () {
        return {
            gutter: 0
        }
    },
    computed:{
        colClass () {
            const { span, offset } = this
            return [
                span && `col-${span}`, 
                offset && `offset-${offset}`
            ]
        },
        style () {
            const ret = {}
            if (this.gutter) {
                ret.paddingLeft = this.gutter / 2 + 'px'
                ret.paddingRight = ret.paddingLeft
            }
            return ret;
        }
    }
}
</script>
<style lang="scss" scoped>
    .col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/ 24) * 100%;
            }
        }

    }
</style>
