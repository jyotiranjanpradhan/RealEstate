import React from "react";
import axios from "axios";

export const apiFetchOwnerType=async (data)=>{
console.log(data);
const response =await axios.post("http://20.244.48.88:8000/api/product_ownerships_handler/",data) ;
console.log(response);
}