import React from "react";
import axios from "axios";

export const apiFetchAddAmenity=async (data)=>{
console.log(data);
const response =await axios.post(`${process.env.REACT_APP_URL_BASE}/api/project_add_payments_handler/`,data) ;
console.log(response);
}