import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const name = "Pranay Bhoir";
  const profession = "Full-Stack Developer";
  const projects = [
    {
      title: "Project One",
      description: "A Web app made for note taking.",
      techStack: "React,node.js,mongodb",
      link: "#projectone",
    },
    {
      title: "Project Two",
      description: "A Ecommerce application.",
      techStack: "React,spring boot,postgresql",
      link: "#projecttwo",
    },
    {
      title: "Project Three",
      description: "Human Resource Management System(HRMS).",
      techStack: "React,spring boot,postgresql,redis,mongodb",
      link: "#projectthree",
    },
  ];
  return (
    <>
      <div className={"App"}>
        {/* Header Section */}
        <header className={"header"}>
          <h1>{name}</h1>
          <p>{profession}</p>
          <nav>
            <a href={"#about"}>About</a>
            <a href={"#projects"}>Projects</a>
            <a href={"#contact"}>Contact</a>
          </nav>
        </header>

        {/* About Section */}
        <section id={"about"} className={"about-section"}>
          <h2>About Me</h2>
          <p>
            Hello! I am {name}, a passionate {profession}, I Love building web
            application.
          </p>
        </section>

        {/* Project Section */}
        <section id={`projects`} className={`projects-section`}>
          <h2>Projects</h2>
          <div className={`projects-grid`}>
            {projects.map((project, index) => {
              return (
                <div key={index} className={`project-card`}>
                  <div className={`project-content`}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={`tech-stack`}>
                      {project.techStack.split(',').map((tech, i) => (
                        <span key={i}>{tech.trim()}</span>
                      ))}
                    </div>
                    <a href={project.link} className={`project-link`}>View Project</a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section id={`contact`} className={`contact-section`}>
          <h2>Contact Me</h2>
          <p>
            If you would like to get in touch feel free to connect met at,{" "}
            <a href={`mailto:pranay@gmail.com`}>pranay@gmail.com</a>
          </p>
        </section>

        {/* Footer Section */}
        <footer id={`footer`} className={`footer`}>
          <p>2025. All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
}

export default App;
