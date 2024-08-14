import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const apiFeetchCompanyProfile = async ({ data }) => {
  //  console.log(data);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_BASE}/api/employee_management_handler/`,
      data
    );
    if(response.status==201){
      toast.success("Company profile saved successfully")
    }
    console.log(response.data);
  } catch (error) {
    toast.error("Invalid inputs")
    console.error("Error sending data to API:", error);
  }
};
