var app = new Vue({
   el: "#app",
   data: {
       foodList: [
           {
               name: "葱",
               price: "10",
               discount: 0.8
           },
           {
               name: "姜",
               price: "15",
               discount: 0.5
           },
           {
               name: "蒜",
               price: "20"
           }
       ]
   }
});