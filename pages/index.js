import { store } from "../src/store";
import { Provider } from "react-redux";

import Template from "../src/components/common/Template";

import Project from "../src/components/project-page/Project";
import Education from "../src/components/education-page/Education";
import Experience from "../src/components/experience-section/Experience";
import Skill from "../src/components/skills-page/Skill";

const Index = () => {
  return (
    <Provider store={store}>
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
                <h1 className="mb-0 fnt-roboto">
                  Malik
                  <span className="text-primary fnt-roboto">Shalash</span>
                </h1>
                <div className="subheading mb-5">
                  <a
                    className="css-email-link fnt-roboto"
                    href="mailto:name@email.com"
                  >
                    mjshalash@rci4u.com
                  </a>
                </div>
                <p className="css-intro-text mb-5 fnt-roboto">
                  I have had a passion for programming since my parents bought
                  me my first computer. Technology transforms our environment
                  every single day. Because of this, programming is the language
                  of the future.
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
                  <h2 className="fnt-roboto">ABOUT ME</h2>
                </div>

                {/* Image + Content */}
                <div className="d-flex flex-row justify-content-center w-100">
                  {/* Column 1 */}
                  <div className="d-flex flex-column align-items-center w-100">
                    <p className="css-about-first-col mr-3 fnt-roboto">
                      <img
                        className="img-fluid img-profile rounded-circle css-about-profile-img mr-2"
                        src="../static/img/Profile.png"
                      />
                      I am a current Master's in Engineering student at the
                      University of Louisville. I will graduate this program at
                      the end of Spring 2020 and then I will pursue a Master's
                      in Business Administration in the Fall of 2020. Computer
                      Science has been a passion of mine ever since my parents
                      gifted me my fist computer. In later years, I have
                      developed a similiar preoccupation with the inner
                      mechinations of business. I believe merging these two
                      powerful industries, in an effective manner, can
                      positively transform a company. This belief is the driving
                      force behind my pursuit of an MBA in addition to my
                      Bachelor's and Master's in Engineering. Ultimately, my
                      abilities are best applied in some role which oversees the
                      collaboration between Information Technology and the
                      company's business maneuvers.
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
                  <h2 className="fnt-roboto">Projects</h2>
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
                        "../static/img/Project-Gallery/Phinance/MemberDashboard.png",
                      ]}
                      title={"Phinance"}
                      id="PHINANCE"
                    >
                      <p>
                        Phinance is a financial management platform designed
                        specifically with Collegiate Greek organizations in
                        mind. Phinance was built using a stack of Mongo,
                        Express, React and Node (MERN). This was developed as
                        part of a school project.
                      </p>
                    </Project>

                    {/* Consoritum */}
                    <Project
                      mainImg={
                        "../static/img/Project-Gallery/Consortium/Home.png"
                      }
                      imgSet={[
                        "../static/img/Project-Gallery/Consortium/Home.png",
                        "../static/img/Project-Gallery/Consortium/our-research.png",
                        "../static/img/Project-Gallery/Consortium/spotlight.png",
                      ]}
                      title={"UofL Social Justice Site"}
                      id="ULSOCIALJUSTICE"
                    >
                      <p>
                        I contributed to this site as part of the Integrative
                        Design and Development Team at the University of
                        Louisville. This is a static site, created using
                        Javascript, HTML and CSS. This web site is a precursor
                        to a much more robust Research Content Management
                        system, which we our team is currently working on.
                      </p>
                    </Project>
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
                        "../static/img/Project-Gallery/RenalApp/Sidebar.png",
                      ]}
                      title={"Adult Renal Patients Mobile App"}
                      id="RENALAPP"
                    >
                      <p>
                        The Adult Renal Patients Mobile App was the first
                        project I worked on once I joined the Integrative Design
                        and Development Team at the University of Louisville.
                        The mobile application is the brainchild of a University
                        doctor and researcher and the application's purpose is
                        to provide clear and concise dosing information for
                        kidney medication. It was built using React Native.
                      </p>
                    </Project>

                    {/* Flappy Bird - ML */}
                    <Project
                      mainImg={
                        "../static/img/Project-Gallery/FlappyBird/GenOne.png"
                      }
                      imgSet={[
                        "../static/img/Project-Gallery/FlappyBird/GenOne.png",
                        "../static/img/Project-Gallery/FlappyBird/GenSeven.png",
                      ]}
                      title={"Flappy Bird - Machine Learning"}
                      id="FLAPPYBIRD"
                    >
                      <p>
                        This was a personal project of mine based on a tutorial
                        detailing how to create an artificial intelligence
                        program which can learn to play Flappy Bird. The program
                        was written using Python and NEAT (for creating the
                        neural network).
                      </p>
                    </Project>
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
                  <h2 className="fnt-roboto">Education</h2>
                </div>

                {/* University of Louisville - Master's*/}
                <Education
                  schoolLogo={
                    "../../static/img/Education/University_of_Louisville.png"
                  }
                  school={"University of Louisville"}
                  degree={"Master of Business Administration"}
                  gpa={"N/A"}
                  date={"August 2020 - August 2021"}
                />

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

                {/* Stored Value Solutions */}
                <Experience
                  companyLogo={"../../static/img/Experience/SVS.png"}
                  company={"Stored Value Solutions (SVS)"}
                  location={"Louisville, Kentucky"}
                  position={"Application Developer"}
                  date={"May 2020 - Present"}
                />

                {/* Integrative Design and Development */}
                <Experience
                  companyLogo={
                    "../../static/img/Education/University_of_Louisville.png"
                  }
                  company={"UofL Integrative Development and Design Team"}
                  location={"Louisville, Kentucky"}
                  position={"Software Developer"}
                  date={"December 2018 - April 2020"}
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
                  <h2 className="fnt-roboto">Skills</h2>
                </div>

                {/* TODO: Add Colors */}

                <div className="d-flex flex-row">
                  {/* General Programming */}
                  <div className="d-flex flex-column align-items-center ml-2 css-db-col">
                    <h4 className="fnt-roboto">General Development</h4>
                    {/* C# */}
                    <Skill
                      skillIcon={"fab fa-cuttlefish css-skill-icon"}
                      skillTitle={"C#"}
                    />

                    {/* ASP.Net */}
                    <Skill
                      skillIcon={"fab fa-microsoft css-skill-icon"}
                      skillTitle={"ASP.Net"}
                    />

                    {/* Python */}
                    <Skill
                      skillIcon={"fab fa-python css-skill-icon"}
                      skillTitle={"Python"}
                    />
                  </div>

                  {/* Web Development */}
                  <div className="d-flex flex-column align-items-center ml-2 css-web-col">
                    <h4 className="fnt-roboto">Web Development</h4>

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
                    <h4 className="fnt-roboto">Database/Back-End</h4>

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
                    <h4 className="fnt-roboto">Utilities</h4>
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
    </Provider>
  );
};
export default Index;
