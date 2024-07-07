import axios from "axios";
import React from "react";

export const apiFetchPaymentSchudule =async(data)=>{
    console.log(data.data);
const response =await axios.post("http://20.244.48.88:8000/api/project_payment_schedules_handler/",data.data) ;
console.log(response);   
} 