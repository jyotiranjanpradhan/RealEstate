function User() {
  return (
    <li class="nav-item navbar-dropdown dropdown-user dropdown">
      <a
        class="nav-link dropdown-toggle hide-arrow"
        href="javascript:void(0);"
        data-bs-toggle="dropdown"
      >
        <div class="avatar avatar-online">
          <img
            src="assets/img/avatars/1.png"
            alt=""
            class="w-px-40 h-auto rounded-circle"
          />
        </div>
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <a
            class="dropdown-item waves-effect"
            href="pages-account-settings-account.html"
          >
            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <div class="avatar avatar-online">
                  <img
                    src="assets/img/avatars/1.png"
                    alt=""
                    class="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </div>
              <div class="flex-grow-1">
                <span class="fw-medium d-block">John Doe</span>
                <small class="text-muted">Admin</small>
              </div>
            </div>
          </a>
        </li>
        <li>
          <div class="dropdown-divider"></div>
        </li>
        <li>
          <a class="dropdown-item waves-effect" href="#">
            <i class="mdi mdi-account-outline me-2"></i>
            <span class="align-middle">My Profile</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item waves-effect" href="goals_targets.php">
            <i class="mdi mdi-account-outline me-2"></i>
            <span class="align-middle">My Goal Sheet</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item waves-effect" href="goals_targets.php">
            <i class="mdi mdi-account-outline me-2"></i>
            <span class="align-middle">My Target Sheet</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item waves-effect" href="#">
            <i class="mdi mdi-account-outline me-2"></i>
            <span class="align-middle">My Follow Up</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item waves-effect" href="#">
            <i class="mdi mdi-account-outline me-2"></i>
            <span class="align-middle">My Earnings</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item waves-effect" href="#">
            <i class="mdi mdi-account-outline me-2"></i>
            <span class="align-middle">My To do List</span>
          </a>
        </li>
        <li>
          <div class="dropdown-divider"></div>
        </li>

        <li>
          <div class="dropdown-divider"></div>
        </li>
        <li>
          <a
            class="dropdown-item waves-effect"
            href="login.php"
            target="_blank"
          >
            <i class="mdi mdi-logout me-2"></i>
            <span class="align-middle">Log Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default User;
