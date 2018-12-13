<template>
    <div class="bg">
        <div class="title-container">
            <input ref="title" placeholder="请输入标题"/>
        </div>
        <div id="blogEditor">
        </div>
        <div class="but-container">
            <a ref="publishButton" @click="publishBlog">发布</a>
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
            // 创建编辑器
            this.editor.create()
        },
        publishBlog (event) {
            let title = this.$refs.title.value
            let content = this.editor.txt.html()
            if (title === '') {
                alert('请输入标题！')
                return false
            }
            if (content === '') {
                alert('请输入内容！')
                return false
            }
            publishBlog( { blogTitle: title, blogContent: content } ).then(data => {
                if (data.resultCode === 'success') {
                    alert(data.resultMessage)
                }
            })
        }
    },
    mounted () {
        this.init()
    }
}
</script>

<style lang="less">
    .bg {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        background: url(../../../static/images/publishBlogBg.jpg) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 0;
        top: 51px;
        .title-container {
            width: 70%;
            height: auto;
            margin: auto auto 10px;
            display: block;
            input {
                width: 100%;
                background: hsla(0,0%,100%,.2);
                box-shadow: 0 0 0 1px hsla(0,0%,100%,.5);
                border-radius: 4px;
                border: none;
                color: #d6dee4;
                line-height: 26px;
                height: 26px;
                margin-left: -5px;
                padding: 0 5px;
                position: relative;
                top: -1px;
                outline: none !important;
                &:focus {
                    background: #fff;
                    box-shadow: inset 0 2px 4px rgba(35,54,86,.3);
                    color: #6d757a;
                }
            }
        }
        #blogEditor {
            display: block;
            width: 70%;
            height: auto;
            margin: 0 auto;
            .w-e-text-container {
                background-color: white !important;
                min-height: 350px;
            }
        }
        .but-container {
            width: 70%;
            height: auto;
            margin: 10px auto auto;
            display: block;
            a {
                animation-name: change;
                height: 40px;
                float: right;
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
    }
</style>


