function Buttons({ show, setShow }) {
  return (
    <>
      <div class="col-md-2 col-12 d-flex align-items-center mb-0">
        <button
          onClick={() => setShow(!show)}
          class="btn btn-outline-danger waves-effect"
          data-repeater-delete=""
        >
          <i class="mdi mdi-close me-1"></i>
          <span class="align-middle">Delete</span>
        </button>
      </div>
      {/* <div class="col-md-2 col-12 d-flex align-items-center mb-0">
        <button
          class="btn btn-primary waves-effect waves-light"
          data-repeater-create=""
        >
          <i class="mdi mdi-plus me-1"></i>
          <span class="align-middle">Add</span>
        </button>
      </div> */}
    </>
  );
}

export default Buttons;
