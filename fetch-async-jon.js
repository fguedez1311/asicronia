(()=>{
    const $fetchAsync=document.getElementById("fetch-async")
    const $fragment=document.createDocumentFragment()
    async function getData(){
        try{
            let res=await fetch("https://jsonplaceholder.typicode.com/users"),
            json=await res.json()
            console.log(res,json)
            if (!res.ok) throw {status:res.status,statusText:res.statusText}
            json.forEach((el)=>{
                const $li=document.createElement("li")
                $li.innerHTML=`${el.name}--${el.email}--${el.phone}`
                $fragment.appendChild($li)
            })
            $fetchAsync.appendChild($fragment) 
        }
        catch(err){
           console.log("Estoy en el catch",err)
           let message=err.statusText|| "Ocurrió un error"
            $fetchAsync.innerHTML=`Error ${err.status}: ${message}`
        }
        finally{
            console.log("Esto se ejecutará independiente del try... catch")
        }
       
    }
    getData()
})()