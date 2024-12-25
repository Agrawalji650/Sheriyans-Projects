var arr = [
    {
        dp:'https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1732806685351-bafb9848cebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
        username:'devil boy'
    },
    {
        dp:'https://images.unsplash.com/photo-1733910087506-f634f8a806de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734188515104-5f036a02f551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D',
        username:'black lover'
    },
    {
        dp:'https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1733126916745-ae6453f1fe4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D',
        username:'stylish by'
    },
    {
        dp:'https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1732806685351-bafb9848cebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
        username:'angel priya'
    },
    
    {
        dp:'https://images.unsplash.com/photo-1733910087506-f634f8a806de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734188515104-5f036a02f551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D',
        username:'chhapri official'
    },
    {
        dp:'https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1733126916745-ae6453f1fe4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D',
        username:'itz_chhapri'
    },
]

var sum = ''

arr.forEach(function(elem,idx){
    sum = sum + `<div class="story">
                <img id=${idx} src="${elem.dp} "alt="">
            </div>`
           
            
})
document.querySelector('.storian').innerHTML = sum ;

var full = document.querySelector('.full')
var storian = document.querySelector('.storian')
var growth= document.querySelector('.growth')
var img = document.querySelector('.profile img')
var h4 = document.querySelector('h4')

console.log(storian);

storian.addEventListener('click', function(dets){
     var target = arr[dets.target.id]
    
     var grow = 0;

     var interval = setInterval(function(){
        grow++;
        growth.style.width=grow+"%"

     },30)

       img.setAttribute('src',target.dp)
       h4.innerHTML=target.username
       

     full.style.display='block'
     full.style.backgroundImage=`url(${target.story})`
     
     setTimeout(function(){
        full.style.display = 'none'
        clearInterval(interval)
     },3000)
         
})

