//Component Imports
import Template from "../src/components/common/Template";
import Navbar from "../src/components/Navbar";
import Project from "../src/components/project-page/Project";

const Projects = () => {
  return (
    <Template title={"Shalash Showcase"} className={"container-fluid"}>
      <div className="d-flex flex-row">
        {/* Navigation Sidebar */}
        <div className="d-flex flex-column mr-3">
          <Navbar siteName={"Shalash Showcase"} />
        </div>

        {/* Project Gallery */}
        <div className="d-flex flex-column w-100">
          {/* Grid Heading */}
          <div className="d-flex flex-row justify-content-center pt-3">
            <h4>Projects</h4>
          </div>

          {/* Project Gallery */}
          <div class="d-flex flex-column align-items-center">
            <div class="d-flex flex-row mb-4">
              <Project />
              <Project />
              <Project />
            </div>
            <div class="d-flex flex-row mb-4">
              <Project />
              <Project />
              <Project />
            </div>
            <div class="d-flex flex-row mb-4">
              <Project />
              <Project />
              <Project />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
export default Projects;
