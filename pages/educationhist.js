import Template from "../src/components/common/Template";
import Navbar from "../src/components/Navbar";
import Education from "../src/components/education-page/Education";

const EducationHist = () => {
  return (
    <Template
      title={"Shalash Showcase"}
      className={"container-fluid css-page-main-content"}
    >
      <div className="d-flex flex-column css-education-items-col">
        {/* Heading */}
        <div className="d-flex flex-row">
          <h2>Education</h2>
        </div>

        {/* University of Louisville - Master's*/}
        <Education
          schoolLogo={"../../static/img/Education/University_of_Louisville.png"}
          school={"University of Louisville"}
          degree={"Master of Engineering"}
          discipline={"Computer Engineering Computer Science"}
          gpa={"3.3"}
          date={"May 2019 - May 2020"}
        />

        {/* University of Louisville - Bachelor's*/}
        <Education
          schoolLogo={"../../static/img/Education/University_of_Louisville.png"}
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
    </Template>
  );
};
export default EducationHist;
