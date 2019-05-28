// 全局组件
// 测试
Vue.component("alert_quanju", {
    template: '<button @click="on_click">全局</button>',
    methods: {
        on_click () {
            alert("全局");
        }
    }
});

// 点赞
Vue.component('like', {
    template: '#component_like',
    data () {
        return {
            count: 10,
            liked: false
        }
    },
    methods: {
        click_like () {
            // 未点赞
            if (!this.liked) {
                // 增加点赞数
                this.count++;
            } else {// 已点赞
                // 减少点赞数
                this.count--;
            }
            // 是否已点赞 使用相反值
            this.liked = !this.liked;
        }
    }
});


var app = new Vue({
    el: "#app",
    // 局组件
    components: {
        alert: {
            template: '<button @click="on_click">局部</button>',
            methods: {
                on_click () {
                    alert("局部");
                }
            }
        }
    }
});