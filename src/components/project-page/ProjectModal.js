function ProjectModal({ link, imgSet, title, modalId }) {
  return (
    <div
      className="modal fade"
      id={modalId}
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
                id="carouselExampleControls"
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
                  {/* <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={imgSet}
                      alt="First slide"
                    />
                  </div> */}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
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
                  href="#carouselExampleControls"
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
                <p className="css-about-first-col mr-3">
                  Anim nisi deserunt officia enim. Occaecat nisi deserunt
                  nostrud nisi ex adipisicing laboris cillum laborum. Veniam
                  veniam do officia do excepteur dolore est. Id velit officia
                  culpa ipsum id. Sunt anim nostrud adipisicing voluptate magna
                  dolore aliquip.Nulla cupidatat Lorem excepteur sit quis ad.
                  Voluptate proident laborum ullamco adipisicing officia
                  deserunt voluptate consequat occaecat duis. Commodo velit
                  minim esse incididunt. Est mollit incididunt officia amet
                  laborum qui ad proident. Aute nisi id officia duis laborum
                  sint eiusmod cupidatat proident tempor id incididunt est.
                  Occaecat consequat cillum sint in nostrud amet ex proident
                  reprehenderit ullamco voluptate. Laborum irure elit do ad
                  ullamco dolor sunt id enim aliqua incididunt culpa ea magna.
                  Deserunt adipisicing magna laborum occaecat occaecat laboris
                  ea commodo ipsum aliquip culpa ullamco exercitation. Dolor
                  enim cillum in exercitation mollit voluptate pariatur veniam
                  ut non voluptate qui irure ad.Sit sint elit labore non nulla
                  ipsum ut voluptate ad ad consectetur laboris. Cillum culpa qui
                  commodo id occaecat. Reprehenderit magna sunt aute sunt fugiat
                  reprehenderit culpa pariatur cupidatat aliquip laboris.
                  Pariatur et in quis irure nostrud ea. Reprehenderit anim nulla
                  proident incididunt minim non. Cillum dolor labore excepteur
                  ipsum ea minim Lorem occaecat dolor. Sunt laborum consequat
                  minim excepteur laborum occaecat consectetur. Deserunt minim
                  officia eiusmod ex amet et consequat nisi esse veniam laboris.
                  In laborum cupidatat non nulla ullamco culpa qui. Enim velit
                  commodo elit elit pariatur elit mollit aliquip irure.
                </p>
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
