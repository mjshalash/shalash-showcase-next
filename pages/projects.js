//Component Imports
import Template from "../src/components/common/Template";
import Navbar from "../src/components/Navbar";
import Project from "../src/components/project-page/Project";

const Projects = () => {
  return (
    <Template
      title={"Shalash Showcase"}
      className={"container-fluid css-page-main-content"}
    >
      {/* Project Gallery */}
      <div className="d-flex flex-column w-100">
        {/* Grid Heading */}
        <div className="d-flex flex-row justify-content-center pt-3">
          <h4>Projects</h4>
        </div>

        <div className="d-flex flex-column align-items-center">
          {/* Row 1 */}
          <div className="d-flex flex-row mb-4">
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 1"}
            />
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 2"}
            />
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 3"}
            />
          </div>

          {/* Row 2 */}
          <div className="d-flex flex-row mb-4">
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 4"}
            />
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 5"}
            />
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 6"}
            />
          </div>

          {/* Row 3 */}
          <div className="d-flex flex-row mb-4">
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 7"}
            />
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 8"}
            />
            <Project
              img={"../static/img/Project-Gallery/placeholder-image.png"}
              title={"Project 9"}
            />
          </div>
        </div>
      </div>
    </Template>
  );
};
export default Projects;
