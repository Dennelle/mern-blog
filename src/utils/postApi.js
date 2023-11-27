
const BASE_URL='/api/post'

export function create(data){
    return fetch(BASE_URL, {
        method: 'POST',
        body: data,
        headers:{
            // Authorization: "Bearer" + tokenService.getToken()
        }
    }).then(res =>{
        if(res.ok) return res.json()
        throw new Error('something went wrong with the create post')
    })
}
