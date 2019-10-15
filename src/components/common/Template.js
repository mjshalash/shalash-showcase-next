import Head from "next/head";
import Navbar from "../Navbar";
import Package from "../../../package.json";
const { name } = Package;
const Template = ({ title, className, children }) => (
  <span id="template">
    <Head>
      <title>{title || name}</title>
      <meta charSet="utf-8" />
      <title>Shalash Showcase</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Stylesheets */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossOrigin="anonymous"
      />

      {/* Scripts */}
      <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossOrigin="anonymous"
      />
      <script
        src="http://code.jquery.com/ui/1.12.0/jquery-ui.js"
        integrity="sha256-0YPKAwZP7Mp3ALMRVB2i8GXeEndvCq3eSl/WsAl1Ryk="
        crossOrigin="anonymous"
      />

      {/* Custom scripts for scrolling */}
      <script src="../../static/js/resume.js" />

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous"
      />

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
        integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o"
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../../static/css/fontawesome-free/css/all.min.css"
      />

      {/* My Stylesheets */}
      {/* Index */}
      <link
        rel="stylesheet"
        type="text/css"
        href="../../static/css/index.css"
      />

      {/* Navbar */}
      <link
        rel="stylesheet"
        type="text/css"
        href="../../static/css/navbar.css"
      />

      {/* Home Page */}
      <link
        rel="stylesheet"
        type="text/css"
        href="../../static/css/home-section.css"
      />

      {/* About Page */}
      <link
        rel="stylesheet"
        type="text/css"
        href="../../static/css/about-section.css"
      />

      {/* Education History Page */}
      <link
        rel="stylesheet"
        type="text/css"
        href="../../static/css/educationhist-section.css"
      />

      {/* Skills Page */}
      <link
        rel="stylesheet"
        type="text/css"
        href="../../static/css/skills-section.css"
      />

      {/* Components */}
      {/* Project */}
      <link
        rel="stylesheet"
        type="text/css"
        href="../../static/css/components/Project.css"
      />
    </Head>

    <div className="d-flex flex-row">
      {/* Navigation Sidebar */}
      <div className="d-flex flex-column">
        <Navbar siteName={"Shalash Showcase"} />
      </div>
  
      {/* Page Content */}
      <div className="d-flex flex-column css-main-page-content">{children}</div>
    </div>
  </span>
);
export default Template;
