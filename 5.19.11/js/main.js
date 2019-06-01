
// 过滤器
// 过滤器不会修改原有值 适合最后展示处理 复杂运算使用计算
// 币种
Vue.filter("currency", function (val, unit) {
    // val为空或空字符串时使用0
    // 等同于 val = val != null && val != "" ? val : 0;
    val = val || 0;
    unit = unit || "元";

    return val + unit;
});

// 长度 简单计算
Vue.filter("meter", function (val, unit) {
    // val为空或空字符串时使用0
    // 等同于 val = val != null && val != "" ? val : 0;
    val = val || 0;
    unit = unit || "米";

    return (val / 1000).toFixed(2) + unit;
});


var app = new Vue({
    el: "#app",
    data () {
        return {
            price: "",
            length: ""
        }
    }
});