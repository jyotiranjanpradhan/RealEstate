import { Link } from "react-router-dom";

function Title({ value, to }) {
  return (
    <div class="card-header d-flex justify-content-between align-items-center py-2">
      <h5>
        <span class="text-muted fw-light">System Admin /</span>
        {value}
      </h5>
      <div class="mb-2 text-end">
        <Link
          to={to}
          class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
        >
          <span class="mdi mdi-plus"></span>
          {value}
        </Link>
      </div>
    </div>
  );
}

export default Title;
