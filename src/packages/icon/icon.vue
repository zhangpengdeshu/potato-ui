<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
    const prefixCls = 'po-icon'
    export default {
        name: 'PoIcon',
        props: {
            name: {
                type: String,
                default: '',
            },
            size: [Number, String],
            color: String,
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls-this.name}`]: this.name !== '',
                    }
                ]
            },
            styles() {
                const ret = {};
                if(this.size) {
                    style['font-size'] = `${this.size}px`;
                }
                if (this.color) {
                    style['color'] = this.color;
                }
                return ret;
            }
        },
        methods: {
            handleClick(event) {
                this.$emit('click', event);
            }
        }
    }
</script>