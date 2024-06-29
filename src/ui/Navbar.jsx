import Dropdown from "./navbar/Dropdown";
import Light from "./navbar/Light";

function Navbar() {
  return (
    <nav
      class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i class="mdi mdi-menu mdi-24px"></i>
        </a>
      </div>

      <div
        class="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <div class="navbar-nav align-items-center">
          <div class="nav-item navbar-search-wrapper mb-0">
            <a class="nav-item nav-link search-toggler fw-normal px-0" href="#">
              <i class="mdi mdi-magnify mdi-24px scaleX-n1-rtl"></i>
              <span class="d-none d-md-inline-block text-muted">Search</span>
            </a>
          </div>
        </div>

        <ul class="navbar-nav flex-row align-items-center ms-auto">
          <Light />
          <Dropdown />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
