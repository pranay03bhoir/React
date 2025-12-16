import React from "react";

const Projects = ({ projects }) => {
  return (
    <div>
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
                    {project.techStack.split(",").map((tech, i) => (
                      <span key={i}>{tech.trim()}</span>
                    ))}
                  </div>
                  <a href={project.link} className={`project-link`}>
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
