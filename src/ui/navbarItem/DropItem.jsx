function DropItem() {
  return (
    <div class="row row-bordered overflow-visible g-0">
      <div class="dropdown-shortcuts-item col">
        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
          <i class="mdi mdi-calendar fs-4"></i>
        </span>
        <a href="app-calendar.html" class="stretched-link">
          Calendar
        </a>
        <small class="text-muted mb-0">Appointments</small>
      </div>
      <div class="dropdown-shortcuts-item col">
        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
          <i class="mdi mdi-file-document-outline fs-4"></i>
        </span>
        <a href="app-invoice-list.html" class="stretched-link">
          Invoice App
        </a>
        <small class="text-muted mb-0">Manage Accounts</small>
      </div>
    </div>
  );
}

export default DropItem;
