import axios from "axios";
export async function addCustomer(data) {
  try {
    console.log(data);
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/customer_handler/`,
      data: data,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCustomer() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/customer_handler/`,
    });
    // console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
