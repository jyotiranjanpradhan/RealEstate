import { Link } from "react-router-dom";
import { useShiftProject } from "../../hooks/preProject/useShftProject";

function ConfirmProjectRow({ confirmProject }) {
  const {deleteconfirmProject } = useShiftProject();
  console.log(confirmProject);
  async function deleteConfirmProject(id) {
    deleteconfirmProject(id);
    console.log(id);
  }
  return (
    <tr>
      <td>{confirmProject.id}</td>
      <td>PR2024358</td>
      <td>Intitiated</td>
      <td>{confirmProject.approvals?.applyDate}</td>
      <td>{confirmProject.project_name}</td>
      <td>{confirmProject.project_type}</td>
      <td>No Vendor</td>
      <td>Final</td>
      <td>52,468</td>
      <td>{confirmProject.project_area}</td>
      <td>No Advisor</td>
      <td>{confirmProject.project_location}</td>
      <td>Initiated</td>
      <td>
        <Link to={`${process.env.REACT_APP_URL_BASE}/${confirmProject.upload_document}`}>{confirmProject.upload_document}</Link>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-xs rounded-pill btn-label-primary waves-effect"
          data-bs-toggle="modal"
          data-bs-target="#modalTop"
        >
          Check List
        </button>
      </td>
      <td>Status</td>
      <td>
        <a
          href=""
          className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Edit"
        >
          <i className="mdi mdi-pencil-outline"></i>
        </a>
        <a
          href=""
          className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Delete"
          onClick={() => deleteConfirmProject(confirmProject.id)}
        >
          <i className="mdi mdi-trash-can"></i>
        </a>
      </td>
    </tr>
  );
}

export default ConfirmProjectRow;
