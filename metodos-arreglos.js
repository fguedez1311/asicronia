const users=[
    {id:1,name:'Chanchito Feliz'},
    {id:2,name:'Chanchito Triste'},
    {id:3,name:'Chanchito emocionado'},
    {id:4,name:'Felipe'},
    
]

const mapped=users.map(el=>`<h1>${el.name}</h1>`)
console.log(mapped)
