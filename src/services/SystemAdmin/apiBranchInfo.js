import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const apiFetchBranchInfo=async (data)=>{
   
    try {
      const response =await axios.post(`${process.env.REACT_APP_URL_BASE}/api/system_branch_handler/`,data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }) ;
        if (response.status===201){
        toast.success("Branch created successful");
        }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Invalid input data");
    }
    }