import { useEffect, useState } from "react";
import { getProfile, getSkills } from "../services/portfolio";

function About() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const load = async () => {
      const [profileData, skillsData] = await Promise.all([
        getProfile(),
        getSkills(),
      ]);
      setProfile(profileData);
      setSkills(skillsData);
    };
    load();
  }, []);

  return (
    <main className="page container">
      <section className="about-layout">
        <div className="about-image">
          <img src={profile?.profile_image_url} alt={profile?.full_name} />
        </div>
        <div className="about-content">
          <span className="badge">About me</span>
          <h1>Tentang Saya</h1>
          <p>{profile?.bio}</p>
          <div className="about-details">
            <div>
              <strong>Email</strong>
              <span>{profile?.email}</span>
            </div>
            <div>
              <strong>Location</strong>
              <span>{profile?.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="section-heading">
          <span>Education</span>
          <h2>Edukasi & sekolah</h2>
        </div>
        <div className="education-card">
          <span className="education-school">
            {profile?.education?.school_name}
          </span>
          <h3>
            {profile?.education?.degree} - {profile?.education?.major}
          </h3>
          <small>{profile?.education?.year}</small>
          <p>{profile?.education?.description}</p>
        </div>
      </section>

      <section className="certificates-section">
        <div className="section-heading">
          <span>Certificates</span>
          <h2>Sertifikat</h2>
        </div>
        <div className="certificate-list">
          {profile?.certifications?.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <span>{certificate.issuer}</span>
              <h3>{certificate.name}</h3>
              <small>{certificate.year}</small>
              {certificate.credential_url &&
              certificate.credential_url !== "#" ? (
                <a
                  href={certificate.credential_url}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                  Lihat sertifikat
                </a>
              ) : (
                <span className="certificate-link disabled">
                  Link sertifikat akan ditambahkan
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading">
          <span>Skills</span>
          <h2>Keahlian utama</h2>
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
    </main>
  );
}

export default About;
