<template>
    <div class="gulu-toast" v-show="visible" :class="customerClass" :style="styleToast">
        <g-icon :name="iconClass" v-if="iconClass"></g-icon>
        <span class="gulu-toast-text" :style="styleToastText">{{message}}</span>
    </div>    
</template>
<script>
import Icon from './icon.vue'
export default {
    name: 'GuluToast',
    components: {
        'g-icon': Icon
    },
    props: {
        message: String,
        iconClass: {
            type: String,
            default: ''
        },
        className: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'middle'
        }
    },
    data () {
        return {
            visible: false
        }
    },
    computed: {
        customerClass () {
            let ret = []
            switch (this.position) {
                case 'top':
                    ret.push('is-placetop')
                    break;
                case 'bottom':
                    ret.push('is-placebottom')
                    break;
                default:
                    ret.push('is-placemiddle')        
            }
            ret.push(this.className)
            return ret.join(' ')
        },
        styleToast () {
            const ret = {}
            if (this.iconClass) {
                ret.padding = '20px'
            }
            ret.padding = '10px'
            return ret
        },
        styleToastText () {
            const ret = {}
            if (this.iconClass) {
                ret.paddingTop = '10px'
            }
            ret.paddingTop = '0'
            return ret;
        }
    }
}
</script>
<style lang="scss" scoped>
    .gulu-toast {
        position: fixed;
        word-wrap:break-word;
        padding:10px;
        text-align: center;
        z-index:9999;
        font-size:14px;
        max-width:80%;
        box-sizing: border-box;
        color: #fff;
        border-radius: 5px;
        background: rgba(0,0,0,0.7);
        transition: opacity .3s linear;
        &.middle {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }
        &.top {
            top: 50px;
            left: 50%;
            transform: translate(-50%, 0)
        }
        &.bottom {
            bottom: 50px;
            left: 50%;
            transform: translate(-50%, 0);
        }
        .gulu-toast-text {
            font-size: 14px;
            display: block;
            text-align: center;
        }
    }
</style>
