function ProjectModal({
  children,
  link,
  imgSet,
  title,
  id,
  modalId,
  carouselId,
}) {
  return (
    <div
      className="modal fade"
      id={"modal" + id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/* Modal Title */}
          <div className="modal-header">
            <h5 className="modal-title fnt-roboto" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {/* Image + Content */}

            <div className="d-flex flex-column align-items-center w-100">
              {/* Image Carousel */}
              <div
                id={"carousel" + id}
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* Map set of images to carousel */}
                  {imgSet.map(function (projImg, index) {
                    if (index === 0) {
                      return (
                        <div key={index} className="carousel-item active">
                          <img className="d-block w-100" src={projImg} />
                        </div>
                      );
                    } else {
                      return (
                        <div key={index} className="carousel-item">
                          <img className="d-block w-100" src={projImg} />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              {/* Skill Used */}
              <div className="d-flex flex-row w-100 css-proj-skills-row css-thin-border">
                <div className="d-flex flex-column pl-2">
                  <h6 className="mt-2 fnt-roboto css-proj-sect-header">
                    Skills Used
                  </h6>
                  <ul className="mb-2 css-skills-used-list fnt-roboto">
                    <li>HTML</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </div>

              <div className="d-flex flex-row w-100 css-thin-border">
                {/* Project Description */}
                <div className="d-flex flex-column pl-2">
                  <h6 className="mt-2 fnt-roboto css-proj-sect-header">
                    Project Description
                  </h6>
                  <p className="css-proj-desc mr-3 fnt-roboto">{children}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary fnt-roboto"
              data-dismiss="modal"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
