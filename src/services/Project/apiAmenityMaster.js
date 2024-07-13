import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const apiFetchAminityMaster = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_amenity_masters_handler/`,
    data
  );
  console.log(response);
  if (response.status===201){
    toast.success("Amenity master created successfully")
    
  }
};
