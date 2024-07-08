import React from "react";
import axios from "axios";

export const apiFetchAddAmenity=async (data)=>{
console.log(data);
try {
  const response =await axios.post(`${process.env.REACT_APP_URL_BASE}/api/project_add_amenities_handler/`,data, {
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
    const response =await axios.get(`${process.env.REACT_APP_URL_BASE}/api/project_amenity_masters_handler/`) ;
    console.log(response);
    return response.data
  } catch (error) {
    console.log(error);
  }
  }
