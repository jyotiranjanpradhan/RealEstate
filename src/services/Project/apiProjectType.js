import axios from "axios";
import React from "react";

export const apiFeetchProjectType = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_type_handler/`,
    data.event
  );
  console.log(response);
};
