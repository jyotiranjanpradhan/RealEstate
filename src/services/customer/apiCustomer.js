import axios from "axios";
export async function addCustomer(data) {
  try {
    console.log(data);
    const res = await axios({
      method: "POST",
      url: "http://20.244.48.88:8000/customer_handler/",
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
      url: "http://20.244.48.88:8000/customer_handler/",
    });
    // console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
