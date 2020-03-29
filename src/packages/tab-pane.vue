<template>
    <div class="gulu-tab-pane" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluTabPane',
    props: {
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            active: true
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

