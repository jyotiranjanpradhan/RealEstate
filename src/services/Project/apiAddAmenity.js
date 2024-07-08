import React from "react";
import axios from "axios";

export const apiFetchAddAmenity=async (data)=>{
console.log(data);
try {
  const response =await axios.post("http://20.244.48.88:8000/api/project_add_amenities_handler/",data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }) ;
  console.log(response);
} catch (error) {
  console.log(error);
}
}

export const apiFetchGetAmenity=async (data)=>{
  try {
    console.log(data);
    const response =await axios.get("http://20.244.48.88:8000/api/project_amenity_masters_handler/") ;
    console.log(response);
    return response.data
  } catch (error) {
    console.log(error);
  }
  }