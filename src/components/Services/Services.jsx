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
        <div className="section-relogio">
          <main className="relogio">
            <div className="title-controle">
              <h2>Controle de Acesso Inteligente</h2>
            </div>
            <section className="info">
              <div>
                <span className="descricao">
                  <p>
                    Garanta máxima segurança e praticidade com os controladores
                    de acesso da Control iD. Nossos dispositivos oferecem
                    tecnologia avançada de identificação, incluindo leitura de
                    impressão digital de alta precisão, para um acesso rápido,
                    confiável e sem complicações.
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

            <div className="svg-container">
              {/*  <svg
                width="100%"
                height="500"
                viewBox="0 0 800 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100%" height="100%" fill="black" />

                <image
                  className="timeClock"
                  x="auto"
                  y="auto"
                  width="400"
                  height="400"
                  href={assets.timeClock}
                  transform="translate(200,50)"
                />

                <polyline
                  className="path"
                  points="150,0 300,0 400,100"
                  stroke="gray"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="400" cy="100" r="5" fill="red" />

                <polyline
                  className="path"
                  points="150,250 245,250"
                  stroke="gray"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="245" cy="250" r="5" fill="red" />

                <polyline
                  className="path"
                  points="150, 490 300,490 410,270"
                  stroke="gray"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="410" cy="270" r="5" fill="red" />

                <text x="-180" y="3%" className="label">
                  Capacidade de bobina até 400 metros
                </text>
                <text x="-55" y="50%" className="label">
                  Conexão de Internet
                </text>
                <text x="-150" y="99%" className="label">
                  Display colorido de 2,4 polegadas
                </text>
                <text x="310" y="496" className="label">
                  Leitor de código de barras
                </text>
                <text x="700" y="496" className="label">
                  Display colorido de 2,4 polegadas
                </text>
                <text x="700" y="200" className="label">
                  Duas portas USB fiscal e geral
                </text>
                <text x="700" y="20" className="label">
                  RHID + IDCLOUD integração com software de apuração de ponto na
                  nuvem
                </text>
              </svg> */}

              <img src={assets.relogiodeponto} alt="relogio de ponto" />
            </div>
          </main>

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
          <div className="itMaintenance">
            <div className="burble"></div>

            <div id="contentPersonalComputer">
              <h2>
                Seu computador está muito <span>LENTO?</span>
              </h2>

              <img src={assets.notebook} alt="notebook" />
            </div>

            <div id="contentNetwork">
              <img src={assets.network} alt="network" className="networkImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
