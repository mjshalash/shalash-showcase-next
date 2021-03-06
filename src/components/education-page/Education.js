const Education = ({ schoolLogo, school, degree, discipline, gpa, date }) => {
  return (
    <div className="d-flex flex-row mt-5">
      {/* School Logo */}
      <div className="d-flex flex-column">
        <img className="img-fluid css-school-logo mr-2" src={schoolLogo} />
      </div>

      {/* Information */}
      <div className="d-flex flex-column justify-content-center css-school-info-col">
        <div className="d-flex flex-row">
          {/* Degree */}
          <h3 className="fnt-roboto">{degree}</h3>
        </div>

        <div className="d-flex flex-row">
          {/* School Name and Date*/}
          <h5 className="css-school-title fnt-roboto">{school}</h5>
        </div>

        {/* Discipline */}
        <h6 className="fnt-roboto">{discipline}</h6>

        {/* GPA */}
        <span className="fnt-roboto">GPA: {gpa} </span>
      </div>

      <div className="d-flex flex-column ml-auto">
        <p className="ml-5 css-ed-date fnt-roboto">{date}</p>
      </div>
    </div>
  );
};
export default Education;
