const pokemon={
    name:'Squirtle',
    type:'Water'
}
const{abilities=[],...rest}=pokemon
const fullSquirtle={...rest,abilities}

console.log(rest)
console.log(fullSquirtle)