<template>
    <div>
        <div class="popover" ref="popver" v-show="isShow" :style="popoverStyle">
           <div class="popover-title" v-if="title" v-text="title"></div> 
           <div class="popover-content">
               <slot>
                   <div v-text="content"></div>
               </slot>
           </div>
        </div>
        <slot name="reference"></slot>
    </div>
</template>
<script>
import { on, off } from './utils/dom.js'
export default {
    name: 'GuluPopover',
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        trigger: {
            type: String,
            default: 'click'
        },
        width: {
            type: Number
        }
    },
    data () {
        return {
            reference: null,
            poper: null,
            isShow: false
        }
    },
    computed: {
        popoverStyle () {
            const ret = {}
            const { width } = this
            if (width && width !== 276) {
                ret.width = width + 'px'
                ret.maxWidth = 'none'
            }
            return ret
        }
    },
    mounted () {
        this.initSloveReference()
    },
    methods: {
        initSloveReference () {
            // this.$slots.reference ==> 获取到一个数组，数组中可以获取到元素
            const { trigger } = this
            let reference = this.$slots.reference && this.$slots.reference[0].elm
            if (trigger === 'click') {
                on(reference, 'click', this.doToggle)
                on(document, 'click', this.handleDocumentClick)
            }
        },
        doToggle () {
            this.isShow = !this.isShow
        },
        handleDocumentClick (e) {
            const poper = this.$refs.poper
            let reference = this.$slots.reference[0].elm
            if (!this.$el ||
                !reference ||
                this.$el.contains(e.target) ||
                reference.contains(e.target) ||
                !poper ||
                poper.contains(e.target)) return
            this.isShow = false    
        }
    }
}
</script>
<style lang="scss" scoped>
.popover {
    
}
</style>
