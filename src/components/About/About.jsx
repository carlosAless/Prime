import { assets } from "../../assets/assets";
import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="aboutSection" ref={ref}>
      <div className="highlightsContainer">
        <div className="highlightItem">
          <img src={assets.suporte} alt="suporte" />
          <span>
            {" "}
            {inView ? <CountUp start={0} end={24} duration={3} /> : "0"}/{" "}
            {inView ? <CountUp start={0} end={7} duration={3} /> : "0"}
          </span>
          <p>Suporte</p>
        </div>

        <div className="highlightItem">
          <img
            src={assets.empresa}
            alt="+12 empresas mensalistas"
            className="icon"
          />
          <span>
            + {inView ? <CountUp start={0} end={12} duration={5} /> : "0"}
          </span>
          <p>empresas mensalistas</p>
        </div>

        <div className="highlightItem">
          <img
            src={assets.experiencia}
            alt="+9 anos de experiência"
            className="icon"
          />
          <span>
            + {inView ? <CountUp start={0} end={9} duration={5} /> : "0"}
          </span>
          <p>anos de experiência</p>
        </div>

        <div className="highlightItem">
          <img
            src={assets.mapa}
            alt="Atendimento em Jataí e região"
            className="icon"
          />
          <span>✔</span>
          <p>Atendimento em Jataí e região</p>
        </div>
      </div>

      <div className="servicesList">
        <model-viewer
          src={assets.computer}
          alt="A 3D model of an object"
          auto-rotate
          camera-controls
          ar
        ></model-viewer>

        <div className="contentServices">
          <div className="serviceItem">
            <div className="serviceIcon"></div>
            <h4>Relógio de ponto</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <div className="serviceItem">
            <div className="serviceIcon"></div>
            <h4>Redes e infraestrutura</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <div className="serviceItem">
            <div className="serviceIcon"></div>
            <h4>Suporte em T.I</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <div className="serviceItem">
            <div className="serviceIcon"></div>
            <h4>Venda de equipamentos</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>

        <div className="description">
          <h2>
            Atuamos nas áreas de consultoria, desenvolvimento, infraestrutura,
            suporte, treinamento, recuperação de dados, segurança da informação
            e venda de equipamentos. Prezamos pela qualidade dos produtos e
            serviços por meio de uma busca constante em satisfazer nossos
            clientes. Integramos pessoas e processos através de soluções
            tecnológicas que visem a excelência dos negócios e o crescimento dos
            nossos parceiros.
          </h2>
        </div>
      </div>

      <div className="carroselList">
        <h3>Clientes que confiam</h3>

        <div>
          <img src={assets.oliveiragomes} alt="oliveiragomes" />
          <img src={assets.prefeitura} alt="prefeitra" />
          <img src={assets.jataiautopecas} alt="jataiautopecas" />
          <img src={assets.trialmoto} alt="trialmoto" />
        </div>
      </div>
    </section>
  );
};
