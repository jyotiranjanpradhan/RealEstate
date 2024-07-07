import React from "react";
import axios from "axios";

export const apiFetchApporvalBody=async (data)=>{
console.log(data);
const response =await axios.post("http://20.244.48.88:8000/api/product_approval_bodies_handler/",data) ;
console.log(response);
}