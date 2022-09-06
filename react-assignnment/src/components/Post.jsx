import { useEffect, useState } from "react"
import "./Post.css"
export const Post=()=>{

    const[data,setData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>setData(data))
    },[])
   
    console.log(data)
    return(
        <div>
            <div className="main-div">
                {data.map((e)=>{
                    return(
                        <div className="sub-div">
                            <p>{e.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}