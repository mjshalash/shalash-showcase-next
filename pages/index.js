import Template from "../src/components/common/Template";

import Project from "../src/components/project-page/Project";
import Education from "../src/components/education-page/Education";
import Experience from "../src/components/experience-section/Experience";
import Skill from "../src/components/skills-page/Skill";

const Index = () => {
  return (
    <Template title={"Shalash Showcase"}>
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
                <a href="https://linkedin.com/in/malik-shalash">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/mjshalash">
                  <i className="fab fa-github" />
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
              <div className="d-flex flex-row w-100 mt-3 mb-3">
                <h2>ABOUT ME</h2>
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
                    I am a current Master's in Engineering student at the
                    University of Louisville. I will graduate this program at
                    the end of Spring 2020 and then plan to begin pursuit of a
                    Master's in Business Administration in the Fall of 2020.
                    Computer Science has been a passion of mine ever since my
                    parents gifted me my fist computer. In later years, I have
                    developed a similiar preoccupation with the inner
                    mechinations of business. I believe merging these two
                    powerful industries, in an effective manner, can positively
                    transform company. This belief is the driving force behind
                    my pursuit of an MBA in addition to my Bachelor's and
                    Master's in Engineering. Ultimately, I feel as though my
                    abilities are best applied in some role which oversees the
                    collaboration between Information Technology and the
                    company's business maneuvers.
                    <b> [NOT DONE]</b>
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
              <div className="d-flex flex-row pt-3">
                <h2>Projects</h2>
              </div>

              <div className="d-flex flex-column align-items-center">
                {/* Row 1 */}
                <div className="d-flex flex-row mb-4">
                  {/* Phinance */}
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/Phinance/AdminLogin.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/Phinance/AdminLogin.png",
                      "../static/img/Project-Gallery/Phinance/AdminDashboard.png",
                      "../static/img/Project-Gallery/Phinance/BudgetDashboard.png",
                      "../static/img/Project-Gallery/Phinance/EditTransaction.png",
                      "../static/img/Project-Gallery/Phinance/MemberDashboard.png"
                    ]}
                    title={"Phinance"}
                    id="PHINANCE"
                  />

                  {/* Consoritum */}
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/Consortium/Home.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/Consortium/Home.png",
                      "../static/img/Project-Gallery/Consortium/our-research.png",
                      "../static/img/Project-Gallery/Consortium/spotlight.png"
                    ]}
                    title={"UofL Social Justice Site"}
                    id="ULSOCIALJUSTICE"
                  />
                </div>

                {/* Row 2 */}
                <div className="d-flex flex-row mb-4">
                  {/* Renal App */}
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/RenalApp/HomeScreen.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/RenalApp/HomeScreen.png",
                      "../static/img/Project-Gallery/RenalApp/Bookmarks.png",
                      "../static/img/Project-Gallery/RenalApp/Sidebar.png"
                    ]}
                    title={"Adult Renal Patients Mobile App"}
                    id="RENALAPP"
                  />

                  {/* Flappy Bird - ML */}
                  <Project
                    mainImg={
                      "../static/img/Project-Gallery/FlappyBird/GenOne.png"
                    }
                    imgSet={[
                      "../static/img/Project-Gallery/FlappyBird/GenOne.png",
                      "../static/img/Project-Gallery/FlappyBird/GenSeven.png"
                    ]}
                    title={"Flappy Bird - Machine Learning"}
                    id="FLAPPYBIRD"
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

        {/* Experience */}
        <div className="d-flex flex-row">
          <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="experience"
          >
            <div className="d-flex flex-column css-education-items-col">
              {/* Heading */}
              <div className="d-flex flex-row">
                <h2>Experience</h2>
              </div>

              {/* Integrative Design and Development */}
              <Experience
                companyLogo={
                  "../../static/img/Education/University_of_Louisville.png"
                }
                company={"UofL Integrative Development and Design Team"}
                location={"Louisville, Kentucky"}
                position={"Senior Software Developer"}
                date={"December 2018 - Present"}
              />

              {/* Solstice */}
              <Experience
                companyLogo={"../../static/img/Experience/Solstice/logo.gif"}
                company={"Solstice Incorporated"}
                location={"Louisville, Kentucky"}
                position={"Junior Intern Software Developer"}
                date={"August 2016 - August 2018"}
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
