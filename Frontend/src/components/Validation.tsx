import axios from "axios"
import React, {  useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Errorpage from "./Errorpage"

 interface validationProps{
    children:React.ReactNode
 }
function Validation({children}:validationProps) {
    const navigate=useNavigate()
    useEffect(()=>{
        const call= async()=>{
            try
          {  const validation =await  axios.get(
                `${import.meta.env.VITE_API_HIGH}/validate`,
                { withCredentials: true } 

            );
            
            console.log(validation)

           
          
        }catch(error){
                return <Errorpage/>
            }

        }
    call();
        
    },[navigate])
  return (
    <div>
    {children}
    
    </div>
  )
}

export default Validation