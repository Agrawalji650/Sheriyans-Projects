var moveX = 0;
var img = document.querySelector('img')

document.addEventListener('keydown',function(dets){
   if(dets.code =='ArrowRight'){
    moveX++
    console.log('Arrow Right clicked');
    img.style.left = moveX+'px'
   }else{
    moveX--
    console.log('other');
    img.style.left= moveX+'px'
   }
})