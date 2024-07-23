import imagelinkedin from "../../public/linkedin-original.svg";
function AboutMe() {
  return (
    <div className="AboutMeSection">
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png"
                    alt="about image"
                  />
                </div>
              </div>

              <h2>Samukelo Worthwhile Makofane</h2>
              <h3>FullStack Developer</h3>
            </div>

            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="icon twitter"
                >
                  <img src={imagelinkedin} alt="" />
                </a>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid
              laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam
              numquam? Temporibus, molestias amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              iure tempora alias laudantium sapiente impedit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
