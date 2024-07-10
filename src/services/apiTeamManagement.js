import axios from "axios";

export async function createTeam(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/team_management_handler/`,
      data: data,
    });
    console.log(res);
  } catch (error) {
    const errorMessage = Object.keys(error.response.data).join(",");
    throw new Error(`Please provide ${errorMessage}`);
  }
}

export async function getTeam() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/team_management_handler/`,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
