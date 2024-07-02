function Buttons({ show, setShow }) {
  return (
    <>
      <div className="col-md-2 col-12 d-flex align-items-center mb-0">
        <button
          onClick={() => setShow(!show)}
          className="btn btn-outline-danger waves-effect"
          data-repeater-delete=""
        >
          <i className="mdi mdi-close me-1"></i>
          <span className="align-middle">Delete</span>
        </button>
      </div>
      {/* <div className="col-md-2 col-12 d-flex align-items-center mb-0">
        <button
          className="btn btn-primary waves-effect waves-light"
          data-repeater-create=""
        >
          <i className="mdi mdi-plus me-1"></i>
          <span className="align-middle">Add</span>
        </button>
      </div> */}
    </>
  );
}

export default Buttons;
