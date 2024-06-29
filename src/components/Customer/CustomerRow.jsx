import { Link } from "react-router-dom";

function CustomerRow({ customer }) {
  console.log(customer);
  return (
    <tr className={customer.id % 2 === 0 ? "even" : "odd"}>
      <td className="sorting_1">{customer.id}</td>
      <td>{customer.name}</td>
      <td>+91 {customer.phone}</td>
      <td>{customer.email}</td>
      <td>{customer.gender === "M" ? "male" : "female"}</td>
      <td>{customer.present_address}</td>
      <td>{customer.present_district}</td>
      <td>{customer.present_pincode}</td>
      <td>-</td>
      <td>
        <div className="d-inline-block">
          <Link
            to=""
            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="View"
          >
            <i className="mdi mdi-eye"></i>
          </Link>
          <Link
            to=""
            className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Edit"
          >
            <i className="mdi mdi-pencil-outline"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default CustomerRow;
