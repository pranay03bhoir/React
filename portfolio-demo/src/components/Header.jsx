import React from "react";

const Header = ({ name, profession }) => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
