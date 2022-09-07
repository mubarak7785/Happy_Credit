import { useEffect, useState } from "react"
import "./Post.css"
export const Post=()=>{

    const[data,setData]=useState([])
    const [fdata,setFdata]=useState([])
    const[search,setSearch]=useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>setData(data))
    },[])

    console.log(data)

    const searchChange=(e)=>{
        const {value}= e.target;
        setSearch(value)
        if(search.length<2){
            setFdata(data)
        }
        else{
            const fdatab=data.filter((elem)=>{
               return elem.title.toLowerCase().includes(search.toLowerCase())
            })
            setFdata(fdatab)
        }
    }
    

    const handleChange=(elem)=>{
        console.log(elem)
    }
  
    return(
        <div>
            <h1>Happy Credit</h1>
             <div className="inp-div">
                    <input type="text" placeholder="Search....." onChange={searchChange} />
                </div>
            <div className="main-div">
               
                {fdata.map((elem)=>{
                    return(
                        <div className="sub-div">
                            <p> <span>Title :</span> {elem.title}</p>
                            <p><span>Body :</span> {elem.body}</p>
                            <button onClick={handleChange}>User Details</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}