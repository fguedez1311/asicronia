
class Chancho{
    propiedad='mi propiedad'
    #hambre
    static estatico=42
    constructor(estado='Feliz',hambre=false){
       this.estado=estado
       this.#hambre=hambre
    }
    hablar(){
        console.log(`Soy un chancho ${this.estado} ${this.#hambre? 'Con mucha hambre':'Satisfecho'}`)
    }
    static comer(){
        console.log(this.estatico,'Estoy comiendo')
    }
}
const feliz=new Chancho('Feliz')
feliz.hablar()
Chancho.comer()
