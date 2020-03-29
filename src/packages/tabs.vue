<template>
    <div class="gulu-tabs">
        <slot></slot>
    </div>
</template>
<script>
/**
 * 通过获取自元素的label元素来构造数组
 * 通过数组下标来展示和隐藏
 * 
 * 
 */
import TabNav from './tab-nav.vue'
export default {
    name: 'GuluTabs',
    components: {
        TabNav
    },
    props: {
        type: String,
        activeName: String,
        value: {}
    },
    provide () {
        return {
            rootTabs: this            
        }
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
.gulu-tabs {
    
}
</style>
