<template>
    <div class="gulu-toast" v-show="visible" :class="position">
    </div>    
</template>
<script>
export default {
    name: 'GuluToast',
    data () {
        return {
            visible: false,
            message: '',
            position: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    .gulu-toast {
        position: fixed;
        left:50%;
        transform:translate(-50%,-50%) scale(1);
        word-wrap:break-word;
        padding:10px;
        text-align: center;
        z-index:9999;
        font-size:.3rem;
        max-width:80%;
        color: #fff;
        border-radius: 5px;
        background: rgba(0,0,0,0.7);
        overflow: hidden;
        &.middle {
            top: 50%;
        }
        &.top {
            top: 10%;
        }
        &.bottom {
            top: 90%;
        }
    }
</style>
