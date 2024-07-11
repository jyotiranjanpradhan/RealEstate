import axios from "axios";
import { useShiftProject } from "../../hooks/preProject/useShftProject";

function PreProjectRow({ project }) {
  const { isPending, shiftProject } = useShiftProject();

  console.log(project);

  async function confirmProject(id) {
    shiftProject(id);
  }

  return (
    <tr>
      <td>{project.id}</td>
      <td>PR2024358</td>
      <td>Intitiated</td>
      <td>2024-03-16</td>
      <td>{project.project_name}</td>
      <td>{project.project_type}</td>
      <td>No Vendor</td>
      <td>Final</td>
      <td>52,468</td>
      <td>{project.project_area}</td>
      <td>No Advisor</td>
      <td>{project.project_location}</td>
      <td>Initiated</td>
      <td>Project is Finalized </td>
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
        {/* <a
          href=""
          className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Edit"
        >
          <i className="mdi mdi-pencil-outline"></i>
        </a> */}
        <a
          href=""
          className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Delete"
        >
          <i className="mdi mdi-trash-can"></i>
        </a>
        <a
          href=""
          class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Edit"
        >
          <i class="bi bi-x-lg" style={{ fontSize: "12px", color: "red" }}></i>
        </a>
        <button
          onClick={() => confirmProject(project.id)}
          class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Edit"
        >
          <i
            class="bi bi-check2"
            style={{ fontSize: "14px", color: "green" }}
          ></i>
        </button>
      </td>
    </tr>
  );
}

export default PreProjectRow;
