import { useEffect, useState } from "react";
import { getExperiences } from "../services/portfolio";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getExperiences();
      setExperiences(data);
    };
    load();
  }, []);

  return (
    <main className="page container">
      <section>
        <div className="section-heading">
          <span>Experience</span>
          <h1>Pengalaman kerja</h1>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article key={experience.id} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>
                  <span>{experience.company}</span>
                </div>
                <small>
                  {experience.start_date} -{" "}
                  {experience.current ? "Present" : experience.end_date}
                </small>
              </div>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Experience;
