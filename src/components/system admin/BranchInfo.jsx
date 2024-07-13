import { useGetBranch } from "../../hooks/systemAdmin/useGetBranch";
import BranchRow from "./subItem/BranchRow";
import Title from "./subItem/Title";

function BranchInfo() {
  const slno=1
  const { isPending, branch } = useGetBranch();
  console.log(branch ?.branch_details);
  return (
    <>
      <Title value="Branch Info" to="/systemAdmin/branchInfoForm" />
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Branch Info :</h5>
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <table className="table table-bordered" id="all_request_table">
              <thead className="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Branch Name</td>
                  <td>Branch ID</td>
                  <td>Branch Type</td>
                  <td>Incorporation No</td>
                  <td>Incorporation Agency</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {branch ?.branch_details?.map((branch, index) => (
                  <tr>
                  <td >{index+1}</td>
                  <td>{branch.branch_name}</td>
                  <td>{branch.branch_id}</td>
                  <td>{branch.branch_type}</td>
                  <td>{branch.incorporation_no}</td>
                  <td>{branch.incorporation_age}</td>
                  <td>Action</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default BranchInfo;
