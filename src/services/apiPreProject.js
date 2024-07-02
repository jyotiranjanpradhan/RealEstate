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
    console.log(rest);
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
    console.log("aman");
    const res = await axios({
      method: "POST",
      url: "http://20.244.48.88:8000/api/pre_project_new_handler/",
      data: formData,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPreProject() {
  try {
    const res = await axios({
      method: "GET",
      url: "http://20.244.48.88:8000/api/pre_handler/",
    });
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
