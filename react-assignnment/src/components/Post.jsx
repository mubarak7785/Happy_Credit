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
             <div className="inp-div">
                    <input type="text" placeholder="Search" />
                    <button>submit</button>
                </div>
            <div className="main-div">
               
                {data.map((e)=>{
                    return(
                        <div className="sub-div">
                            <p> <span>Title :</span> {e.title}</p>
                            <p><span>Body :</span> {e.body}</p>
                            <button>User Details</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}