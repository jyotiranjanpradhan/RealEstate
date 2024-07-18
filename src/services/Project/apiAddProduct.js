import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const apiFetchAddProduct = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_products_handler/`,
    data
  );
  if (response.status===201){
    toast.success("Product created successfully")
  }else{
    toast.error("Failed to add Product!");
  }
  console.log(response);
  
};
export const apiFetchProductAmenity = async (data) => {
  console.log(data);
  const response = await axios.get(
    `${process.env.REACT_APP_URL_BASE}/api/project_products_handler/`,
    data
  );
  console.log(response);
};
