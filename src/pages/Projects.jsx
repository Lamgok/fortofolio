import { useEffect, useState } from "react";
import { getProjects } from "../services/portfolio";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const load = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    load();
  }, []);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <main className="page container">
      <section>
        <div className="section-heading">
          <span>Projects</span>
          <h1>Semua project</h1>
        </div>
        <div className="filter-bar">
          {categories.map((category) => (
            <button
              key={category}
              className={
                filter === category ? "filter-button active" : "filter-button"
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <img src={project.image_url} alt={project.title} />
              <div className="project-card-body">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies?.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
