var app = new new Vue({
    el: "#app",
    data: {
       //url: "http://www.baidu.com"
       url: "http://www.taobao.com"
    },
    methods: {
        clickHandle() {
            alert(123);
        },
        onEnter() {
            console.log("onEnter");
        },
        onOut() {
            console.log("onOut");
        }
    }
});