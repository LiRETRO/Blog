<template>
    
</template>

<script>
export default {
    data () {
        return {
            wangEditor: require('wangEditor')
        }
    },
    methods: {
        init () {
            let e = window.wangEditor
            console.log(e)
        }
    },
    created () {
        this.init()
    }
}
</script>

<style lang="less">

</style>


