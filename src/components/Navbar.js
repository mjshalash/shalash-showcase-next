import Router from "../Router.js";
const router = Object.keys(Router);
const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" //navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    {/* Logo/Picture */}
    <a className="navbar-brand js-scroll-trigger" href="#intro">
      <span className="d-block d-lg-none fnt-roboto">Shalash Showcase</span>
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
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger fnt-roboto" href="#intro">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger fnt-roboto" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger fnt-roboto" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link js-scroll-trigger fnt-roboto"
            href="#education"
          >
            Education
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link js-scroll-trigger fnt-roboto"
            href="#experience"
          >
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger fnt-roboto" href="#skills">
            Skills
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
