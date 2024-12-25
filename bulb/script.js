var button = document.querySelector('button');
var bulb = document.querySelector('.bulb');
 
var a = 0;
 button.addEventListener('click',function(){
    if(a==0){
        bulb.style.backgroundColor = 'yellow';
        // bulb.style.boxShadow = '10px 10px 10px 10px yellow'
      a = 1;
      button.innerHTML = 'off'
    }
    else{
        bulb.style.backgroundColor = 'white';
      console.log('hey');
      a = 0;
      button.innerHTML= 'on '
    }

    
})