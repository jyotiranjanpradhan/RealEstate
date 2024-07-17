import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const formDataToJSON = (formData) => {
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });
    return jsonObject;
  };

export const apiAddTAX = async (data) => {
    console.log(data);
  
    // Convert FormData to JSON
    const jsonData = formDataToJSON(data);
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_BASE}/api/project_add_tax_handler/`,
        jsonData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response);
      if(response.status==201){
        toast.success("TAX added successfully")
        
      }else{
        toast.error("Failed to add TAX!");
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  export const apiFetchTax = async (id) => {
    // const [_, id] = queryKey; // Destructure to get the id from queryKey
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL_BASE}/api/project_add_tax_handler?confirm_project_id=${id}`
      );
      return response.data; // Return the data from the response
    } catch (error) {
      console.error("Failed to fetch payment schedule:", error);
      toast.error("Failed to fetch payment schedule");
      throw error; // Throw error to handle it in react-query
    }
  };