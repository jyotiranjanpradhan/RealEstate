import React from "react";
import axios from "axios";

export const apiFetchOwnerType = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/product_ownerships_handler/`,
    data
  );
  console.log(response);
};
