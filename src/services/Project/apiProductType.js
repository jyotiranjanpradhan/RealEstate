import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

export const apiFetchProductType = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_product_types_handler/`,
    data
  );
  console.log(response);
  if (response.status===201){
    toast.success("Product type created successfully")
    
  }
};
