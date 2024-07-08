import React from "react";
import axios from "axios";
export const apiFeetchCompanyProfile = async ({ data }) => {
  //  console.log(data);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_BASE}/api/employee_management_handler/`,
      data
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error sending data to API:", error);
  }
};
