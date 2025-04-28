import "./Services.css";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
const animateLine = () => {
  const polylines = document.querySelectorAll(".path"); // Pega todas as linhas

  polylines.forEach((polyline) => {
    const length = polyline.getTotalLength();

    polyline.style.strokeDasharray = length;
    polyline.style.strokeDashoffset = length;
    polyline.style.transition =
      "stroke-dashoffset 3s ease-in-out, stroke 1s ease-in-out";

    setTimeout(() => {
      polyline.style.strokeDashoffset = "0";
      polyline.style.stroke = "red";
    }, 100);
  });
};

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateLine();
          }
        });
      },
      { threshold: 0.5 }
    );

    const svgContainer = document.querySelector(".svg-container");
    if (svgContainer) observer.observe(svgContainer);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services">
      <span className="vertical-text">SERVIÇOS</span>
      <div className="containerServices">
        <main className="section-relogio">
          <div className="title-controle">
            <h2>Controle de Acesso Inteligente</h2>
          </div>
          <section className="info">
            <div>
              <span className="descricao">
                <p>
                  Garanta máxima segurança e praticidade com os controladores de
                  acesso da Control iD. Nossos dispositivos oferecem tecnologia
                  avançada de identificação, incluindo leitura de impressão
                  digital de alta precisão, para um acesso rápido, confiável e
                  sem complicações.
                </p>
              </span>
            </div>

            <section className="controleAcesso">
              <section className="produtosId">
                <img
                  src={assets.controlacess}
                  alt="idclass"
                  id="idclass"
                  srcSet=""
                />
              </section>
            </section>
          </section>

          <section className="time-clock-section">
            <figure className="time-clock-image">
              <img
                src={assets.relogiodeponto}
                alt="Relógio de ponto eletrônico"
              />
              <figcaption>Relógio de Ponto</figcaption>
            </figure>
          </section>

          <section className="rhid">
            <h2>Sistema de ponto integrado ao RHID</h2>

            <div className="rhidImage">
              <img src={assets.rhid} alt="rhid" />
              <p>
                O RHID é a solução ideal para otimizar a gestão de ponto
                eletrônico, garantindo mais eficiência e precisão no controle de
                jornada dos colaboradores. Com integração direta ao relógio de
                ponto, o sistema automatiza processos, reduz erros manuais e
                assegura conformidade com a legislação trabalhista.
              </p>
            </div>
          </section>
        </main>

        <div className="itMaintenance">
          <div className="burble"></div>

          <div id="contentPersonalComputer">
            <h2>
              Seu computador está muito <span>LENTO?</span>
            </h2>

            <span>
              <pre>FOR MATA ÇÃO</pre>
            </span>

            <img src={assets.notebook} alt="notebook" />
          </div>

          <div id="contentNetwork">
            <img src={assets.network} alt="network" className="networkImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
