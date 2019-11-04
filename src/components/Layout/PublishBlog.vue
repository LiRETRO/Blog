<template>
    <div class="row">
        <!-- USE SIDEBAR -->
        <!-- PostList Container -->
        <div class="col-lg-12 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12 col-xs-12 postlist-container">
            <div class="title-container">
                <input ref="title" placeholder="请输入标题"/>
                <input ref="subTitle" placeholder="请输入副标题"/>
            </div>
            <div id="blogEditor">
            </div>
            <div class="but-container">
                <a ref="publishButton" @click="publishBlog">发布</a>
                <a ref="previewButton" @click="previewBlog">预览</a>
            </div>
        </div>
    </div>
</template>

<script>
import wangEditor from 'wangeditor'
import { publishBlog } from '@/api/BlogApi'
export default {
    data () {
        return {
            editor: new wangEditor('#blogEditor'),
            content: ''
        }
    },
    methods: {
        init () {
            this.editor.customConfig.uploadImgShowBase64 = true;
            // 创建编辑器
            this.editor.create();
            // 设置标题
            this.$store.commit('setHeader', {
                title: 'Publish Blog',
                subheading: '随便写写',
                background: '/static/images/header_bg.png'
            });
        },
        previewBlog (event) {
            let title = this.$refs.title.value;
            let subTitle = this.$refs.subTitle.value;
            let content = this.editor.txt.html();
            if (title === '') {
                alert('请输入标题！');
                return false;
            }
            if (content === '') {
                alert('请输入内容！');
                return false;
            }
            let blogDetail = {
                blogTitle: title,
                blogSubTitle: subTitle,
                blogContent: content
            };
            // TODO 保存数据，在返回到编辑页面时进行填充
            
            let router = this.$router.push({ name: 'blogPreview', params: { blogDetail } });
        },
        publishBlog (event) {
            let title = this.$refs.title.value;
            let subTitle = this.$refs.subTitle.value;
            let content = this.editor.txt.html();
            if (title === '') {
                alert('请输入标题！');
                return false;
            }
            if (content === '') {
                alert('请输入内容！');
                return false;
            }
            publishBlog( { blogTitle: title, blogContent: content, blogSubTitle: subTitle } ).then(data => {
                if (data.code === 200) {
                    alert(data.resultMessage)
                }
            });
        }
    },
    mounted () {
        this.init()
    }
}
</script>

<style lang="less">
    .title-container {
        width: 100%;
        height: auto;
        margin: auto auto 10px;
        display: block;
        input {
            width: 100%;
            background: #efefef;
            box-shadow: 0 0 0 1px hsla(0,0%,100%,.5);
            border: none;
            line-height: 46px;
            height: 46px;
            font-size: 16px;
            padding: 0 5px;
            position: relative;
            top: -1px;
            outline: none !important;
            &:nth-child(2) {
                margin-top: 10px;
            }
            &:focus {
                background: #fff;
                box-shadow: inset 0 2px 4px rgba(35,54,86,.3);
                color: #6d757a;
            }
        }
    }
    #blogEditor {
        display: block;
        width: 100%;
        height: auto;
        margin: 0 auto;
        .w-e-text-container {
            background-color: white !important;
            min-height: 350px;
        }
    }
    .but-container {
        width: 100%;
        height: auto;
        margin: 10px auto auto;
        display: block;
        a {
            animation-name: change;
            height: 40px;
            border-radius: 4px;
            background-color: #FF4351;
            border-color: #FF4351;
            color: #FFF;
            font-weight: 300;
            font-size: 16px;
            text-decoration: none;
            text-align: center;
            line-height: 40px;
            padding: 0 40px;
            margin: 0;
            display: inline-block;
            appearance: none;
            cursor: pointer;
            border: none;
            transition-property: all;
            transition-duration: .3s;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            &:not(:first-child) {
                margin-left: 10px;
            }
            &:hover {
                background-color: #ff7680;
                border-color: #ff7680;
                color: #FFF;
            }
        }
    }
    @keyframes change {
        0% {
            box-shadow: 0 0 0 rgba(255, 67, 81, 0.3);
        }
        50% {
            box-shadow: 0 0 20px rgba(255, 67, 81, 0.8);
        }
        100% {
            box-shadow: 0 0 0 rgba(255, 67, 81, 0.3);
        }
    }
</style>


