<template>
    <svg class="g-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "icon",
        props: ['name']
    }
</script>

<style lang="scss" scoped>
    .g-icon {width: 1em;height: 1em;}
</style>