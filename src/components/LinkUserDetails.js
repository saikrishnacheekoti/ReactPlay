import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LinkUserDetails(props){
    const navigate = useNavigate()
    const userdata  = props.data;
    console.log("entered LinkUserDetails",userdata); 
       useEffect(()=>{

        const getcustomerDetails = async (userdata) => {
            const id = userdata.id;
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();
                console.log("data",data);
                navigate('/user', { state: { data } });
            }catch(error){
                console.error(error);
            }};
        getcustomerDetails(userdata);
     },[userdata,navigate]);  

  
return (
   
    <div>
    <h2>Child Component</h2>

  </div>
    
   
);
}
export default LinkUserDetails;