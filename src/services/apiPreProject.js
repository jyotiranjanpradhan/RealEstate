import axios from "axios";

export async function createNewPreProject(data) {
  try {
    const {
      approvalBody,
      applyDate,
      employee,
      agency,
      approvalDate,
      validity,
      document,
      date,
      cost,
      nextDate,
      talkingPoint,
      document1,
      documentNo,
      issuedBy,
      issuedDate,
      validation,
      uploadDocument,
      ...rest
    } = data;

    const approvals = {
      approvalBody,
      applyDate,
      employee,
      agency,
      approvalDate,
      validity,
      document,
    };
    const expenses = { date, cost, nextDate, talkingPoint };

    const document_history = {
      document1,
      documentNo,
      issuedBy,
      issuedDate,
      validation,
      uploadDocument,
    };
    const formData = new FormData();
    for (const [key, value] of Object.entries(rest)) {
      if (key === "generate_agreement" || key === "upload_document")
        formData.append(key, value[0]);
      formData.append(key, value);
    }
    formData.append("approvals", JSON.stringify(approvals));
    formData.append("expenses", JSON.stringify(expenses));
    formData.append("document_history", JSON.stringify(document_history));

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/pre_project_new_handler/`,
      data: formData,
    });
    return res.data;
  } catch (error) {
    const errorMessage = Object.keys(error.response.data).join(",");
    throw new Error(`Please provide ${errorMessage}`);
  }
}

export async function getPreProject() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/pre_project_new_handler/`,
    });
    console.log(res);
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function shiftProject(id) {
  console.log(id);
  try {
    console.log(id);
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/confirm_project_handler/${id}/`,
      // data: {
      //   id,
      // },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
export async function deleteProjectAPI(id) {
  console.log(id);
  try {
    console.log(id);
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/delete_pre_project_handler/${id}/`,
      // data: {
      //   id,
      // },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
export async function deleteConfirmProjectAPI(id) {
  console.log(id);
  try {
    console.log(id);
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/api/delete_confirm_project_handler/${id}/`,
      // data: {
      //   id,
      // },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function getConfirmPreProject() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/api/confirm_project_handler/`,
    });
    console.log(res);
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
