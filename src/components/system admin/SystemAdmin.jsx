import { Outlet } from "react-router-dom";

function SystemAdmin() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <Outlet />
    </div>
  );
}

export default SystemAdmin;
