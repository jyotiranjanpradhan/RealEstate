function BranchRow({ branch }) {
  console.log(branch);
  return (
    <tr>
      <td>1</td>
      <td>Angan bashera</td>
      <td>1256</td>
      <td>Corporate Office</td>
      <td>IN1578</td>
      <td>Agency</td>
      <td>
        {/* <a
          href=""
          className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="View"
        >
          <i className="mdi mdi-eye"></i>
        </a>
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
        >
          <i className="mdi mdi-trash-can"></i>
        </a> */}
      </td>
    </tr>
  );
}

export default BranchRow;
