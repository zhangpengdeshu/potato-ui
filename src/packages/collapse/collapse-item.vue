<template>
    <div class="grap-collapse-item">
        <div class="grap-collapse-item__header" @click="handleHeaderClick">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="grap-collapse-item__wrap" v-show="isActive">
            <div class="grap-collapse-item__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import Emitter from '../mixins/emitter'
    export default {
        name: "GrapCollapseItem",
        componentName: 'GrapCollapseItem',
        mixins: [Emitter],
        inject: ['collapse'],
        props: {
            title: String,
            name: {
                type: [String, Number],
                default: Math.floor(Math.random() * 10000)
            }
        },
        computed:{
            isActive () {
                return this.collapse.activeNames.indexOf(this.name) > -1;
            }
        },
        methods: {
            handleHeaderClick() {
                this.dispatch('GrapCollapse', 'item-click', this);
            }
        }
    }
</script>

<style scoped lang="scss">
    .grap-collapse-item {
        .grap-collapse-item__header {
            display: flex;
            align-items: center;
            height: 48px;
            line-height: 48px;
            background-color: #fff;
            color: #303133;
            cursor: pointer;
            border-bottom: 1px solid #ebeef5;
            font-size: 13px;
            font-weight: 500;
            transition: border-bottom-color .3s;
            outline: none;
        }
    }
</style>
