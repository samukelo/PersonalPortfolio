import web1 from "../../public/web1.png";
import web2 from "../../public/drone.png";
import web3 from "../../public/animezone.png";
import web4 from "../../public/weather.jpg";
import github from "../../public/github.svg";
import link from "../../public/link.svg";
function ProjectSection() {
  return (
    <>
      <div
        id="projects"
        className="projects-section py-16 bg-gradient-to-r from-blue-400 to-purple-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-10">My Projects</h2>
          <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img
                src={web1}
                alt="Project 1"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Wakee.co.za</h3>
              <p className="text-gray-300 mt-2">
                A Simple way to get a service or a callout done
              </p>
              <ul className="icons flex justify-center gap-4 mt-4">
                <li>
                  <a
                    href="https://www.wakee.co.za"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={link} alt="Website Link" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/samukelo"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={github} alt="GitHub Link" className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img
                src={web2}
                alt="Project 2"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Dronoticz</h3>
              <p className="text-gray-300 mt-2">
                A simple design from a Figma mockup
              </p>
              <ul className="icons flex justify-center gap-4 mt-4">
                <li>
                  <a
                    href="https://firstassignment-bvd2h0ajt-samukelo-makofanes-projects.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={link} alt="Website Link" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/samukelo/firstreact.git"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={github} alt="GitHub Link" className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Project 1 */}
            <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img
                src={web3}
                alt="Project 1"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                Anime Zone Movie Site
              </h3>
              <p className="text-gray-300 mt-2">Anime Zone Movie Site</p>
              <ul className="icons flex justify-center gap-4 mt-4">
                <li>
                  <a
                    href="https://www.wakee.co.za"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={link} alt="Website Link" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/samukelo"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={github} alt="GitHub Link" className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img
                src={web4}
                alt="Project 2"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                7 Day Weather Services
              </h3>
              <p className="text-gray-300 mt-2">
                A simple Wsay To get weather from an api or somewhere
              </p>
              <ul className="icons flex justify-center gap-4 mt-4">
                <li>
                  <a
                    href="https://firstassignment-bvd2h0ajt-samukelo-makofanes-projects.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={link} alt="Website Link" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/samukelo/firstreact.git"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={github} alt="GitHub Link" className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
