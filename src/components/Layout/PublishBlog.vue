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
import wangEditor from 'wangeditor';
import { publishBlog } from '@/api/BlogApi';
import { mapGetters, mapSetters } from 'vuex';
// import { emojiJson } from '../../../static/js/emoji.js';
export default {
    data () {
        return {
            editor: new wangEditor('#blogEditor'),
            content: ''
        }
    },
    computed: {
        ...mapGetters([
            'tempPublishData'
        ]),
        customConfig() {
            const customConfig = {
                // emotions = [
                //     {
                //         title: '默认',
                //         type: 'image',
                //         content: emojiJson
                //     }
                // ]
                // 上传接口地址
                uploadImgServer: '/upload',
                // 限制上传图片大小为2M[默认5M]
                uploadImgMaxSize: 2 * 1024 * 1024,
                // 限制一次上传5张[默认10000张]
                uploadImgMaxLength: 5,
                // 上传图片自定义参数[如Token校验等]
                uploadImgParams: {

                },
                // 跨域上传传递Cookie
                withCredentials: true,
                // 上传Timeout为3秒[默认5秒]
                uploadImgTimeout: 5000,
                // 上传图片监听
                uploadImgHooks: {
                    before (xhr, editor, files) {
                        /**
                         * 图片上传之前触发
                         * xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
                         * 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
                         * return {
                         *   prevent: true,
                         *   msg: '放弃上传'
                         * }
                         **/ 
                        return true;
                    },
                    success (xhr, editor, result) {
                        /**
                         * 图片上传并返回结果，图片插入成功之后触发
                         * xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
                         */
                    },
                    fail (xhr, editor, result) {
                        /**
                         * 图片上传并返回结果，但图片插入错误时触发
                         * xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
                         */
                    },
                    error (xhr, editor) {
                        /**
                         * 图片上传出错时触发
                         * xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
                         */
                    },
                    timeout (xhr, editor) {
                        /**
                         * 图片上传超时时触发
                         * xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
                         */
                    },
                    customInsert (insertImg, result, editor) {
                        /**
                         * 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
                         * insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
                         * 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片
                         * var url = result.url
                         * insertImg(url)
                         * result 必须是一个 JSON 格式字符串！！！否则报错
                         */
                    }
                },
                customAlert (info) {
                    // 自定义提示
                    alert(info);
                }
            };
            return customConfig;
        }
    },
    methods: {
        init () {
            this.editor.customConfig = this.customConfig;
            // 创建编辑器
            this.editor.create();
            // 设置标题
            this.$store.commit('setHeader', {
                title: 'Publish Blog',
                subheading: '随便写写',
                background: '/static/images/header_bg.png'
            });
            // 本地数据覆盖
            if (JSON.stringify(this.tempPublishData) !== '{}') {
                this.$refs.title.value = this.tempPublishData.blogTitle;
                this.$refs.subTitle.value = this.tempPublishData.blogSubTitle;
                this.editor.txt.html(this.tempPublishData.blogContent);
                this.$store.commit('setTempPublishData', {});
            }
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
            this.$store.commit('setTempPublishData', blogDetail);
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
        this.init();
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
            min-height: 600px;
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


