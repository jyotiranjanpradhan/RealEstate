import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const apiFetchTaxProductSegment = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL_BASE}/api/project_nearby_segments_handler/`
      );
      return response.data
    } catch (error) {
      console.error('Error fetching product types:', error);
      throw error;
    }
  };