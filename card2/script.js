var btn = document.querySelector("button")
var h2 = document.querySelector("h2")
var flag = 0
btn.addEventListener("click",function(){
  if(flag==0) { h2.innerHTML="request pending";
    h2.style.color = "yellow"
    btn.innerHTML = " adding...";
     setTimeout(function(){
        h2.innerHTML="friends";
        h2.style.color="voilet"
        btn.innerHTML="Remove friend"
     },3000)
     flag = 1
}
else{
    h2.innerHTML="stranger"
    btn.innerHTML="Add friend"
    flag = 0
}
})