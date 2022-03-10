import { useEffect, useState } from 'react';


const useFetch = (url) => {
    const [data, setData] =useState(null);
    //loading message
    const [isPending, setIsPending] = useState(true)
    //error
    const [error, setError] = useState(null)
  
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(res =>{
                if(!res.ok){
                    throw Error('could not fetch the data, make sure your API is ok!')
                }
                    return res.json()
                })
                .then(data =>{
                    setData(data);
                    setIsPending(false)
                    setError(null)
                })
                .catch(err =>{
                    setIsPending(false)
                    setError(err.message)
                })
            },2000)
        },[url])
    return {data, isPending, error}
    
}

export default useFetch