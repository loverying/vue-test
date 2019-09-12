<template>
    <div class="hello-world">
        <div class="article" v-for="shi in shiList">
            <h2>{{ shi }}</h2>
            <p>锄禾日当午</p>
            <P>汗滴禾下土</P>
            <p>谁知盘中餐</p>
            <p>粒粒皆辛苦</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            shiList: Array
        }
    }
</script>

<style scoped>
    .article {
        margin-bottom: 20px;
        text-align: center;
        padding: 10px;
        border: 1px solid #ccc;
    }
</style>