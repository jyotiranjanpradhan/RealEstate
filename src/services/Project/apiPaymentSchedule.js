import axios from "axios";
import React from "react";

export const apiFetchPaymentSchudule = async (data) => {
  console.log(data.data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_payment_schedules_handler/`,
    data.data
  );
  console.log(response);
};
