function BankInfoRow({ bank }) {
  console.log(bank);
  return (
    <tr>
      <td>{bank.id}</td>
      <td>{bank.bank_name}</td>
      <td>{bank.branch_name}</td>
      <td>{bank.IFSC}</td>
      <td>{bank.account_name}</td>
      <td>{bank.account_no}</td>
      <td>
        <img src="assets/img/icons/brands/sbi.png" alt="Avatar" />
      </td>
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

export default BankInfoRow;