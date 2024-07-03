import Dropdown from "./navbar/Dropdown";
import Light from "./navbar/Light";

function Navbar() {
  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i className="mdi mdi-menu mdi-24px"></i>
        </a>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <div className="navbar-nav align-items-center">
          <div className="nav-item navbar-search-wrapper mb-0">
            <a
              className="nav-item nav-link search-toggler fw-normal px-0"
              href="#"
            >
              <i className="mdi mdi-magnify mdi-24px scaleX-n1-rtl"></i>
              <span className="d-none d-md-inline-block text-muted">
                Search
              </span>
            </a>
          </div>
        </div>

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <Light />
          <Dropdown />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
