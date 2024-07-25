import web1 from "../../public/web1.png";
import web2 from "../../public/drone.png";
import github from "../../public/github.svg";
import link from "../../public/link.svg";
function ProjectSection() {
  return (
    <div id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={web1} alt="Project 1" />
            <h3>Wakee.co.za</h3>
            <p>A Simple way To Get A Service Or A callout Done </p>
            <p>
              <ul className="icons">
                <li>
                  <a
                    href="https://www.wakee.co.za"
                    target="_blank"
                    className="icon Linkedin"
                  >
                    <img src={link} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/samukelo"
                    target="_blank"
                    className="icon Github"
                  >
                    <img src={github} alt="" />
                  </a>
                </li>
              </ul>
            </p>
          </div>

          <div className="project-card">
            <img src={web2} alt="Project 2" />
            <h3>Dronoticz</h3>
            <p>A simple Design from a Figma Mockup</p>
            <p>
              <ul className="icons">
                <li>
                  <a
                    href="https://firstassignment-bvd2h0ajt-samukelo-makofanes-projects.vercel.app/"
                    target="_blank"
                    className="icon Linkedin"
                  >
                    <img src={link} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/samukelo/firstreact.git"
                    target="_blank"
                    className="icon Github"
                  >
                    <img src={github} alt="" />
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
