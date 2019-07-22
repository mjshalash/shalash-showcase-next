import Template from "../src/components/common/Template";
import Navbar from "../src/components/Navbar";
import Skill from "../src/components/skills-page/Skill";

const Skills = () => {
  return (
    <Template
      title={"Shalash Showcase"}
      className={"container-fluid css-page-main-content"}
    >
      <div className="d-flex flex-column">
        {/* Heading */}
        <div className="d-flex flex-row ml-2">
          <h2>Skills</h2>
        </div>

        {/* TODO: Add Colors */}

        <div className="d-flex flex-row">
          {/* Web Development */}
          <div className="d-flex flex-column align-items-center ml-2 css-web-col">
            <h4>Web Development</h4>

            {/*HTML*/}
            <Skill
              skillIcon={"fab fa-html5 css-skill-icon"}
              skillTitle={"HTML5"}
            />

            {/*CSS3*/}
            <Skill
              skillIcon={"fab fa-css3-alt css-skill-icon"}
              skillTitle={"CSS3"}
            />

            {/*Javascript*/}
            <Skill
              skillIcon={"fab fa-js css-skill-icon"}
              skillTitle={"Javascript"}
            />

            {/*node.js*/}
            <Skill
              skillIcon={"fab fa-node css-skill-icon"}
              skillTitle={"Node.js"}
            />

            {/*React.js*/}
            <Skill
              skillIcon={"fab fa-react css-skill-icon"}
              skillTitle={"React.js"}
            />
          </div>

          {/* Database */}
          <div className="d-flex flex-column align-items-center ml-2 css-db-col">
            <h4>Database/Back-End</h4>

            {/*SQL*/}
            <Skill
              skillIcon={"fas fa-database css-skill-icon"}
              skillTitle={"SQL"}
            />

            {/*SQL*/}
            <Skill
              skillIcon={"fas fa-database css-mongo css-skill-icon"}
              skillTitle={"MongoDB"}
            />
          </div>

          {/* Utilities */}
          <div className="d-flex flex-column align-items-center ml-2 css-util-col">
            <h4>Utilities</h4>
            {/*Git*/}
            <Skill
              skillIcon={"fab fa-git css-skill-icon"}
              skillTitle={"Version Control"}
            />
          </div>
        </div>
      </div>
    </Template>
  );
};
export default Skills;
