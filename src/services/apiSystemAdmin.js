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

export async function getBranch() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_branch_handler/`,
    });
    console.log(res.data);
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
  console.log(data);
  try {
    const {
      branch_id,
      letter_header,
      letter_footer,
      contact_name,
      contact_designation,
      contact_role,
      contact_email,
      contact_phone,
      ...details
    } = data;
    const branch_brand = {
      letter_header,
      letter_footer,
      "brand_branch_id":branch_id
    };
    const branch_contact = {
      name: contact_name,
      designation: contact_designation,
      role: contact_role,
      email: contact_email,
      phone: contact_phone,
      "contact_branch_id":branch_id
    };
    const branch_details = details;

    const formData = new FormData();

    formData.append("branch_details", JSON.stringify(branch_details));
    formData.append("branch_brand", JSON.stringify(branch_brand));
    formData.append("branch_contact", JSON.stringify(branch_contact));
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    console.log(formDataObj);
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/system_branch_handler/`,
      data: formData,
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

export const createCompanyInfo= async (data)=>{
 
  try {
    const response =await axios.post(`${process.env.REACT_APP_URL_BASE}/api/system_company_details_handler/`,data, {
      headers: {
        'Content-Type':'multipart/form-data',
    },
      }) ;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  }

  export const test= async (data)=>{
 
    try {
      const response =await axios.post(`http://192.168.1.31:8000/api/system_company_details_handler/`,data, {
       headers: {
        'Content-Type': 'multipart/form-data',
      },
        }) ;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    }
