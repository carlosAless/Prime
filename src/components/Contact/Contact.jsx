import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Você pode adicionar lógica para enviar o formulário aqui

    // Limpa os campos do formulário após o envio
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact">
      <span className="vertical-text">CONTATO</span>
      <div className="containerContact">
        <h2>Quer entrar em contato?</h2>
        <div className="contentContact">
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
          <form action="" className="form" onSubmit={(e) => handleSubmit(e)}>
            <div className="groupInputName groupInput">
              <input
                type="text"
                required
                id="inputName"
                className="inputName"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="inputName">Nome</label>
            </div>
            <div className="groupInputEmail groupInput">
              <input
                type="email"
                required
                id="inputEmail"
                className="inputEmail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="inputEmail">Email</label>
            </div>
            <div className="groupInputSubject groupInput">
              <input
                type="text"
                required
                id="inputSubject"
                className="inputSubject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <label htmlFor="inputSubject">Assunto</label>
            </div>
            <div className="groupInputMessage groupInput">
              <textarea
                required
                id="inputMessage"
                className="inputMessage"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
              <label htmlFor="inputMessage">Mensagem</label>
            </div>
            <input type="submit" value={"Enviar"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
