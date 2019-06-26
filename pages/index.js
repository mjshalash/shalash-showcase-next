import { Template } from "../src/components/common";
const Index = () => (
  <Template
    title={"Shalash Showcase"}
    className={"container mx-auto mt-5 h-100"}
  >
    {/* Content Section */}
    <div className="content" id="ajax-content">
      <div className="text-intro" id="site-type">
        <h1>Malik Shalash's</h1>
        <h1 className="typewrite">
          <span>Projects</span>
        </h1>
        <p>
          Please feel free to explore my digital portfolio. This site includes
          various works in which I had a substantial role in creating.
        </p>
      </div>

      <ul className="portfolio-grid" id="portfolio-sidebar">
        <li
          className="grid-item"
          data-jkit="[show:delay=3000;speed=500;animation=fade]"
        >
          <img src="static/img/MalikLogo2.jpg" />
          <a className="ajax-link" href="#">
            <div className="grid-hover">
              <h1>Sample</h1>
              <p>Project</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    {/* End Content Section */}
  </Template>
);

export default Index;
