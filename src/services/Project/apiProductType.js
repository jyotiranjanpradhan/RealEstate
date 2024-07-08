import axios from "axios";
import React from "react";

export const apiFetchProductType = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_product_types_handler/`,
    data
  );
  console.log(response);
};
