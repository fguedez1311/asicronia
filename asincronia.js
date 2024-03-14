
const baseURL='https://jsonplaceholder.typicode.com'

function myFetch(url){
    return fetch(url).then((res)=>{
        return res.json()
    })
}



async function getUserData(id){
    try {
        const user=await myFetch(`${baseURL}/users/${id}`)
        const posts=await myFetch(`${baseURL}/posts?userId=${user.id}`)
        const comments=await myFetch(`${baseURL}/comments?postId=${posts[0].id}`)
        console.log(user,posts,comments)
    } catch (error) {
        console.log({error})
    }
    finally{
        console.log("Esto va siempre")
    }
   
}

getUserData(5)

