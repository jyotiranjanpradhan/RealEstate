import axios from "axios";
import { Dropdown } from "bootstrap";

export async function dropDownsForTabs(endpoint) {
  try {
    console.log(endpoint);
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/${endpoint}/`,
    });
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
