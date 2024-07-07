import axios from "axios";
import React from "react";

export const apiFetchRaiseCostType =async(data)=>{
    console.log(data);
const response =await axios.post("http://20.244.48.88:8000/api/project_raisecost_types_handler/",data) ;
console.log(response);   
} 