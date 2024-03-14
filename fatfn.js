function Fn(){
    this.prop='propiedad'
    return 'Chanchito feliz'
}
Fn.prototype.lala=function funcionPrototipo() {}
const r=new Fn()
console.log(r.__proto__)

//fat arrow function
const fatFn=()=>{
    return 'chanchito feliz'
}

const r1=fatFn()
console.log(r1)

const fnR=()=>2
console.log(fnR())