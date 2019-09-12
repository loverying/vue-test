import Vue from 'vue';
import App from './App';
import router from './router'
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.use(elementUI);

Vue.config.productionTip = false; // 开发版
/* 创建根实例 */
// new Vue({
//     render :function (h) {
//         // return h('h1','同志交友')
//         return h(App)
//     }
// }).$mount('#app')

new Vue({
    router,
    store,

    render: function (h) {
        return h(App)
    }
}).$mount('#app')