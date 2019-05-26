var app = new new Vue({
    el: "#app",
    data: {
       num1: 90,
       num2: 80,
       num3: 30
    },
    computed: {
        sum() {
            return this.num1 + this.num2 + this.num3;    
        },
        ave() {
            return Math.round(this.sum / 3);
        }
    }
});