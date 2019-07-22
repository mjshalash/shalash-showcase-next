import Template from "../src/components/common/Template";
import Navbar from "../src/components/Navbar";
import Skill from "../src/components/skills-page/Skill";

const Skills = () => {
  return (
    <Template
      title={"Shalash Showcase"}
      className={"container-fluid css-page-main-content"}
    >
      <div className="d-flex flex-column css-education-items-col">
        {/* Heading */}
        <div className="d-flex flex-row">
          <h2>Skills</h2>
        </div>

        {/* University of Louisville - Master's*/}
        <Skill
          skillIcon={"fab fa-html5 css-skill-icon"}
          skillTitle={"HTML"}
        />

        {/* University of Louisville - Bachelor's*/}
        <Skill
          
        />

        {/* Martha Layne Collins High School */}
        <Skill
          
        />
      </div>
    </Template>
  );
};
export default Skills;
