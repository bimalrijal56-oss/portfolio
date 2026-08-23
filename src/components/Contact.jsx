import { useState } from "react";
import { CONTACT_INFO } from "../data/profile";
import { SERVICE_OPTIONS } from "../data/contact";
import { buildWhatsAppLink } from "../utils/helpers";
import { useReveal } from "../hooks/useReveal";
import SectionTitle from "./SectionTitle";
import "./Contact.css";

const EMPTY_FORM = {
  name: "",
  email: "",
  whatsapp: "",
  service: SERVICE_OPTIONS[0],
  message: "",
};

const CONTACT_CARDS = [
  {
    icon: "bi-envelope-fill",
    label: "Email",
    value: CONTACT_INFO.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`,
  },
  {
    icon: "bi-telephone-fill",
    label: "Phone",
    value: CONTACT_INFO.phone || CONTACT_INFO.whatsappDisplay,
    href: `tel:${CONTACT_INFO.phoneNumber || "+9779867428466"}`,
  },
  {
    icon: "bi-whatsapp",
    label: "WhatsApp",
    value: CONTACT_INFO.whatsappDisplay,
    href: buildWhatsAppLink(CONTACT_INFO.whatsappNumber, "Hi Bimal, I'd like to get in touch."),
  },
  { icon: "bi-geo-alt-fill", label: "Location", value: CONTACT_INFO.location, href: null },
];

export default function Contact() {
  const [ref, isVisible] = useReveal();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please add a short message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus(null);
      return;
    }

    const whatsappMessage = [
      `New inquiry from ${form.name}`,
      `Service: ${form.service}`,
      form.whatsapp ? `Contact number: ${form.whatsapp}` : null,
      `Email: ${form.email}`,
      `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(CONTACT_INFO.whatsappNumber, whatsappMessage), "_blank", "noopener,noreferrer");

    setStatus("success");
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle
          eyebrow="Hire Me"
          title="Let's build something together"
          description="Tell me a bit about your project and I'll get back to you as soon as possible."
        />

        <div ref={ref} className={`contact-grid reveal-stagger ${isVisible ? "is-visible" : ""}`}>
          <div className="contact-info glass-card" data-aos="fade-up">
            <p className="contact-info-heading">Reach me directly</p>
            {CONTACT_CARDS.map(({ icon, label, value, href }, index) => {
              const Row = (
                <div
                  className={`contact-row ${index !== CONTACT_CARDS.length - 1 ? "has-divider" : ""}`}
                  key={label}
                >
                  <span className="contact-row-icon">
                    <i className={`bi ${icon}`} aria-hidden="true"></i>
                  </span>
                  <div>
                    <p className="contact-row-label">{label}</p>
                    <p className="contact-row-value">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-row-link"
                  key={label}
                  aria-label={`${label}: ${value}`}
                >
                  {Row}
                </a>
              ) : (
                Row
              );
            })}
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate data-aos="fade-up">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span className="form-error" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span className="form-error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="whatsapp">WhatsApp Number</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>

              <div className="form-field">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && (
                <span className="form-error" id="message-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              <i className="bi bi-send-fill" aria-hidden="true"></i> Send Message
            </button>

            {status === "success" && (
              <p className="form-status" role="status">
                Thanks! Your message is ready in WhatsApp — please hit send there to reach me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
