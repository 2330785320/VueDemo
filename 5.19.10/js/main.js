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


// 同级组件传递参数
var vue_bor = new Vue();// 创建实例
// 输入组件
Vue.component('brother_input', {
    template: '#com_brother_input',
    data () {
        return {
            brother_input: ""
        }
    },
    methods: {
        // 同级输入组件 值改变
        inuptChange () {
            // 激活事件
            vue_bor.$emit("brother_input_change", this.brother_input);
        }
    }
});
// 输出组件
Vue.component("brother_output", {
    template: '#com_brother_output',
    data () {
        return {
            brother_output: ""
        }
    },
    // 程序加载后执行
    mounted () {
        var me = this;
        // 监听事件
        vue_bor.$on("brother_input_change", function (data) {
            me.brother_output = data;
        });
    }
});



var app = new Vue({
    el: "#app"
});