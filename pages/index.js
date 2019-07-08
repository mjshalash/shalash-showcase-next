import Template from "../src/components/common/Template";
import Navbar from "../src/components/Navbar";

const Index = () => {
  return (
    <Template title={"Shalash Showcase"} className={"container-fluid"}>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column mr-3">
          <Navbar siteName={"Shalash Showcase"} />
        </div>
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
                  3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468
                  ·<a href="mailto:name@email.com">name@email.com</a>
                </div>
                <p className="lead mb-5">
                  {/* I am experienced in leveraging agile frameworks to provide a
                  robust synopsis for high level overviews. Iterative approaches
                  to corporate strategy foster collaborative thinking to further
                  the overall value proposition. */}
                  I have had a passion for programming since my parent's bought
                  me my first computer. Technology transforms our environment
                  every single day. Due to this, computer science, and therefore
                  programming, is the language of the future.
                  <br />
                  <br />
                  Let me help you write yours.
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
      </div>
    </Template>
  );
};
export default Index;
