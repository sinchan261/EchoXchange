import axios from "axios"
import React, {  useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Errorpage from "./Errorpage"

 interface validationProps{
    children:React.ReactNode
 }
function Validation2({children}:validationProps) {
    const navigate=useNavigate()
    useEffect(()=>{
        const call= async()=>{
            try
          {  const validation =await  axios.get(
               `https://ecoxchangeserver.onrender.com/validate`,
                { withCredentials: true } 

            );
            console.log(validation.status)

           return navigate('/home')
          
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

export default Validation2