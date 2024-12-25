var btn = document.querySelector(".btn");
var box = document.querySelector(".box");
var main = document.querySelector("main");
btn.addEventListener("click",function(){
   var a1 = Math.floor(Math.random()*255)
   var a2 = Math.floor(Math.random()*255)
   var a3 = Math.floor(Math.random()*255)

   var c1= Math.floor(Math.random()*50)
   var c2 = Math.floor(Math.random()*55)
   var c3 = Math.floor(Math.random()*100)
   box.style.backgroundColor = `rgb(${a1},${a2},${a3})`
   main.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})