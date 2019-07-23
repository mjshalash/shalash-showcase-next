import Template from "../src/components/common/Template";

import Project from "../src/components/project-page/Project";
import Education from "../src/components/education-page/Education";
import Skill from "../src/components/skills-page/Skill";

const Index = () => {
  return (
    <Template
      title={"Shalash Showcase"}
      className={"container-fluid css-page-main-content"}
    >
      <div className="d-flex flex-column">
        {/* Introduction */}
        <div className="d-flex flex-row">
          <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="intro"
          >
            {/* Introduction Content */}
            <div className="w-100">
              <h1 className="mb-0">
                Malik
                <span className="text-primary">Shalash</span>
              </h1>
              <div className="subheading mb-5">
                <a className="css-email-link" href="mailto:name@email.com">
                  mjshalash@rci4u.com
                </a>
              </div>
              <p className="lead mb-5">
                I have had a passion for programming since my parent's bought me
                my first computer. Technology transforms our environment every
                single day. Because of this, programming is the language of the
                future.
                <br />
                <br />
                <b>Let me help you write yours.</b>
              </p>

              {/* Other Platform Icons */}
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-github" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* About */}
        <div className="d-flex flex-row">
          <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="about"
          >
            {/* About Me Content */}
            <div className="d-flex flex-column align-items-center w-100">
              {/* Heading */}
              <div className="d-flex flex-row justify-content-center w-100 mt-3 mb-3">
                <h3>ABOUT ME</h3>
              </div>

              {/* Image + Content */}
              <div className="d-flex flex-row justify-content-center w-100">
                {/* Column 1 */}
                <div className="d-flex flex-column align-items-center w-100">
                  <p className="css-about-first-col mr-3">
                    <img
                      className="css-about-profile-img mr-2"
                      src="../static/img/Profile.png"
                    />
                    Anim nisi deserunt officia enim. Occaecat nisi deserunt
                    nostrud nisi ex adipisicing laboris cillum laborum. Veniam
                    veniam do officia do excepteur dolore est. Id velit officia
                    culpa ipsum id. Sunt anim nostrud adipisicing voluptate
                    magna dolore aliquip.Nulla cupidatat Lorem excepteur sit
                    quis ad. Voluptate proident laborum ullamco adipisicing
                    officia deserunt voluptate consequat occaecat duis. Commodo
                    velit minim esse incididunt. Est mollit incididunt officia
                    amet laborum qui ad proident. Aute nisi id officia duis
                    laborum sint eiusmod cupidatat proident tempor id incididunt
                    est. Occaecat consequat cillum sint in nostrud amet ex
                    proident reprehenderit ullamco voluptate. Laborum irure elit
                    do ad ullamco dolor sunt id enim aliqua incididunt culpa ea
                    magna. Deserunt adipisicing magna laborum occaecat occaecat
                    laboris ea commodo ipsum aliquip culpa ullamco exercitation.
                    Dolor enim cillum in exercitation mollit voluptate pariatur
                    veniam ut non voluptate qui irure ad.Sit sint elit labore
                    non nulla ipsum ut voluptate ad ad consectetur laboris.
                    Cillum culpa qui commodo id occaecat. Reprehenderit magna
                    sunt aute sunt fugiat reprehenderit culpa pariatur cupidatat
                    aliquip laboris. Pariatur et in quis irure nostrud ea.
                    Reprehenderit anim nulla proident incididunt minim non.
                    Cillum dolor labore excepteur ipsum ea minim Lorem occaecat
                    dolor. Sunt laborum consequat minim excepteur laborum
                    occaecat consectetur. Deserunt minim officia eiusmod ex amet
                    et consequat nisi esse veniam laboris. In laborum cupidatat
                    non nulla ullamco culpa qui. Enim velit commodo elit elit
                    pariatur elit mollit aliquip irure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Projects */}
        <div className="d-flex flex-row">
          <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="projects"
          >
            <div className="d-flex flex-column w-100">
              {/* Grid Heading */}
              <div className="d-flex flex-row justify-content-center pt-3">
                <h4>Projects</h4>
              </div>

              <div className="d-flex flex-column align-items-center">
                {/* Row 1 */}
                <div className="d-flex flex-row mb-4">
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/moi.png"
                    ]}
                    title={"Project 1"}
                  />
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/Project-Gallery/placeholder-image.png"
                    ]}
                    title={"Project 2"}
                  />
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/Project-Gallery/placeholder-image.png"
                    ]}
                    title={"Project 3"}
                  />
                </div>

                {/* Row 2 */}
                <div className="d-flex flex-row mb-4">
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/Project-Gallery/placeholder-image.png"
                    ]}
                    title={"Project 4"}
                  />
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/Project-Gallery/placeholder-image.png"
                    ]}
                    title={"Project 5"}
                  />
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/Project-Gallery/placeholder-image.png"
                    ]}
                    title={"Project 6"}
                  />
                </div>

                {/* Row 3 */}
                <div className="d-flex flex-row mb-4">
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/Project-Gallery/placeholder-image.png"
                    ]}
                    title={"Project 7"}
                  />
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/Project-Gallery/placeholder-image.png"
                    ]}
                    title={"Project 8"}
                  />
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/placeholder-image.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/placeholder-image.png",
                      "../static/img/Project-Gallery/placeholder-image.png"
                    ]}
                    title={"Project 9"}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Education */}
        <div className="d-flex flex-row">
          <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="education"
          >
            <div className="d-flex flex-column css-education-items-col">
              {/* Heading */}
              <div className="d-flex flex-row">
                <h2>Education</h2>
              </div>

              {/* University of Louisville - Master's*/}
              <Education
                schoolLogo={
                  "../../static/img/Education/University_of_Louisville.png"
                }
                school={"University of Louisville"}
                degree={"Master of Engineering"}
                discipline={"Computer Engineering Computer Science"}
                gpa={"3.3"}
                date={"May 2019 - May 2020"}
              />

              {/* University of Louisville - Bachelor's*/}
              <Education
                schoolLogo={
                  "../../static/img/Education/University_of_Louisville.png"
                }
                school={"University of Louisville"}
                degree={"Bachelor of Engineering"}
                discipline={"Computer Engineering Computer Science"}
                gpa={"3.3"}
                date={"August 2015 - May 2019"}
              />

              {/* Martha Layne Collins High School */}
              <Education
                schoolLogo={"../../static/img/Education/MLCTitans.jpg"}
                school={"Martha Layne Collins High School"}
                degree={"Project Lead the Way Engineering Track"}
                gpa={"4.0"}
                date={"August 2011 - May 2015"}
              />
            </div>
          </section>
        </div>

        {/* Skill */}
        <div className="d-flex flex-row">
          <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="skills"
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
          </section>
        </div>
      </div>
    </Template>
  );
};
export default Index;
