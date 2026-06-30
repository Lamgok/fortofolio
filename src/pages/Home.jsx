import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getProfile,
  getProjects,
  getSkills,
  getTestimonials,
} from "../services/portfolio";

function Home() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [profileData, projectData, skillsData, testimonialData] =
        await Promise.all([
          getProfile(),
          getProjects(),
          getSkills(),
          getTestimonials(),
        ]);
      setProfile(profileData);
      setProjects(projectData.slice(0, 3));
      setSkills(skillsData.slice(0, 6));
      setTestimonials(testimonialData.slice(0, 2));
    };

    loadData();
  }, []);

  return (
    <main>
      <section className="hero-section container">
        <div className="hero-copy">
          <span className="badge">Available for work</span>
          <h1>
            {profile?.headline || "Building digital experiences that matter"}
          </h1>
          <p>{profile?.bio || "Portfolio website powered by Supabase."}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              Lihat Project
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Hubungi Saya
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={
              profile?.profile_image_url ||
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
            }
            alt={profile?.full_name || "Profile"}
          />
        </div>
      </section>

      <section className="skills-section container">
        <div className="section-heading">
          <span>Skills</span>
          <h2>Teknologi yang sering saya pakai</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <h3>{skill.name}</h3>
              <span>{skill.category}</span>
              <small>{skill.level}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section container">
        <div className="section-heading">
          <span>Projects</span>
          <h2>Project terbaru</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
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

      <section className="testimonials-section container">
        <div className="section-heading">
          <span>Testimonials</span>
          <h2>Apa kata mereka</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.avatar_url} alt={testimonial.name} />
              <p>“{testimonial.quote}”</p>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.role}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
