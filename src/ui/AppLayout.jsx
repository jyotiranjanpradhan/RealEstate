import { Outlet } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
function AppLayout() {
  return (
    <>
      <Main>
        <Sidebar />
        <div class="layout-page">
          <Navbar />
          <div class="content-wrapper">
            <Outlet />
            <Footer />
          </div>
        </div>
      </Main>
    </>
  );
}

export default AppLayout;
