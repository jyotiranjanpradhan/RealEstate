import axios from "axios";

export async function createNewPreProject(data) {
  try {
    console.log("i am data:", data);
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
    const approvals = [
      {
        approvalBody,
        applyDate,
        employee,
        agency,
        approvalDate,
        validity,
        document,
      },
    ];
    const expenses = [{ date, cost, nextDate, talkingPoint }];

    const document_history = [
      {
        document1,
        documentNo,
        issuedBy,
        issuedDate,
        validation,
        uploadDocument,
      },
    ];

    console.log(rest.generate_agreement, rest.upload_document);
    const actualData = { ...rest, approvals, expenses, document_history };
    const res = await axios({
      method: "POST",
      url: "http://20.244.48.88:8000/pre_project_new_handler/",
      data: actualData,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
