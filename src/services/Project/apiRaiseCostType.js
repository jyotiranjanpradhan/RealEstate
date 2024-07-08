import axios from "axios";
import React from "react";

export const apiFetchRaiseCostType = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_raisecost_types_handler/`,
    data
  );
  console.log(response);
};
