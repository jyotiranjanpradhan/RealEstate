import { Outlet } from "react-router-dom";

function SystemAdmin() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <Outlet />
    </div>
  );
}

export default SystemAdmin;
