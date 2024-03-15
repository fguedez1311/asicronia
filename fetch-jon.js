(()=>{
    const $fetch=document.getElementById("fetch")
    const $fragment=document.createDocumentFragment()
    fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res=>{
    //     console.log(res)
    //     return res.ok ? res.json() : Promise.reject(res)
    // })
    .then(res=>res.ok ? res.json() : Promise.reject(res))
    .then(json=>{
        console.log(json)
        json.forEach((el)=>{
            const $li=document.createElement("li")
            $li.innerHTML=`${el.name}--${el.email}--${el.phone}`
            $fragment.appendChild($li)
        })
        $fetch.appendChild($fragment) 
    })
    
    .catch(err=>{
        let message=err.statusText|| "Ocurrió un error"
        $fetch.innerHTML=`Error ${err.status}: ${message}`
    })
    .finally(()=>{
        console.log("Esto se ejecutará independiente del resultado de la promesa Fetch")
    })
})()