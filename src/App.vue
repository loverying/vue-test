<template>
    <div id="app">
        <div class="container">
            <h1>同志交友</h1>
            <router-link to="/">首页</router-link>
            |
            <router-link to="/about">关于我们</router-link>
        </div>
        <div class="page-main">
            <router-view></router-view>
        </div>
        <div class="page-footer">
            <div class="links">
                <a href="#">关于我们</a>
                <a href="#">关于我们</a>
                <a href="#">关于我们</a>
                <a href="#">关于我们</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        width: 1170px;
        margin: 0 auto;
    }

    .page-header {
        height: 200px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }

    .page-header h1{
        padding: 20px 0px;
    }

    .page-footer {
        text-align: center;
    }

    .links {
        height: 150px;
        line-height: 150px;
    }

    .page-footer a{
        margin: 0 10px;
        font-size: 12px;
        color: #999;
        text-decoration: none;
    }
</style>