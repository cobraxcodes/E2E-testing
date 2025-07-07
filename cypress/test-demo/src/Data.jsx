import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

function Data(){
    const URL ="https://jsonplaceholder.typicode.com/posts"
    const {data, isLoading, isError} = useQuery({
        queryKey: 'mockTest',
        queryFn: async() => await axios.get(URL).then(res => res.data)
    })

    useEffect(() =>{
        if(data){
            console.log(data)
        }
    }, [data])

    if(isLoading) return <p>Loading ...</p>
    if(isError) return <p>Error loading data</p>

    return(
        <>
        <h1>Here is your data</h1>
        {data?.map(x=>(
            <p>{x.title}</p>
        ))}

        </>
    )
}

export default Data