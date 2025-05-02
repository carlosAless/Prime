import "./Services.css";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
          <div className="title-controle"></div>
          <section className="info">
            <img
              src={assets.controlacess}
              alt="idclass"
              id="idclass"
              srcSet=""
            />
            <div>
              <h2>CONTROLE DE ACESSO INTELIGENTE</h2>
              <p>
                Garanta máxima segurança e praticidade com os controladores de
                acesso da Control iD. Nossos dispositivos oferecem tecnologia
                avançada de identificação, incluindo leitura de impressão
                digital de alta precisão, para um acesso rápido, confiável e sem
                complicações.
              </p>
              <span id="budget">
                Saiba mais
                <IoIosArrowForward />
              </span>
            </div>
          </section>

          <section className="time-clock-section">
            <div>
              <h2>RELOGIO DE PONTO</h2>
              <p>
                O iDClass alia eficiência e custo-benefício elevados, oferecendo
                as tecnologias de identificação presentes no Relógio de Ponto
                iDClass, mas sem os recursos dispensados por Convenção ou Acordo
                Coletivo de Trabalho. Como diferencial — além do design arrojado
                característico dos produtos Control iD —, sua memória interna
                oferece a capacidade de armazenar os dados de até 15 mil
                funcionários e de 10 milhões de registros.
              </p>
              <span id="budget">
                Saiba mais
                <IoIosArrowForward />
              </span>
            </div>
            <figure className="time-clock-image">
              <img
                src={assets.relogiodeponto}
                alt="Relógio de ponto eletrônico"
              />
            </figure>
          </section>

          <section className="rhid">
            <div>
              <h2>
                SISTEMA DE PONTO INTEGRADO AO RH<span id="red">iD</span>
              </h2>
              <p>
                O RHID é a solução ideal para otimizar a gestão de ponto
                eletrônico, garantindo mais eficiência e precisão no controle de
                jornada dos colaboradores. Com integração direta ao relógio de
                ponto, o sistema automatiza processos, reduz erros manuais e
                assegura conformidade com a legislação trabalhista.
              </p>
              <span id="budget">
                Saiba mais
                <IoIosArrowForward />
              </span>
            </div>

            <div className="rhidImage">
              <img src={assets.rhid} alt="rhid" />
            </div>
          </section>
        </main>

        <div className="itMaintenance">
          <div id="contentPersonalComputer">
            <h2>
              Seu computador está muito <span>LENTO?</span>
            </h2>
            <span id="budget">
              solicite um orçamento
              <IoIosArrowForward />
            </span>

            <img src={assets.notebook} alt="notebook" />
          </div>

          <div id="contentNetwork">
            <h2>
              SERVIÇOS ESPECIALIZADOS EM <span>Redes de Computadores</span>
            </h2>
            <span id="budget">
              solicite um orçamento
              <IoIosArrowForward />
            </span>
            <img src={assets.network} alt="network" className="networkImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
