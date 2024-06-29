function LightItem({ icon, light }) {
  return (
    <li>
      <a
        class="dropdown-item waves-effect"
        href="javascript:void(0);"
        data-theme="light"
      >
        <span class="align-middle">
          <i class={`mdi mdi-${icon} me-2`}></i>
          {light}
        </span>
      </a>
    </li>
  );
}

export default LightItem;
