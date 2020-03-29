<template>
    <div class="grap-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GrapCollapse",
        componentName: 'GrapCollapse',
        props: {
            accordion: Boolean,
            value: {
                type: [String, Array, Number],
                default: () => []
            }
        },
        created () {
            this.$on('item-click', this.handleItemClick)
        },
        data () {
            return {
                activeNames: [].concat(this.value)
            }
        },
        provide() {
            return {
                collapse: this
            }
        },
        methods: {
            setActiveNames (activeNames) {
                activeNames = [].concat(activeNames);
                this.activeNames = activeNames;
                this.$emit('input', activeNames);
                this.$emit('change', activeNames);
            },
            handleItemClick (item) {
                let activeNames = this.activeNames.slice(0);
                let index = activeNames.indexOf(item.name);
                if (index > -1) {
                    activeNames.splice(index, 1);
                } else {
                    activeNames.push(item.name);
                }
                this.setActiveNames(activeNames);
            }
        }
    }
</script>

<style scoped lang="scss">
.grap-collapse {
    border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
}
</style>
