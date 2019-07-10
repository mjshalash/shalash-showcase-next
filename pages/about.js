import Template from "../src/components/common/Template";
import Navbar from "../src/components/Navbar";

const About = () => {
  return (
    <Template title={"Shalash Showcase"} className={"container-fluid"}>
      <div className="d-flex flex-row">
        {/* Navigation Sidebar */}
        <div className="d-flex flex-column mr-3">
          <Navbar siteName={"Shalash Showcase"} />
        </div>

        {/* About Me Content */}
        <div className="d-flex flex-column align-items-center w-100">
          {/* Heading */}
          <div className="d-flex flex-row justify-content-center w-100 mt-3 mb-3">
            <h3>ABOUT ME</h3>
          </div>

          {/* Image + Content */}
          <div className="d-flex flex-row justify-content-center w-100">
            {/* Column 1 */}
            <div className="d-flex flex-column align-items-center w-100">
              <p className="css-about-first-col mr-3">
                <img
                  className="css-about-profile-img mr-2"
                  src="../static/img/Profile.png"
                />
                Anim nisi deserunt officia enim. Occaecat nisi deserunt nostrud
                nisi ex adipisicing laboris cillum laborum. Veniam veniam do
                officia do excepteur dolore est. Id velit officia culpa ipsum
                id. Sunt anim nostrud adipisicing voluptate magna dolore
                aliquip.Nulla cupidatat Lorem excepteur sit quis ad. Voluptate
                proident laborum ullamco adipisicing officia deserunt voluptate
                consequat occaecat duis. Commodo velit minim esse incididunt.
                Est mollit incididunt officia amet laborum qui ad proident. Aute
                nisi id officia duis laborum sint eiusmod cupidatat proident
                tempor id incididunt est. Occaecat consequat cillum sint in
                nostrud amet ex proident reprehenderit ullamco voluptate.
                Laborum irure elit do ad ullamco dolor sunt id enim aliqua
                incididunt culpa ea magna. Deserunt adipisicing magna laborum
                occaecat occaecat laboris ea commodo ipsum aliquip culpa ullamco
                exercitation. Dolor enim cillum in exercitation mollit voluptate
                pariatur veniam ut non voluptate qui irure ad.Sit sint elit
                labore non nulla ipsum ut voluptate ad ad consectetur laboris.
                Cillum culpa qui commodo id occaecat. Reprehenderit magna sunt
                aute sunt fugiat reprehenderit culpa pariatur cupidatat aliquip
                laboris. Pariatur et in quis irure nostrud ea. Reprehenderit
                anim nulla proident incididunt minim non. Cillum dolor labore
                excepteur ipsum ea minim Lorem occaecat dolor. Sunt laborum
                consequat minim excepteur laborum occaecat consectetur. Deserunt
                minim officia eiusmod ex amet et consequat nisi esse veniam
                laboris. In laborum cupidatat non nulla ullamco culpa qui. Enim
                velit commodo elit elit pariatur elit mollit aliquip irure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
export default About;
