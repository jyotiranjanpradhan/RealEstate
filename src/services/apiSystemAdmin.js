import axios from "axios";

export async function createBoard(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_board_of_directors_handler/`,
      data: data,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function getBoard() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_board_of_directors_handler/`,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createBankInfo(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_bank_details_handler/`,
      data: data,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function getBank() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_bank_details_handler/`,
    });
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createBranchInfo(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_branch_handler/`,
      data: data,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function createCompanyType(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_company_type_handler/`,
      data: data,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function createCompanyInfo(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_company_details_handler/`,
      data: data,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
