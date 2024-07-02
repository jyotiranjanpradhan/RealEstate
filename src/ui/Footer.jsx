function Footer() {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl">
        <div className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
          <div className="mb-2 mb-md-0">
            ©2024 All Rights Reserved. Powered By
            <a href="#" target="_blank" className="footer-link fw-medium">
              IYROERP
            </a>
          </div>
          <div className="d-none d-lg-inline-block">
            <a href="#" className="footer-link me-4" target="_blank">
              License
            </a>
            <a href="#" target="_blank" className="footer-link me-4">
              More Themes
            </a>
            <a href="#" target="_blank" className="footer-link me-4">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
