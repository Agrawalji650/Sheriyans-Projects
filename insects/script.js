var btn = document.querySelector('button')
var body = document.querySelector('body')


btn.addEventListener('click', function(){
    var idx = Math.floor(Math.random()*4);
    var left = Math.floor(Math.random()*90);
    var right = Math.floor(Math.random()*90);
     
    var arr = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcj8dZzNCKxOZ3skVX3K1VKuvwU0gkdHcrg&s','https://icon2.cleanpng.com/20180402/lde/avc9huc41.webp','https://icon2.cleanpng.com/20180402/lde/avc9huc41.webp'

    ]

    var jip = document.createElement('img')
    jip.setAttribute('src',arr[idx])
    jip.style.left = left +'%';
    jip.style.top = right +'%';
    jip.style.position = 'absolute';
    jip.style.width = '100px';
    body.appendChild(jip);

})