function DirectorRow({ director }) {
  
  return (
    <tr>
      <td>{director.id}</td>
      <td>{director.name}</td>
      <td>{director.designation}</td>
      <td>{director.date_of_join}</td>
      <td>{director.date_of_leave}</td>
      <td>
        <a
          href=""
          class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="View"
        >
          <i class="mdi mdi-eye"></i>
        </a>
        <a
          href=""
          class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Edit"
        >
          <i class="mdi mdi-pencil-outline"></i>
        </a>
        <a
          href=""
          class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Delete"
        >
          <i class="mdi mdi-trash-can"></i>
        </a>
      </td>
    </tr>
  );
}

export default DirectorRow;
