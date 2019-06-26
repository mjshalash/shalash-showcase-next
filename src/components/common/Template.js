import Head from "next/head";
import Navbar from "../Navbar";
import Package from "../../../package.json";
const { name } = Package;
const Template = ({ title, className, children }) => (
  <span id="template">
    <Head>
      <title>{title || name}</title>
      <meta charset="utf-8" />
      <title>Shalash Showcase</title>
      <meta
        name="description"
        content="Thomsoon version 2 with classic menu navigation - Portfolio with grid HTML5 and CSS3 modern simplicity style template. Check my portfolio. Download free now with file Photoshop! "
      />
      <meta name="keywords" content="amore, simplicity, theme, html5" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="thomsoon.com" />
      <link rel="stylesheet" href="./static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="./static/css/reset.css" />
      <link rel="stylesheet" href="./static/css/style.css" />
      <link rel="stylesheet" href="./static/css/style-responsive.css" />
      <link rel="stylesheet" href="./static/css/ms-navbar.css" />

      <script src="../../static/js/jquery.min.js" />
      <script src="./static/js/jquery.easing.min.js" />
      <script
        src="static/js/modernizr.custom.42534.js"
        type="text/javascript"
      />
      <script src="static/js/jquery.waitforimages.js" type="text/javascript" />
      <script src="static/js/typed.js" type="text/javascript" />
      <script src="static/js/masonry.pkgd.min.js" type="text/javascript" />
      <script src="static/js/imagesloaded.pkgd.min.js" type="text/javascript" />
      <script src="static/js/jquery.jkit.1.2.16.min.js" />
      <script src="static/js/script.js" type="text/javascript" />
    </Head>
    <Navbar siteName={"Shalash Showcase"} />
    <br />
    <div className={className}>{children}</div>
    {/* GLOBAL CSS */}
    <style jsx>
      {`
        #template {
          font-family: monospace;
        }
      `}
    </style>
  </span>
);
export default Template;
