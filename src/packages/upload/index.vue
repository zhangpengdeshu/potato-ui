<template>
    <div>
        <po-upload 
            name="avatar" 
            action="http://localhost:3000/upload" 
            limit="3" 
            :multiple="true" 
            :on-exceed="handleExceed" 
            :on-change="handleChange" 
            :on-success="handleSuccess" 
            :on-error="handleError" 
            :on-progress="handleProgress"></po-upload>
    </div>
</template>
<script>
export default {
    name: 'PoUpload',
    methods: {
        handleExceed() {},
        handleChange() {},
        handleSuccess() {},
        handleError() {},
        handleProgress() {},
    }
}
</script>