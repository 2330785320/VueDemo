
// 自定义指令
// 选中
Vue.directive("selected", function (el, binding) {

    var val = binding.value;// 值
    var modifiers = binding.modifiers;// 修饰符
    var arg = binding.arg;// 参数

    // 输出
    console.log("value值---" + val);
    console.log("修饰符---" + modifiers);
    console.log("参数---" + arg);
    
    // 选中
    if (val) {
        el.style.background = "gray";

    } else {// 取消选中
        el.style.background = "white";
    }
});


var app = new Vue({
    el: "#app",
    data () {
        return {
            // 卡1
            card1: {
                selected: false// 是否被选中
            },
            // 卡2
            card2: {
                selected: false// 是否被选中
            },
            // 卡3
            card3: {
                selected: false// 是否被选中
            }
        }
    }
});