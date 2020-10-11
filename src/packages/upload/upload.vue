<template>
    <div class="po-upload">
        <div class="po-upload-button" @click="handleClick">
            <slot></slot>
        </div>
        <input
            ref="input"
            type="file"
            :name="name"
            :accept="accept" 
            :multiple="multiple" 
            @change="handleChange"/>
        <div class="po-upload-tips"></div>    
    </div>
</template>
<script>
export default {
    name: 'PoUpload',
    props: {
        name: {
            type: String,
            default: 'file',
        },
        action: {
            type: String,
            require: true
        },
        limit: Number,
        multiple: Boolean,
        onExceed: Function,
        onChange: Function,
        onSuccess: Function,
        onError: Function,
        onProgress: Function,
        fileList: {
            type: Array,
            default: () => []
        },
        accept: String,
    },
    data() {
        return {
            idx: 1,
            files: [],
        }
    },
    watch: {
        fileList: {
            immediate: true,
            handler(fileList) {
                this.files == fileList.map(item => {
                    item.uid = Date.now() + this.idx++;
                    item.status = 'success';
                    return item;
                })
            },
        }
    },
    methods: {
        handleClick() {
            this.$refs.input.value = '';
            this.$refs.input.click();
        },
        handleChange(e) {
            const files = e.target.files;
            // 多个文件如何上传
            this.uploadFiles(files);
        },
        handleStart(rawFile) {
            rawFile.uid = Math.random() + this.idx++
            const file = {
                status: 'ready',
                name: rawFile.name,
                size: rawFile.size,
                percentage: 0,
                uid: rawFile.uid,
                raw: rawFile,
            }
            this.files.push(file);
            this.onChange && this.onChange(file);
        },
        upload() {},
        uploadFiles(files) {
            if(this.limit && (this.fileList.length + files.length) > this.limit ) {
                return this.onExceed && this.onExceed(files, this.fileList)
            }
            [...files].forEach(rawFile => {
                this.handleStart(rawFile)
                this.upload()
            })
        }
    }
}
</script>

<style lang="scss">
    .po-upload-button {
        display: inline-block;
    }
</style>