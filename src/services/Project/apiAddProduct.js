import React from "react";
import axios from "axios";

export const apiFetchAddProduct=async (data)=>{
console.log(data);
const response =await axios.post("http://20.244.48.88:8000/api/project_products_handler/",data) ;
console.log(response);
}