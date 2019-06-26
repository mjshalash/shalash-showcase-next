import Router from "../Router";
const router = Object.keys(Router);
const Navbar = ({ siteName }) => (
  <span>
    <header id="fullscreen">
      <div className="logo d-none" id="full">
        <a className="ajax-link" href="index.html">
          {siteName}
        </a>
      </div>

      <div className="menu-index d-none" id="button">
        <i className="fa fa-bars" />
      </div>
    </header>

    <header className="boxed" id="header-white">
      <div className="d-flex flex-row header-margin">
        <div className="logo">
          <img className="nav-logo" src="static/img/MalikLogo2.jpg" />
        </div>
        <div className="logo">
          <a className="ajax-link" href="index.html">
            {siteName}
          </a>
        </div>
        <ul className="header-nav">
          <li>
            <a className="ajax-link" href="#">
              Projects
            </a>
            <ul>
              <li>
                <a className="ajax-link" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="ajax-link" href="#">
                  Single project
                </a>
              </li>
              <li>
                <a className="ajax-link" href="#">
                  Single project fullscreen
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="ajax-link" href="#">
              About me
            </a>
          </li>
          <li>
            <a className="ajax-link" href="#">
              Contact
            </a>
          </li>
        </ul>

        <ul className="social-icon">
          <div className="social-index">
            <li>
              <a href="https://www.facebook.com/thomsooncom">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/TomaszMazurczak">
                <i className="fa fa-behance" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </header>

    <div className="clear" />
  </span>
);
export default Navbar;
