import { useForm } from "react-hook-form";

function AddPaymentRecipt() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Sales /</span> Payment Recipt
        </h5>
        <div className="mb-2 text-end">
          <a
            href="javascript: history.go(-1)"
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span className="mdi mdi-keyboard-backspace"></span>
          </a>
        </div>
      </div>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
            <h5 className="mb-0">Payment recipt:</h5>
            {/* <!--  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                      <span><i className="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                    </button> --> */}
          </div>
          <div className="card-body">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="customerId"
                    {...register("customerId")}
                    placeholder="Customer ID"
                    autofocus=""
                  />
                  <label for="customer_id">Customer ID</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="enquiryId"
                    {...register("enquiryId")}
                    placeholder="Enquiry ID"
                  />
                  <label for="enquiry_id">Enquiry ID</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="quoteId"
                    {...register("quoteId")}
                    placeholder="Quote ID"
                  />
                  <label for="quote_id">Quote ID</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="salesId"
                    {...register("salesId")}
                    placeholder="Sales ID"
                  />
                  <label for="sales_id">Sales ID</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    {...register("date")}
                    placeholder="Date"
                  />
                  <label for="date">Date</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="project"
                    {...register("project")}
                    placeholder="Project"
                  />
                  <label for="project">Project</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="product"
                    {...register("product")}
                    placeholder="Product"
                  />
                  <label for="product">Product</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="paymentReceiptNumber"
                    {...register("paymentReceiptNumber")}
                    placeholder="Payment receipt Number"
                  />
                  <label for="payment_receipt_number">
                    Payment receipt Number
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="totalAmount"
                    {...register("totalAmount")}
                    placeholder="Total Amount"
                  />
                  <label for="total_amount">Total Amount</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="recievedAmount"
                    {...register("recievedAmount")}
                    placeholder="Received Amount"
                  />
                  <label for="received_amount">Received Amount</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="modeOfPayment"
                    {...register("modeOfPayment")}
                    placeholder="Mode of Payment"
                  />
                  <label for="mode_of_payment">Mode of Payment</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="transactionId"
                    {...register("transactionId")}
                    placeholder="Transaction ID"
                  />
                  <label for="transaction_id">Transaction ID</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="platform"
                    {...register("platform")}
                    placeholder="Platform"
                  />
                  <label for="platform">Platform</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="accountName"
                    {...register("accountName")}
                    placeholder="Account Name"
                  />
                  <label for="account_name">Account Name</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="accountNumber"
                    {...register("accountNumber")}
                    placeholder="Account Number"
                  />
                  <label for="account_number">Account Number</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="balanceAmount"
                    {...register("balanceAmount")}
                    placeholder="Balance Amount"
                  />
                  <label for="balance_amount">Balance Amount</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="date"
                    id="nextPayDate"
                    {...register("nextPayDate")}
                    placeholder="Next Pay Date"
                  />
                  <label for="next_pay_date">Next Pay Date</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="mediumOfPayment"
                    {...register("mediumOfPayment")}
                    placeholder="Medium of Payment"
                  />
                  <label for="medium_of_payment">Medium of Payment</label>
                </div>
              </div>
            </div>
            <button className="btn btn-primary ms-auto waves-effect waves-light mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPaymentRecipt;
