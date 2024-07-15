import axios from "axios";
import { Dropdown } from "bootstrap";

export async function adminDashboardView(mobno) {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/admin_view/${8249970090}/`,
    });
    // console.log(res);
    console.log(res.data.data);
    return res?.data?.data[0]
  } catch (error) {
    console.log(error);
  }
}
