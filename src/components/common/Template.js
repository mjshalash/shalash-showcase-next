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
        crossorigin="anonymous"
      />

      {/* Scripts */}
      <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"
      />
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      />
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
        integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o"
        crossorigin="anonymous"
      />
    </Head>
    <Navbar siteName={"Shalash Showcase"} />
    <br />
    <div>{children}</div>
  </span>
);
export default Template;
