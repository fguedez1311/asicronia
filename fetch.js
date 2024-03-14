const url='https://jsonplaceholder.typicode.com/users'


const fn=async ()=>{
    const response= await fetch(url,{
        method:'POST',//GET,POST,PUT,PATH,DELETE
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer allfllfll234kdlllllddd'
        },
        body: JSON.stringify({
            name: 'Chanchito feliz',
            website: 'google.com'
        })
    })
    const data=await response.json()
    console.log(data)
    
}
fn()