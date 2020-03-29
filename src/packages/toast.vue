<template>
    <div class="toast">
        <div v-html="$slots.default[0]"></div>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{ closeButton.text }}</span>
    </div>
</template>
<script>
    export default {
        name: 'GrapToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object,
                default () {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            }
        },
        mounted () {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoDelay * 1000)
            }
        },
        methods: {
            close () {
                this.$el.remove();
                this.$destroy();
            },
            onClickClose () {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback();
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0, .74);
    $toast-radius: 4px;
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        font-size: $font-size;
        height: $toast-height;
        border-radius: $toast-radius;
        background-color: $toast-bg;
        display: flex;
        align-items: center;
        color: #fff;
        padding: 0 16px 0 16px;
    }
    .close {
        padding-left: 16px;
    }
    .line {
        height: 100%;
        border-left: 1px solid #fff;
        margin-left: 16px;
    }
</style>
