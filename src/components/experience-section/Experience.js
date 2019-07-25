const Experience = ({ companyLogo, company, location, position, date }) => {
  return (
    <div className="d-flex flex-row mt-5">
      {/* Business Logo */}
      <div className="d-flex flex-column">
        <img className="img-fluid css-school-logo mr-2" src={companyLogo} />
      </div>

      {/* Information */}
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex flex-row">
          {/* Company Name and Span*/}
          <h3 className="mr-5">{company}</h3>
          <p className="ml-5 css-ed-date">{date}</p>
        </div>

        <div className="d-flex flex-row">
          {/* Position */}
          <h5>{position}</h5>
        </div>
      </div>
    </div>
  );
};
export default Experience;
