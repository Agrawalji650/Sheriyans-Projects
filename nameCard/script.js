var arr = [
    {
     name:'Harsh',
     age:27,
     city:'Harpalpur'
    },
    {
        name:'Nityam',
        age:54,
        city:'Dharampura'
       },
       {
        name:'mehul',
        age:47,
        city:'karatha'
       },
       {
        name:'kallu',
        age:77,
        city:'Dulara'
       }
]
 var sum = ''

arr.forEach(function(elem){
  sum = sum +`<div class="card">
  <h3>${elem.name}</h3>
  <h4>${elem.age}, ${elem.city}</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt minima veniam similique soluta velit adipisci nulla.</p>
</div>`
})

var body = document.querySelector('body')
body.innerHTML = sum