import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

export const apiFetchProductDetails = async ({ queryKey }) => {
  const [_, id] = queryKey; // Destructure to get the id from queryKey
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_BASE}/api/confirm_project_handler/${id}`
    );
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    toast.error("Failed to fetch product details");
    throw error; // Throw error to handle it in react-query
  }
};
export const apiFetchPaymentSchedule = async ({ queryKey }) => {
    const [_, id] = queryKey; // Destructure to get the id from queryKey
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL_BASE}/api/project_add_payments_handler?confirm_project_id=${id}`
      );
      return response.data; // Return the data from the response
    } catch (error) {
      console.error("Failed to fetch payment schedule:", error);
      toast.error("Failed to fetch payment schedule");
      throw error; // Throw error to handle it in react-query
    }
  };
  export const apiFetchCommissionDetails = async (id) => {
    // const [_, id] = queryKey; // Destructure to get the id from queryKey
    
    try {
      console.log("Developer Krishna");
      const response = await axios.get(
        `${process.env.REACT_APP_URL_BASE}/api/project_add_commission_handler?confirm_project_id=${id}`
      );
      console.log(response);
      return response.data; // Return the data from the response
    } catch (error) {
      console.error("Failed to fetch commission:", error);
      toast.error("Failed to fetch commission");
      throw error; // Throw error to handle it in react-query
    }
  };