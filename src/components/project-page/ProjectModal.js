function ProjectModal({
  children,
  link,
  imgSet,
  title,
  id,
  modalId,
  carouselId
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
            <h5 className="modal-title" id="exampleModalLabel">
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
                  {imgSet.map(function(projImg, index) {
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
                <a
                  className="carousel-control-prev"
                  href={"#carousel" + id}
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href={"#carousel" + id}
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>

              {/* Skill Used */}
              <div className="d-flex flex-row">
                <div className="d-flex flex-column">
                  <h6>Skills Used</h6>
                  <ul className="css-skills-used-list">
                    <li>HTML</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </div>

              <div className="d-flex flex-row">
                {/* Project Description */}
                <p className="css-about-first-col mr-3">{children}</p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
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
