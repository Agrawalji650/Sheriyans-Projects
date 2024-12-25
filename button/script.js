var btns = document.querySelectorAll('button')
var body = document.querySelector('body')
btns.forEach(function(elm){
     elm.addEventListener("click",function(){
        body.style.backgroundColor = elm.innerHTML
     })
})

// var friends = [
//    {
//       name:'sarthak',
//       weight:34
//    },
//    {
//       name:'jontu',
//       weight:23
//    },
//    {
//       name:'haRSH',
//       weight:450
//    },
//    {
//       name:'SAMAY',
//       weight:5
//    },
//    {
//       name:'shreyash',
//       weight:46
//    }
// ]
// var sum = 0;

// friends.forEach(function(elm){
//        sum = sum + elm.weight
// })



// var arr = [
//    { model:'samsung',
//       price:50000,
//       quantity:43
//    },
//    { model:'iphoneg',
//       price:70000,
//       quantity:64
//    },
//    { model:'samsung',
//       price:10000,
//       quantity:54
//    },
// ]
//  var sum=0;
// arr.forEach(function(elm){
//    sum=sum+(elm.price*elm.quantity)
  
   
// });
// console.log(sum);
