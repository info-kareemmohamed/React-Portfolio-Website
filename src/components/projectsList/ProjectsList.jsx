import "./projectslist.css";
import Project from "../project/Project.jsx";
import { projects } from "../../data";

const ProjectsList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
        My work revolves around developing mobile applications, where I transform ideas into practical apps that meet users' needs.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;