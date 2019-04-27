<template>
    <div class="gulu-popover" @click="handleClick">
        <div class="content-wrapper">
            <slot name="content" v-if="visible"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluPopover',
    data () {
        return {
            visible: false
        }
    },
    methods: {
        handleClick () {
            this.visible = !this.visible;
            console.log('111')
        }
    }
}
</script>
<style lang="scss" scoped>
    .gulu-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid #dfdfdf;
            box-shadow: 0 0 3px rgba(0, 0, 0, .3);
        }
    }
</style>

