const Skill = ({ skillIcon, skillTitle}) => {
    return (
      <div className="d-flex flex-row mt-5">
  
        {/* Skill Title and Icon */}
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex flex-row">
            {/* Skill Icon */}
            <i className={skillIcon}></i>
            
            {/* Skill Name */}
            <h3 className="mr-5">{skillTitle}</h3>
          </div>
        </div>
      </div>
    );
  };
  export default Skill;
  