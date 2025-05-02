import React, { useState } from "react";
import "./Contact.css";
import { MdOutlinePhone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/carloaless1512@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _captcha: "false",
            _subject: "Novo contato do site - Prime Tecnologia",
            _template: "table",
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("Mensagem enviada com sucesso!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Redirect if needed (alternative to _next)
        // window.location.href = 'https://seusite.com/obrigado';
      } else {
        setSubmitMessage(
          "Erro ao enviar mensagem. Por favor, tente novamente."
        );
      }
    } catch (error) {
      setSubmitMessage("Ocorreu um erro. Por favor, tente mais tarde.");
      console.error("Erro no envio:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="contact">
      <span className="vertical-text">CONTATO</span>
      <div className="containerContact">
        <h2>Quer entrar em contato?</h2>
        <div className="contentContact">
          <div className="ct">
            <span>
              Vamos conversar.
              <br />
              Conte-nos sobre o seu projeto.
              <div className="contact-info">
                <div className="contact-section">
                  <h3 className="section-title">
                    <FaMapMarkerAlt />
                    <br></br>Nosso escritório
                  </h3>
                  <p className="contact-text">
                    R. Cap. Serafim de Barros, 2537 - sala 2 - Vila Jardim Rio
                    Claro, Jataí - GO
                  </p>
                </div>

                <div className="contact-section">
                  <h3 className="section-title">
                    <MdOutlinePhone />
                    <br></br>Número de telefone
                  </h3>
                  <p className="contact-text">(64) 3631-6296</p>
                </div>

                <div className="contact-section">
                  <h3 className="section-title">
                    <MdEmail />
                    <br></br>O email
                  </h3>
                  <p className="contact-text">
                    contato@primetecnologiajatai.com.br
                  </p>
                </div>
              </div>
            </span>
            <form onSubmit={handleSubmit} className="form">
              {/* Campos ocultos para configuração do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Novo contato do site - Prime Tecnologia"
              />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://seusite.com/obrigado"
              />

              {/* Campos do formulário */}
              <div className="groupInputName groupInput">
                <input
                  type="text"
                  name="name"
                  required
                  id="inputName"
                  className="inputName"
                  onChange={handleChange}
                  value={formData.name}
                />
                <label htmlFor="inputName">Nome</label>
              </div>

              <div className="groupInputEmail groupInput">
                <input
                  type="email"
                  name="email"
                  required
                  id="inputEmail"
                  className="inputEmail"
                  onChange={handleChange}
                  value={formData.email}
                />
                <label htmlFor="inputEmail">Email</label>
              </div>

              <div className="groupInputSubject groupInput">
                <input
                  type="text"
                  name="subject"
                  required
                  id="inputSubject"
                  className="inputSubject"
                  onChange={handleChange}
                  value={formData.subject}
                />
                <label htmlFor="inputSubject">Assunto</label>
              </div>

              <div className="groupInputMessage groupInput">
                <textarea
                  name="message"
                  required
                  id="inputMessage"
                  className="inputMessage"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
                <label htmlFor="inputMessage">Mensagem</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                Enviar
              </button>

              {submitMessage && (
                <p
                  className={`submit-message ${
                    submitMessage.includes("sucesso") ? "success" : "error"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5304.601907995231!2d-51.729100923518466!3d-17.89620267821518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93626c9e80a0c96b%3A0x53a44c516bb07a92!2sPrime%20Tecnologia!5e1!3m2!1spt-BR!2sbr!4v1729974360205!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
