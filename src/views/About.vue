<template>
    <div class="about">
        <p>
            我们特别牛逼，特别厉害！
        </p>
        <h3>{{ $store.state.title }}</h3>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name: "About",
        computed: {
            title() {
                return this.$store.state.title
            }
        }
    }
</script>

<style scoped>
    .about {
        margin-top: 40px;
    }
    .about p {
        color: red;
        font-size: 100px;
        text-align: center;
        font-weight: bold;
    }
</style>