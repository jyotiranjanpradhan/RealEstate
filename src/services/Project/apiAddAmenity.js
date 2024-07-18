import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const apiFetchAddAmenity=async (data)=>{
console.log(data);
try {
  const response =await axios.post(`${process.env.REACT_APP_URL_BASE}/api/project_add_amenities_handler/`,data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }) ;
  console.log(response);
  if(response.status===201){
    toast.success("Amenity added successfully")
  }
} catch (error) {
  console.log(error);
  toast.error("Failed to add amenity")
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

export const apiFetchAddAmenityDetails = async (id) => {
  // const [_, id] = queryKey; // Destructure to get the id from queryKey
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_BASE}/api/project_add_amenities_handler?confirm_project_id=${id}`
    );
    console.log(response);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    toast.error("Failed to fetch product details");
    throw error; // Throw error to handle it in react-query
  }
};

export const apiFetchAddPaidAmenityDetails = async (id) => {
  // const [_, id] = queryKey; // Destructure to get the id from queryKey
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_BASE}/api/project_add_paid_amenity_handler?confirm_project_id=${id}`
    );
    console.log(response);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    toast.error("Failed to fetch product details");
    throw error; // Throw error to handle it in react-query
  }
};