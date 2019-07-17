<template>
    <span>
        <el-input
            v-if="inputVisible"
            class="input-new-tag"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
            />
        <el-tag
            v-else
            type="info"
            :color="tagBgColor"
            :closable="isClosable"
            :disable-transitions="true"
            @close="handleClose">
            <a v-if="isClosable" @click="showInput" title="点击编辑">{{inputValue}}</a>
            <span v-else>{{inputValue}}</span>
        </el-tag>
    </span>
</template>

<script>
export default {
    name: 'TagBox',
    props:[ 'tags','item', 'tagBgColor', 'isClosable'],
    data() {
        return {
            inputVisible: false,
            inputValue: this.item.typeName
        }
    },
    methods: {
        // 关闭
        handleClose(value){
            this.$emit('handleClose', value)
        },
        // 切换输入框
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        // 编辑并切换标签
        handleInputConfirm() {
            if (this.inputValue==''){
                this.$message.error('操作失败，分类不能为空！')
                return
            } else {
                this.$emit('handleSet',this.inputValue)
                this.inputVisible = false;
            }
            /* let isInclude = this.tags.some(ele => {
                return ele.typeName==this.inputValue && ele.typeId !== this.item.typeId
            });
            if (isInclude) {
                this.$message.error('操作失败，该分类已存在！')
                return
            } else {
                this.$emit('handleSet',this.inputValue)
                this.inputVisible = false;
            } */
        }
    },
    watch:{
        item(){
            this.inputValue = this.item.typeName
        }
    }
}
</script>

<style lang="less" scoped>
    .tagMargin(){
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .el-tag{
        border: 1px solid #ddd;
        .tagMargin;
    }
    .input-new-tag {
        width: 100px;
        vertical-align: bottom;
        .tagMargin;
    }
</style>
