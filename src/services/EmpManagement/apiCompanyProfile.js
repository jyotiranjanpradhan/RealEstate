import React from "react";
import axios from "axios";
export const apiFeetchCompanyProfile = async ({ data }) => {
//  console.log(data);
  try {
    const response = await axios.post(
      "http://20.244.48.88:8000/api/employee_management_handler/",
      data
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error sending data to API:", error);
   
  }
};
