<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
       <g-icon :name="icon" v-if="icon && !loading" class="icon"/>
       <g-icon class="loading icon" name="loading"  v-if="loading"/>
       <div class="content">
           <slot/>
       </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        name: "button",
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validate (value) {
                    return value === 'left' || value === 'right'
                    // return value !== 'left' && value !== 'right' ? false : true
                }
            }
        },
        components: {
            'g-icon': Icon
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        outline: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover)
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        >.icon {
            order: 1;
            margin-right: .3em;
        }
        >.content {
            order: 2
        }
        >.loading {
            animation: spin 2s infinite linear;
        }
        &.icon-right {
            > .content {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
        }
    }
</style>