import { useState } from "react";
import { useForm } from "react-hook-form";
import BoardSubForm from "../subForms/BoardSubForm";
import { useAddBoard } from "../../../hooks/systemAdmin/useAddBoard";
import { Link } from "react-router-dom";

function Board() {
  const { isPending, mutate } = useAddBoard();
  const [componentCount, setComponentCount] = useState(1);

  // const [forms, setForms] = useState([{ id: 0, data: {} }]);
  const { register, handleSubmit } = useForm();

  // function deleteComponent(index) {
  //   console.log(index);
  //   setForms([
  //     ...forms,
  //     forms.filter((el, i) => {
  //       console.log("id", el.id);
  //       return i !== index;
  //     }),
  //   ]);
  // }

  function addComponent() {
    // setForms([...forms, { id: forms.length, data: {} }])
    setComponentCount(componentCount + 1);
  }
  function onSubmit(data) {
    mutate(data);
    console.log(data);
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">System Admin /</span> Board
          Directors
        </h5>
        <div className="mb-2 text-end">
          <Link
            to="/systemAdmin/boardDirectors"
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span className="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card">
            <h5 className="card-header">Board Directors</h5>
            <div className="card-body">
              <form className="form-repeater" onSubmit={handleSubmit(onSubmit)}>
                {componentCount &&
                  Array.from({ length: componentCount }, (_, index) => (
                    <BoardSubForm key={index} register={register} />
                  ))}
                {/* {forms.map((el, index) => (
                  <BoardSubForm
                    key={index}
                    register={register}
                    deleteComponent={() => deleteComponent(index)}
                  />
                ))} */}
                <div className="col-12 d-flex justify-content-between">
                  <button
                    type="button"
                    onClick={addComponent}
                    className="btn btn-primary waves-effect waves-light"
                  >
                    <i className="mdi mdi-plus me-1"></i>
                    <span className="align-middle">Add</span>
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-submit waves-effect waves-light"
                  >
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

export default Board;
