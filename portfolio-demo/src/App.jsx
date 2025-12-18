import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // const [count, setCount] = useState(0)
  const name = "Pranay Bhoir";
  const profession = "Full-Stack Developer";
  const projects = [
    {
      title: "Note",
      description: "A Web app made for note taking.",
      techStack: "React,node.js,mongodb",
      link: "#projectone",
    },
    {
      title: "E-commerce",
      description: "A Ecommerce application.",
      techStack: "React,spring boot,postgresql",
      link: "#projecttwo",
    },
    {
      title: "HRMS",
      description: "Human Resource Management System(HRMS).",
      techStack: "React,spring boot,postgresql,redis,mongodb",
      link: "#projectthree",
    },
  ];
  return (
    <>
      <div className={"App"}>
        <Header name={name} profession={profession} />
        <About name={name} profession={profession} />
        <Contact />
        <Projects projects={projects} />
        <Footer />
      </div>
    </>
  );
}

export default App;
