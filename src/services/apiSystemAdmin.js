import axios from "axios";

export async function createBoard(data) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://20.244.48.88:8000/api/system_board_of_directors_handler/",
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
      url: "http://20.244.48.88:8000/api/system_board_of_directors_handler/",
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
      url: "http://20.244.48.88:8000/api/system_bank_details_handler/",
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
      url: "http://20.244.48.88:8000/api/system_bank_details_handler/",
    });
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
