import meimg from "../../public/me2.png";
import imagelinkedin from "../../public/linkedin-original.svg";
import discord from "../../public/discord-alt.svg";
import github from "../../public/github.svg";
import whatsapp from "../../public/whatsapp.svg";

function AboutMe() {
  return (
    <div className="AboutMeSection">
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img src={meimg} alt="about image" />
                </div>
              </div>

              <h2>Samukelo Worthwhile Makofane</h2>
              <h3>FullStack Developer</h3>
            </div>

            <ul className="icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/samukelo-makofane-35a157a6/"
                  target="_blank"
                  className="icon Linkedin"
                >
                  <img src={imagelinkedin} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/user/635763521782546453"
                  target="_blank"
                  className="icon Discord"
                >
                  <img src={discord} alt="" />
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
              <li>
                <a
                  href="https://wa.me/qr/R6TJA7ZIUEPHJ1"
                  target="_blank"
                  className="icon Whatsapp"
                >
                  <img src={whatsapp} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <h1>
            Hello<span>!</span>
          </h1>
          <h2>Here's who I am & what I do</h2>
          <div className="about-btns">
            <button type="button" className="btn btn-pink">
              resume / CV
            </button>
            <button type="button" className="btn btn-white">
              Git hub
            </button>
          </div>

          <div className="about-para">
            <p>
              I am a skilled IT technician and software developer with a passion
              for solving complex technical challenges. With a proven track
              record in IT support and a strong foundation in software
              development, I bring a blend of technical expertise and
              problem-solving skills to every project. My commitment to staying
              abreast of the latest industry trends ensures that I can deliver
              innovative and effective solutions. I thrive in collaborative
              environments. With a keen eye for detail and a dedication to
              continuous improvement, I am poised to make meaningful
              contributions to any IT technical support and software development
              team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
