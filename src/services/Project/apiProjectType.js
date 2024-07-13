import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

export const apiFeetchProjectType = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_type_handler/`,
    data.data
  );
  console.log(response);
  if (response.status===201){
    toast.success("Project type created successfully")
    
  }
};
