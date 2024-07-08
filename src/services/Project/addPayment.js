import React from "react";
import axios from "axios";

export const apiFetchAddAmenity=async (data)=>{
console.log(data);
const response =await axios.post("http://20.244.48.88:8000/api/project_add_payments_handler/",data) ;
console.log(response);
}