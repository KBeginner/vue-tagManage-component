<template>
    <section class="tagBox">
        <div class="head">
            <div class="title">{{title}}</div>
            <div class="edit" v-show="tags.length>0">
                <a v-if="!isClosable" @click.stop="isClosable=true">编辑</a>
                <a class="complete" v-else @click="isClosable=false">完成</a>
            </div>
        </div>
        <div v-if="tags.length>0" class="tags">
            <template v-for="(item,index) in tags">
                <tag-item :key="index"
                    :value="item[tagName]" 
                    :tagBgColor="tagBgColor" 
                    :isClosable="isClosable"
                    @handleSet="handleSet(item)"
                    @handleClose="handleClose(item)">
                </tag-item>
            </template>
            <new-tag v-if="!isClosable" @handleAdd="handleAdd"></new-tag>
        </div>
        <div v-else class="noData">暂无数据</div>
    </section>
</template>

<script>
import NewTag from './newTag'
import TagItem from './tagItem'

export default {
    name:'TagList',
    props:{
        tags:{                      // 标签对象数组
            type: Array,
            required: true,
            default: []
        },
        tagName:{                    // 字段名配置
            type: String,
            required: true
        },
        title:{
            type: String,
            default: '我的标签'
        }
    },
    components:{ NewTag, TagItem },
    data() {
        return {
            tagBgColor: this.addable ? '#fff' : '#eee',
            isClosable: false
        }
    },
    methods: {
        /* 关闭 */
        handleClose(value) {
            this.$emit('close',value)
        },
        /* 添加 */
        handleAdd(value){
            this.$emit('add',value)
        },
        /* 编辑 */
        handleSet(value){
            this.$emit('set',value)
        }
    }
}
</script>

<style scoped>
    .tagBox{
        padding: 0 15px;
        background: #FAFAFA;
        border: 1px solid #ddd;
        border-radius: 3px;
        text-align: left;
    }
    a{
        text-decoration: none;
    }
    .head{
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
    .head{
        color: #01659e;
    }
    .edit{
        text-align: right;
    }
    .edit a.complete{
        color: #E6A23C;
    }
    .tags{
        min-height: 100px;
    }
    .tags .el-tag{
        margin-right: 20px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
    }
    .noData{
        height: 80px;
        line-height: 60px;
        text-align: center;
        color: #999;
        font-size: 13px;
    }
</style>
