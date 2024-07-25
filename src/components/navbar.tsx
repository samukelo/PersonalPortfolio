function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <a href="#">
              <h4>
                The <span> WSM</span>
              </h4>
            </a>
          </div>

          <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
              <li className="active">
                <a href="#">About</a>
              </li>
              <li>
                <a href="#skills">Technologies</a>
              </li>
              <li>
                <a href="#projects">My Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
