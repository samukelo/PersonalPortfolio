import web1 from "../../public/web1.png";
import web2 from "../../public/whatsapp.svg";
function ProjectSection() {
  return (
    <div id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={web1} alt="Project 1" />
            <h3>Project Title 1</h3>
            <p>Short description of the project.</p>
          </div>

          <div className="project-card">
            <img src="project2.jpg" alt="Project 2" />
            <h3>Project Title 2</h3>
            <p>Short description of the project.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
