import axios from "axios";

export async function createEmployeeBank(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/employee_bank_handler/`,
      data: data,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
    const errorMessage = Object.keys(error.response.data).join(",");
    throw new Error(`Please provide ${errorMessage}`);
  }
}

export async function createEmployeeSalary(data) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/employee_salary_handler/`,
      data: data,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
    const errorMessage = Object.keys(error.response.data).join(",");
    throw new Error(`Please provide ${errorMessage}`);
  }
}
