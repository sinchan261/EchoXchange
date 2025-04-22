// import axios from "axios"
// import React, {  useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import Errorpage from "./Errorpage"

//  interface validationProps{
//     children:React.ReactNode
//  }
// function Validation({children}:validationProps) {
//     const navigate=useNavigate()
//     useEffect(()=>{
//         const call= async()=>{
//             try
//           {  const validation =await  axios.get(
//                 ` https://ecoxchangeserver.onrender.com/validate`,
//                 { withCredentials: true } 

//             );
            
//             console.log(validation)

           
          
//         }catch(error){
//                 return <Errorpage/>
//             }

//         }
//     call();
        
//     },[navigate])
//   return (
//     <div>
//     {children}
    
//     </div>
//   )
// }

// export default Validation
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Errorpage from "./Errorpage";

interface validationProps {
  children: React.ReactNode;
}

function Validation({ children }: validationProps) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    const call = async () => {
      try {
        const validation = await axios.get(
          "https://ecoxchangeserver.onrender.com/validate",
          { withCredentials: true }
        );
        console.log("Validation passed:", validation);
        setError(false);
      } catch (error) {
        console.error("Validation failed:", error);
        setError(true);  // Mark as error.
      }
    };
    call();
  }, [navigate]);

  if (error) {
    return <Errorpage />;
  }

  return <div>{children}</div>;
}

export default Validation;
