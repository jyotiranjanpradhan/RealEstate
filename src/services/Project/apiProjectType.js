import axios from "axios";
import React from "react";

export const apiFeetchProjectType =async(data)=>{
const response =await axios.post("http://20.244.48.88:8000/api/project_type_handler/",data.event) ;
console.log(response);   
}