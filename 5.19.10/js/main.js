// 全局组件
// 弹出 父级向子级传参
Vue.component('user', {
    template: '<a :href="\'/user/\' + username">{{username}}</a>',
    props: ['username'],
    methods: {}
});

// 显示余额 父级组件
Vue.component('balance', {
    template: '#com_balance',
    data () {
        return {
            isShow: false,// 使用展示div
            money: '0元'// 余额
        }
    },
    methods: {
        // 父级 展示余额
        showBalance (data) {
            // 显示 余额展示div
            this.isShow = true;
            // 根据子级组件传参 修改父级组件中的余额
            this.money = data.money;
        }
    }
});

// 显示余额 子级组件
Vue.component('show', {
    template: '#com_show',
    methods: {
        // 子级 展示余额
        show () {
            // 调用父级组件中show_balance事件
            // 禁止使用大写
            this.$emit('show_balance',{
                money: '25块6毛2分'
            });
        }
    }
});


var app = new Vue({
    el: "#app"
});