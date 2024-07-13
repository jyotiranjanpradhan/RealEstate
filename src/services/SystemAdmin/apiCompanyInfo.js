import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const apiFetchCompanyInfo=async ()=>{
   
    try {
      const response =await axios.get(`${process.env.REACT_APP_URL_BASE}/api/system_company_details_handler/`);
        return response.data;
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Invalid input data");
    }
    }