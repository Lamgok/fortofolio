import { useState } from "react";
import { sendMessage } from "../services/portfolio";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendMessage(formData);
      setStatus("Pesan berhasil dikirim!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("Gagal mengirim pesan, coba lagi.");
    }
  };

  return (
    <main className="page container contact-page">
      <section className="contact-card">
        <div>
          <span className="badge">Contact</span>
          <h1>Hubungi saya</h1>
          <p>
            Jika Anda tertarik bekerja sama, kirim pesan melalui form di bawah
            ini.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            placeholder="Subjek"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Pesan"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary" type="submit">
            Kirim Pesan
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;
