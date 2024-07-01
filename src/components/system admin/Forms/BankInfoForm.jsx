import { useState } from "react";
import { useForm } from "react-hook-form";
import BankSubForm from "../subForms/BankSubForm";
import { useAddBankInfo } from "../../../hooks/systemAdmin/useAddBankInfo";
import { Link } from "react-router-dom";

function BankInfoForm() {
  const { isPending, mutate } = useAddBankInfo();
  const [componentCount, setComponentCount] = useState(1);

  function addComponent() {
    setComponentCount(componentCount + 1);
  }
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (key === "bank_logo") formData.append(`${key}`, value[0]);
      else formData.append(`${key}`, value);
    }
    mutate(formData);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">System Admin /</span> Bank Info
        </h5>
        <div class="mb-2 text-end">
          <Link
            to="/systemAdmin/bankInfo"
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span class="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mb-4">
          <div class="card">
            <h5 class="card-header">Bank Info</h5>
            <div class="card-body">
              <form class="form-repeater" onSubmit={handleSubmit(onSubmit)}>
                {componentCount &&
                  Array.from({ length: componentCount }, (_, index) => (
                    <BankSubForm key={index} register={register} />
                  ))}
                <div class="col-12 d-flex justify-content-between">
                  <button
                    onClick={addComponent}
                    class="btn btn-primary waves-effect waves-light"
                    data-repeater-create=""
                  >
                    <i class="mdi mdi-plus me-1"></i>
                    <span class="align-middle">Add</span>
                  </button>
                  <button class="btn btn-primary btn-submit waves-effect waves-light">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankInfoForm;
