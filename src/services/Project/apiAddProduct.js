import React from "react";
import axios from "axios";

export const apiFetchAddProduct = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_products_handler/`,
    data
  );
  console.log(response);
};
