import { useGetBankInfo } from "../../hooks/systemAdmin/useGetBankInfo";
import BankInfoRow from "./subItem/BankInfoRow";
import Title from "./subItem/Title";

function BankInfo() {
  const { isPending, bank } = useGetBankInfo();
  console.log(bank);
  return (
    <>
      <Title value="Bank Info" to="/systemAdmin/bankInfoForm" />
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Bank Info :</h5>
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <table className="table table-bordered" id="all_request_table">
              <thead className="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Bank Name</td>
                  <td>Branch Name</td>
                  <td>IFSC Code</td>
                  <td>Account Name</td>
                  <td>Account No</td>
                  <td>Bank Logo</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {bank?.map((bank, index) => (
                  <BankInfoRow bank={bank} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Modal -->
                <div className="modal fade" id="modalTop" tabindex="-1">
                  <div className="modal-dialog">
                    <form className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="modalTopTitle">Add Department Name</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col mb-4 mt-2">
                            <div className="form-floating form-floating-outline">
                              <input type="text" id="" className="form-control" placeholder="Department Name">
                              <label for="nameSlideTop">Department Name</label>
                            </div>
                          </div>
                        </div>
                        <div className="row g-2">
                          <div className="col">
                              <label for="defaultInput" className="form-label">Status</label>
                              <div className="col">
                                  <div className="form-check form-check-inline">
                                    <input name="yes" className="form-check-input" type="radio" value="" id="" checked="">
                                    <label className="form-check-label" for="collapsible-payment-cc">Active</label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input name="no" className="form-check-input" type="radio" value="" id="">
                                    <label className="form-check-label" for="collapsible-payment-cash">InActive</label>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary waves-effect" data-bs-dismiss="modal">
                          Close
                        </button>
                        <button type="button" className="btn btn-primary waves-effect waves-light">Save</button>
                      </div>
                    </form>
                  </div>
                </div> */}
    </>
  );
}

export default BankInfo;
