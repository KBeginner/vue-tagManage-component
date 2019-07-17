<template>
    <section class="tagBox" v-loading="isLoading">
        <div class="show">
            <div class="head">
                <!-- <v-col span="10" class="title">{{title}}</v-col> -->
                <v-col span="12" class="edit" v-show="tags.length>0">
                    <a class="edit-btn" v-if="!isClosable" @click.stop="isClosable=true">编辑</a>
                    <a class="cancel-btn" v-else @click="cancelHandle">完成</a>
                </v-col>
            </div>
            <div  class="body">
                <div class="tags">
                    <template v-for="(item,index) in tags">
                        <tag-box :key="index"
                            :item="item" 
                            :tagBgColor="tagBgColor" 
                            :isClosable="isClosable"
                            :tags="tags"
                            @handleSet="handleSet($event,item)"
                            @handleClose="handleClose(item)">
                        </tag-box>
                    </template>
                    <new-btn v-show="addable && !isClosable" @handleAdd="handleAdd"></new-btn>
                </div>
                <div v-if="tags.length<=0" class="noData">暂无数据</div>
            </div>
        </div>
    </section>
</template>

<script>
import NewBtn from './newTag'
import TagBox from './tagItem'

export default {
    name:'TagList',
    props:['title', 'tags', 'tagName', 'addable', 'isLoading'],
    components:{ NewBtn, TagBox },
    data() {
        return {
            tagBgColor: this.addable ? '#fff' : '#eee',
            isClosable: false,
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
        handleSet(value,tag){
            this.$emit('set',{value:value,tag:tag})
        },
        /* 取消 */
        cancelHandle(){
            this.$emit('cancel')
            this.isClosable = false
        }
    }
}
</script>

<style lang="less" scoped>
    @theme_color: #5F8BC9;
    .tagBox{
        // padding: 0 20px;
        a{
            text-decoration: none;
        }
        .show{
            width: 100%;
            .head{
                height: 35px;
                line-height: 35px;
                margin: 3px 0;
                padding: 0 20px;
                .title{
                    color: @theme_color;
                    font-size: 14px;
                }
                .edit{
                    text-align: right;
                    a.edit-btn{
                        color: @theme_color;
                    }
                    a.cancel-btn{
                        color: #E6A23C;
                    }
                }
            }
            .body{
                .tags{
                    padding: 0 20px;
                    .el-tag{
                        margin-right: 20px;
                        margin-bottom: 20px;
                        border: 1px solid #ddd;
                    }
                }
                .noData{
                    text-align: center;
                    color: #999;
                    padding-bottom: 20px;
                }
                /deep/.el-loading-mask{
                    background-color: #FAFAFA;
                    // opacity: .9;
                }
            }
        }
    }
</style>
