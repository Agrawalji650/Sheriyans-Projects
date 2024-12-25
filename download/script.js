var button = document.querySelector('button')
var growth = document.querySelector('.growth')
var h3 = document.querySelector('h3')
var grow = 0;

button.addEventListener('click',function(){
   if (grow<100){
   var interval = setInterval(function(){
        grow++;
        growth.style.width=grow+'%'
        h3.innerHTML=grow+"%"
    },50)
    setTimeout(function(){
        clearInterval(interval)
    },5000)
       
}
   
})