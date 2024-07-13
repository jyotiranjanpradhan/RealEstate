import React from "react";
import axios from "axios";
export const apiFetchBranchInfo=async (data)=>{
   
    try {
      const response =await axios.post(`${process.env.REACT_APP_URL_BASE}/api/system_branch_handler/`,data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }) ;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    }