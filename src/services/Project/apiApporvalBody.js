import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const apiPostApporvalBody = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/product_approval_bodies_handler/`,
    data
  );
  console.log(response);
  console.log(response);
  if (response.status===201){
    toast.success("Approval body created successfully")
    
  }
};

export const apiFetchApporvalBody = async (data) => {
  console.log(data);
  const response = await axios.get(
    `${process.env.REACT_APP_URL_BASE}/api/product_approval_bodies_handler/`,
  );
  return response.data;
  console.log(response);
};
