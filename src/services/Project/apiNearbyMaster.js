import React from "react";
import axios from "axios";

export const apiFetchNearbyMaster = async (data) => {
  console.log(data);
  const response = await axios.post(
    `${process.env.REACT_APP_URL_BASE}/api/project_nearby_segments_handler/`,
    data
  );
  console.log(response);
};
