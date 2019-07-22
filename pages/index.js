import Template from "../src/components/common/Template";

const Index = () => {
  return (
    <Template
      title={"Shalash Showcase"}
      className={"container-fluid css-page-main-content"}
    >
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="about"
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
      </div>
    </Template>
  );
};
export default Index;
