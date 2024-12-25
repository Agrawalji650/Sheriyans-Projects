var arr = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfpDPZ5AwBAPHlCvq7CrA4guqST4CaBAOYw&s','https://i.scdn.co/image/ab67616d00001e02101f9f0315ca8d5db9e7d034','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUnWdr6aQg05ZsJRI37g1M64dzPuJB5izag&s','https://imagesvs.oneindia.com/webp/img/2024/11/mumbaiindians5-1732472253.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8bvIpAbUikEDsVmbnpIf-voyCsrw0KYYIA&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7loQhgtIwIQLouA4PUWo9_LO_1LKqJBU_tQ&s','https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg']
var box = document.querySelector('.box')
var button = document.querySelector('button')
button.addEventListener('click',function(){
    var math= Math.floor(Math.random()*6);
    var a = arr[math];
    box.style.backgroundImage = `url(${a})`
     console.log(math);
    })