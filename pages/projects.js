import Template from "../src/components/common/Template";
import Navbar from "../src/components/Navbar";

const Index = () => {
  return (
    <Template title={"Shalash Showcase"} className={"container-fluid"}>
      <div className="d-flex flex-row">
        {/* Navigation Sidebar */}
        <div className="d-flex flex-column mr-3">
          <Navbar siteName={"Shalash Showcase"} />
        </div>

        {/* Project Gallery */}
        <div className="d-flex flex-column">
          <div className="d-flex flex-row">
            <h1>Showcase</h1>
          </div>
        </div>
      </div>
    </Template>
  );
};
export default Index;
