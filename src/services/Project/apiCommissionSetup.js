import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const apiFetchCommissionSetup = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_commissions_handler/`,
    data
  );
  console.log(response);
  if (response.status===201){
    toast.success("Commission created successfully")
    
  }
};

export const apiFetchProductType = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_BASE}/api/project_product_types_handler/`
    );
    return response
  } catch (error) {
    console.error('Error fetching product types:', error);
    throw error;
  }
};

