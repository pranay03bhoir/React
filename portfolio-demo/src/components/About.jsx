import React from "react";

const About = ({ name, profession }) => {
  return (
    <div>
      {/* About Section */}
      <section id={"about"} className={"about-section"}>
        <h2>About Me</h2>
        <p>
          Hello! I am {name}, a passionate {profession}, I Love building web
          application.
        </p>
      </section>
    </div>
  );
};

export default About;
