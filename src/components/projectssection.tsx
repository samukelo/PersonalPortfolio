import web1 from "../../public/web1.png";
import web2 from "../../public/drone.png";
import web3 from "../../public/animezone.png";
import web4 from "../../public/weather.jpg";
import github from "../../public/github.svg";
import link from "../../public/link.svg";
function ProjectSection() {
  return (
    <>
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

            <div className="project-card">
              <img src={web3} alt="Project 2" />
              <h3>Anime Zone Movie Site</h3>
              <p>A simple Movie And Series Site That Saves Data to  a certain folder / file (.json) But I Used State</p>
              <p>
                <ul className="icons">
                  <li>
                    <a
                      href="https://movie-series-site.vercel.app/"
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

            <div className="project-card">
              <img src={web4} alt="Project 2" />
              <h3>7 Day Weather Services</h3>
              <p>A simple Wsay To get weather from an api or somewhere</p>
              <p>
                <ul className="icons">
                  <li>
                    <a
                      href="https://weathe-eight.vercel.app/"
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
    </>
  );
}

export default ProjectSection;
