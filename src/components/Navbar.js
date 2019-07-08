import Router from "../Router";
const router = Object.keys(Router);
const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    {/* Logo/Picture */}
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Malik Shalash</span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="../../static/img/MalikLogo2.jpg"
          alt=""
        />
      </span>
    </a>

    {/* Mobile Navbar Toggle */}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    {/* Navbar Menu Items (mapped from Router)  */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        {router.map((route, index) => (
          <li className="css-nav-item" key={index}>
            <a href={Router[route]} className="css-nav-link">
              {route}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
export default Navbar;
