import { useEffect, useState } from "react";
import {
  getCurrentSession,
  signIn,
  signOut,
  getProfile,
  updateProfile,
  getProjects,
  createProject,
  deleteProject,
  getSkills,
  createSkill,
  deleteSkill,
  getExperiences,
  createExperience,
  deleteExperience,
} from "../services/portfolio";

function Admin() {
  const [session, setSession] = useState(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educationForm, setEducationForm] = useState({
    school_name: "",
    degree: "",
    major: "",
    year: "",
    description: "",
  });
  const [certificateForm, setCertificateForm] = useState({
    name: "",
    issuer: "",
    year: "",
    credential_url: "",
  });
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [editingCertificateKey, setEditingCertificateKey] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    category: "",
    image_url: "",
    live_url: "",
    repo_url: "",
    technologies: "",
  });
  const [skillForm, setSkillForm] = useState({
    name: "",
    category: "",
    level: "",
  });
  const [experienceForm, setExperienceForm] = useState({
    role: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
    location: "",
    current: false,
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const load = async () => {
      const currentSession = await getCurrentSession();
      setSession(currentSession);
      if (currentSession) {
        const [profileData, projectData, skillData, experienceData] =
          await Promise.all([
            getProfile(),
            getProjects(),
            getSkills(),
            getExperiences(),
          ]);
        setProfile(profileData);
        setEducationForm(
          profileData?.education || {
            school_name: "",
            degree: "",
            major: "",
            year: "",
            description: "",
          },
        );
        setProjects(projectData);
        setSkills(skillData);
        setExperiences(experienceData);
      }
    };
    load();
  }, []);

  const refreshLists = async () => {
    const [profileData, projectData, skillData, experienceData] =
      await Promise.all([
        getProfile(),
        getProjects(),
        getSkills(),
        getExperiences(),
      ]);
    setProfile(profileData);
    setEducationForm(
      profileData?.education || {
        school_name: "",
        degree: "",
        major: "",
        year: "",
        description: "",
      },
    );
    setProjects(projectData);
    setSkills(skillData);
    setExperiences(experienceData);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await signIn(loginData.email, loginData.password);
      setSession(data.session);
      await refreshLists();
      setMessage("Login berhasil");
    } catch {
      setMessage("Login gagal");
    }
  };

  const handleCreateProject = async (event) => {
    event.preventDefault();
    await createProject({
      ...projectForm,
      technologies: projectForm.technologies
        .split(",")
        .map((item) => item.trim()),
    });
    setProjectForm({
      title: "",
      description: "",
      category: "",
      image_url: "",
      live_url: "",
      repo_url: "",
      technologies: "",
    });
    await refreshLists();
    setMessage("Project berhasil ditambahkan");
  };

  const handleCreateSkill = async (event) => {
    event.preventDefault();
    await createSkill(skillForm);
    setSkillForm({ name: "", category: "", level: "" });
    await refreshLists();
    setMessage("Skill berhasil ditambahkan");
  };

  const handleSaveEducation = async (event) => {
    event.preventDefault();
    try {
      const updatedProfile = await updateProfile(profile?.id, {
        education: educationForm,
      });
      setProfile(updatedProfile);
      setIsEditingEducation(false);
      setMessage(
        isEditingEducation
          ? "Data pendidikan berhasil diperbarui"
          : "Data pendidikan berhasil disimpan",
      );
    } catch {
      setMessage("Gagal menyimpan data pendidikan");
    }
  };

  const handleDeleteEducation = async () => {
    try {
      await updateProfile(profile?.id, {
        education: null,
      });
      setEducationForm({
        school_name: "",
        degree: "",
        major: "",
        year: "",
        description: "",
      });
      setIsEditingEducation(false);
      setProfile((currentProfile) => ({ ...currentProfile, education: null }));
      setMessage("Data pendidikan berhasil dihapus");
    } catch {
      setMessage("Gagal menghapus data pendidikan");
    }
  };

  const handleSaveCertificate = async (event) => {
    event.preventDefault();
    try {
      const currentCertifications = profile?.certifications || [];
      const updatedCertifications = editingCertificateKey
        ? currentCertifications.map((certificate) =>
            certificate.id === editingCertificateKey ||
            certificate.name === editingCertificateKey
              ? { ...certificate, ...certificateForm }
              : certificate,
          )
        : [
            ...currentCertifications,
            { ...certificateForm, id: `${Date.now()}` },
          ];

      const updatedProfile = await updateProfile(profile?.id, {
        certifications: updatedCertifications,
      });
      setProfile(updatedProfile);
      setCertificateForm({
        name: "",
        issuer: "",
        year: "",
        credential_url: "",
      });
      setEditingCertificateKey(null);
      setMessage(
        editingCertificateKey
          ? "Sertifikat berhasil diperbarui"
          : "Sertifikat berhasil ditambahkan",
      );
    } catch {
      setMessage("Gagal menyimpan sertifikat");
    }
  };

  const handleEditCertificate = (certificate) => {
    setCertificateForm({
      name: certificate.name || "",
      issuer: certificate.issuer || "",
      year: certificate.year || "",
      credential_url: certificate.credential_url || "",
    });
    setEditingCertificateKey(certificate.id || certificate.name);
  };

  const handleDeleteCertificate = async (certificate) => {
    try {
      const updatedCertifications = (profile?.certifications || []).filter(
        (item) =>
          (item.id || item.name) !== (certificate.id || certificate.name),
      );
      const updatedProfile = await updateProfile(profile?.id, {
        certifications: updatedCertifications,
      });
      setProfile(updatedProfile);
      setEditingCertificateKey(null);
      setMessage("Sertifikat berhasil dihapus");
    } catch {
      setMessage("Gagal menghapus sertifikat");
    }
  };

  const handleCreateExperience = async (event) => {
    event.preventDefault();
    await createExperience(experienceForm);
    setExperienceForm({
      role: "",
      company: "",
      start_date: "",
      end_date: "",
      description: "",
      location: "",
      current: false,
    });
    await refreshLists();
    setMessage("Pengalaman berhasil ditambahkan");
  };

  const handleLogout = async () => {
    await signOut();
    setSession(null);
    setMessage("Logout berhasil");
  };

  if (!session) {
    return (
      <main className="page container">
        <section className="admin-login-card">
          <h1>Admin Login</h1>
          <form className="contact-form" onSubmit={handleLogin}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
          {message && <p className="status-message">{message}</p>}
        </section>
      </main>
    );
  }

  return (
    <main className="page container admin-page">
      <section className="admin-panel">
        <div className="admin-header">
          <h1>Dashboard Admin</h1>
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {message && <p className="status-message">{message}</p>}

        <div className="admin-sections">
          <div className="admin-section">
            <h2>Tambah Project</h2>
            <form className="admin-form" onSubmit={handleCreateProject}>
              <input
                placeholder="Judul"
                value={projectForm.title}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, title: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Deskripsi"
                value={projectForm.description}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    description: e.target.value,
                  })
                }
                required
              />
              <input
                placeholder="Kategori"
                value={projectForm.category}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, category: e.target.value })
                }
                required
              />
              <input
                placeholder="Image URL"
                value={projectForm.image_url}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, image_url: e.target.value })
                }
                required
              />
              <input
                placeholder="Live URL"
                value={projectForm.live_url}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, live_url: e.target.value })
                }
              />
              <input
                placeholder="Repo URL"
                value={projectForm.repo_url}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, repo_url: e.target.value })
                }
              />
              <input
                placeholder="Teknologi (pisahkan dengan koma)"
                value={projectForm.technologies}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    technologies: e.target.value,
                  })
                }
              />
              <button className="btn btn-primary" type="submit">
                Tambah Project
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>Tambah Skill</h2>
            <form className="admin-form" onSubmit={handleCreateSkill}>
              <input
                placeholder="Nama Skill"
                value={skillForm.name}
                onChange={(e) =>
                  setSkillForm({ ...skillForm, name: e.target.value })
                }
                required
              />
              <input
                placeholder="Kategori"
                value={skillForm.category}
                onChange={(e) =>
                  setSkillForm({ ...skillForm, category: e.target.value })
                }
                required
              />
              <input
                placeholder="Level"
                value={skillForm.level}
                onChange={(e) =>
                  setSkillForm({ ...skillForm, level: e.target.value })
                }
                required
              />
              <button className="btn btn-primary" type="submit">
                Tambah Skill
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>
              {isEditingEducation ? "Edit Pendidikan" : "Tambah Pendidikan"}
            </h2>
            <form className="admin-form" onSubmit={handleSaveEducation}>
              <input
                placeholder="Nama Sekolah"
                value={educationForm.school_name}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    school_name: e.target.value,
                  })
                }
                required
              />
              <input
                placeholder="Jenjang"
                value={educationForm.degree}
                onChange={(e) =>
                  setEducationForm({ ...educationForm, degree: e.target.value })
                }
                required
              />
              <input
                placeholder="Jurusan"
                value={educationForm.major}
                onChange={(e) =>
                  setEducationForm({ ...educationForm, major: e.target.value })
                }
                required
              />
              <input
                placeholder="Tahun"
                value={educationForm.year}
                onChange={(e) =>
                  setEducationForm({ ...educationForm, year: e.target.value })
                }
              />
              <textarea
                placeholder="Deskripsi pendidikan"
                value={educationForm.description}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    description: e.target.value,
                  })
                }
              />
              <button className="btn btn-primary" type="submit">
                {isEditingEducation
                  ? "Perbarui Pendidikan"
                  : "Simpan Pendidikan"}
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>
              {editingCertificateKey ? "Edit Sertifikat" : "Tambah Sertifikat"}
            </h2>
            <form className="admin-form" onSubmit={handleSaveCertificate}>
              <input
                placeholder="Nama Sertifikat"
                value={certificateForm.name}
                onChange={(e) =>
                  setCertificateForm({
                    ...certificateForm,
                    name: e.target.value,
                  })
                }
                required
              />
              <input
                placeholder="Penerbit"
                value={certificateForm.issuer}
                onChange={(e) =>
                  setCertificateForm({
                    ...certificateForm,
                    issuer: e.target.value,
                  })
                }
                required
              />
              <input
                placeholder="Tahun"
                value={certificateForm.year}
                onChange={(e) =>
                  setCertificateForm({
                    ...certificateForm,
                    year: e.target.value,
                  })
                }
              />
              <input
                placeholder="URL Sertifikat"
                value={certificateForm.credential_url}
                onChange={(e) =>
                  setCertificateForm({
                    ...certificateForm,
                    credential_url: e.target.value,
                  })
                }
              />
              <button className="btn btn-primary" type="submit">
                {editingCertificateKey
                  ? "Perbarui Sertifikat"
                  : "Tambah Sertifikat"}
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>Tambah Pengalaman</h2>
            <form className="admin-form" onSubmit={handleCreateExperience}>
              <input
                placeholder="Role"
                value={experienceForm.role}
                onChange={(e) =>
                  setExperienceForm({ ...experienceForm, role: e.target.value })
                }
                required
              />
              <input
                placeholder="Company"
                value={experienceForm.company}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    company: e.target.value,
                  })
                }
                required
              />
              <input
                type="date"
                value={experienceForm.start_date}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    start_date: e.target.value,
                  })
                }
                required
              />
              <input
                type="date"
                value={experienceForm.end_date}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    end_date: e.target.value,
                  })
                }
              />
              <textarea
                placeholder="Deskripsi"
                value={experienceForm.description}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    description: e.target.value,
                  })
                }
                required
              />
              <input
                placeholder="Lokasi"
                value={experienceForm.location}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    location: e.target.value,
                  })
                }
              />
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={experienceForm.current}
                  onChange={(e) =>
                    setExperienceForm({
                      ...experienceForm,
                      current: e.target.checked,
                    })
                  }
                />{" "}
                Saat ini bekerja
              </label>
              <button className="btn btn-primary" type="submit">
                Tambah Pengalaman
              </button>
            </form>
          </div>
        </div>

        <div className="admin-lists">
          <div className="admin-list-card">
            <h2>Projects</h2>
            {projects.map((project) => (
              <div key={project.id} className="list-item">
                <span>{project.title}</span>
                <button
                  className="btn btn-secondary small"
                  onClick={async () => {
                    await deleteProject(project.id);
                    await refreshLists();
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="admin-list-card">
            <h2>Skills</h2>
            {skills.map((skill) => (
              <div key={skill.id} className="list-item">
                <span>{skill.name}</span>
                <button
                  className="btn btn-secondary small"
                  onClick={async () => {
                    await deleteSkill(skill.id);
                    await refreshLists();
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="admin-list-card">
            <h2>Education</h2>
            <div className="list-item">
              <span>
                {profile?.education?.school_name || "Belum ada data pendidikan"}
              </span>
              <div className="list-actions">
                <button
                  className="btn btn-secondary small"
                  onClick={() => {
                    setEducationForm(
                      profile?.education || {
                        school_name: "",
                        degree: "",
                        major: "",
                        year: "",
                        description: "",
                      },
                    );
                    setIsEditingEducation(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-secondary small"
                  onClick={handleDeleteEducation}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="admin-list-card">
            <h2>Certificates</h2>
            {(profile?.certifications || []).map((certificate) => (
              <div
                key={certificate.id || certificate.name}
                className="list-item"
              >
                <span>
                  {certificate.name} - {certificate.issuer}
                </span>
                <div className="list-actions">
                  <button
                    className="btn btn-secondary small"
                    onClick={() => handleEditCertificate(certificate)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary small"
                    onClick={() => handleDeleteCertificate(certificate)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="admin-list-card">
            <h2>Experiences</h2>
            {experiences.map((experience) => (
              <div key={experience.id} className="list-item">
                <span>
                  {experience.role} - {experience.company}
                </span>
                <button
                  className="btn btn-secondary small"
                  onClick={async () => {
                    await deleteExperience(experience.id);
                    await refreshLists();
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admin;
