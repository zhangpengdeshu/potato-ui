<template>
    <div class="wrapper" :class="{'error': error}">
        <input type="text" :value='value' :disabled="disabled" :readonly="readOnly" @change="$emit('change', $event)" @input="$emit('input', $event.target.value)"/>
        <template v-if="error"> 
            <g-icon name="warn"></g-icon>
            <span>{{ error }}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    name: 'gulu-input',
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        error : {
            type: String
        }
    },
    components: {
        'g-icon': Icon
    }
        
}
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,.5);
    $error-border:1px solid #f1435d;
    .wrapper {
        padding-bottom: 12px;
        font-size: $font-size;
        display: inline-block;
        >input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 1 2px 4px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly] {
                border-color: #333;
                color: #333;
            }          
        }
        &.error {
             >input {
                border: $error-border;
            }
        }
    }
</style>
