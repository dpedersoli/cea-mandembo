import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import { ROUTES, ODS_INFO, CEA_INFO } from '@/utils/constants';
import './About.css';

export default function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">Sobre o Projeto</h1>
          <p className="about-hero__subtitle">
            Inovação, Educação e Sustentabilidade através da Casa12Volts®
          </p>
        </div>
      </section>

      <div className="container">
        {/* Introdução */}
        <section className="about-intro">
          <div className="intro-content">
            <h2 className="section-title">Centro de Educação Ambiental Mandembo</h2>
            <p>
              O <strong>{CEA_INFO.name}</strong>, localizado em {CEA_INFO.location}, é gerido pela
              <strong> CEA Mandembo</strong> e se dedica à educação ambiental, agroecologia e
              desenvolvimento de tecnologias sustentáveis. Desde {CEA_INFO.foundedYear}, o centro
              abriga a<strong> Casa12Volts®</strong>, primeira residência multivolts do Brasil.
            </p>
            <p>
              Com uma área total de <strong>{CEA_INFO.area}</strong>, apenas cerca de{' '}
              <strong>{CEA_INFO.usedArea}</strong> são utilizados para atividades socioambientais.{' '}
              <strong>{CEA_INFO.preservedArea}</strong> abrigam uma nascente e são dedicados à
              preservação ambiental, demonstrando o compromisso do centro com a conservação.
            </p>
            <p>
              O CEA Mandembo recebe escolas, universidades, pesquisadores e interessados em soluções
              de energia limpa, promovendo oficinas, palestras e vivências práticas sobre
              sustentabilidade e autonomia energética.
            </p>
          </div>
        </section>

        {/* Casa12Volts® */}
        <section className="casa12v-section">
          <h2 className="section-title">O que é a Casa12Volts®?</h2>

          <div className="content-grid">
            <div className="content-card">
              <div className="content-card__icon">🏡</div>
              <h3 className="content-card__title">Primeira no Brasil</h3>
              <p className="content-card__text">
                Inaugurada em 2012, é a primeira residência do país a operar integralmente com
                sistema multivolts em corrente contínua (1,5V, 3V, 5V, 12V, 19V e 24V), sem
                conversão para 110V/220V.
              </p>
            </div>

            <div className="content-card">
              <div className="content-card__icon">⚡</div>
              <h3 className="content-card__title">100% Off-Grid</h3>
              <p className="content-card__text">
                Totalmente independente da rede elétrica convencional (CEMIG), gerando sua própria
                energia através de fontes renováveis: solar, eólica e esforço físico humano.
              </p>
            </div>

            <div className="content-card">
              <div className="content-card__icon">🔋</div>
              <h3 className="content-card__title">Alta Eficiência</h3>
              <p className="content-card__text">
                Atinge 92% de eficiência energética ao eliminar perdas de conversão AC/DC, enquanto
                sistemas convencionais ficam entre 75-80%.
              </p>
            </div>

            <div className="content-card">
              <div className="content-card__icon">♻️</div>
              <h3 className="content-card__title">Sustentável</h3>
              <p className="content-card__text">
                Evita emissão de 156kg de CO₂ por ano, não depende de combustíveis fósseis e aumenta
                a vida útil dos equipamentos em até 40%.
              </p>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="how-it-works">
          <h2 className="section-title">Como Funciona?</h2>

          <div className="steps">
            <article className="step">
              <div className="step__number">1</div>
              <div className="step__content">
                <h3 className="step__title">Geração de Energia</h3>
                <p className="step__text">
                  <strong>Painéis Solares:</strong> Captam luz solar e convertem diretamente em
                  eletricidade em corrente contínua (CC).
                </p>
                <p className="step__text">
                  <strong>Turbina Eólica de Eixo Vertical:</strong> Aproveita o vento da região para
                  gerar energia complementar de forma eficiente mesmo com ventos variáveis.
                </p>
                <p className="step__text">
                  <strong>Pedal Sustentável:</strong> Bicicleta geradora instalada em espaço
                  dedicado converte esforço físico humano em energia elétrica, demonstrando a
                  relação direta entre trabalho e energia.
                </p>
              </div>
            </article>

            <article className="step">
              <div className="step__number">2</div>
              <div className="step__content">
                <h3 className="step__title">Armazenamento</h3>
                <p className="step__text">
                  A energia gerada é armazenada em{' '}
                  <strong>quatro baterias estacionárias de 12V (220 Ah cada)</strong>, que podem
                  operar em série ou paralelo (12V/24V), garantindo autonomia energética mesmo
                  durante a noite ou em dias nublados.
                </p>
              </div>
            </article>

            <article className="step">
              <div className="step__number">3</div>
              <div className="step__content">
                <h3 className="step__title">Distribuição Multivolts</h3>
                <p className="step__text">
                  Sistema de tomadas com múltiplas saídas (1,5V, 3V, 5V, 12V, 19V, 24V) e{' '}
                  <strong>tomadas USB</strong> permite que diferentes aparelhos funcionem
                  diretamente em CC, sem conversores ou transformadores.
                </p>
              </div>
            </article>

            <article className="step">
              <div className="step__number">4</div>
              <div className="step__content">
                <h3 className="step__title">Monitoramento e Controle</h3>
                <p className="step__text">
                  <strong>Três controladores de carga solar e um eólico</strong> gerenciam a
                  captação de energia, enquanto <strong>painéis de medição digital</strong>{' '}
                  monitoram corrente, tensão e potência nas bases de 12V e 24V em tempo real.
                </p>
              </div>
            </article>

            <article className="step">
              <div className="step__number">5</div>
              <div className="step__content">
                <h3 className="step__title">Consumo Eficiente</h3>
                <p className="step__text">
                  Lâmpadas LED, geladeira bivolt (12V/24V) da <strong>Elber</strong>, liquidificador
                  12V importado dos EUA, TV, computador all-in-one 19V, e diversos aparelhos
                  adaptados operam com máxima eficiência, eliminando as perdas de 20-25% típicas de
                  sistemas convencionais.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Inovações e Adaptações */}
        <section className="innovations">
          <h2 className="section-title">Inovações e Adaptações Tecnológicas</h2>

          <div className="innovations-grid">
            <div className="innovation-item">
              <span className="innovation-icon">📡</span>
              <h3 className="innovation-title">Internet via Satélite</h3>
              <p className="innovation-text">
                Estação de recepção alimentada por placas solares que leva internet por cabo de
                fibra óptica até a Casa12Volts®, operando modem e amplificador em 12V.
              </p>
            </div>

            <div className="innovation-item">
              <span className="innovation-icon">🌡️</span>
              <h3 className="innovation-title">Mini Estação Meteorológica 5V</h3>
              <p className="innovation-text">
                Monitora temperatura, umidade e previsão do tempo com energia renovável,
                demonstrando aplicações práticas de baixa voltagem.
              </p>
            </div>

            <div className="innovation-item">
              <span className="innovation-icon">⚖️</span>
              <h3 className="innovation-title">Aparelhos Adaptados</h3>
              <p className="innovation-text">
                Balança digital (3V), rádio (5V) e relógio de parede (1,5V) foram adaptados de
                pilhas para energia renovável, eliminando descarte de baterias.
              </p>
            </div>

            <div className="innovation-item">
              <span className="innovation-icon">🚿</span>
              <h3 className="innovation-title">Aquecedor Solar à Vácuo</h3>
              <p className="innovation-text">
                Desenvolvido em parceria com o <strong>CEFET-BH</strong>, aquece água a ~110°C,
                produzindo água esterilizada sem consumo elétrico.
              </p>
            </div>

            <div className="innovation-item">
              <span className="innovation-icon">🌧️</span>
              <h3 className="innovation-title">Pluviômetro Próprio</h3>
              <p className="innovation-text">
                Instrumento de medição de chuvas que auxilia no monitoramento climático e
                planejamento de atividades agroecológicas.
              </p>
            </div>

            <div className="innovation-item">
              <span className="innovation-icon">♻️</span>
              <h3 className="innovation-title">Gestão de Resíduos</h3>
              <p className="innovation-text">
                Compostagem de orgânicos, biodigestor para tratamento de resíduos sanitários e
                lixeiras para coleta seletiva no espaço Pedal Sustentável.
              </p>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="differentials">
          <h2 className="section-title">Diferenciais Tecnológicos</h2>

          <div className="differentials-grid">
            <div className="differential-item">
              <span className="differential-icon">✓</span>
              <p>Eliminação de inversores e transformadores</p>
            </div>
            <div className="differential-item">
              <span className="differential-icon">✓</span>
              <p>Redução de perdas energéticas de 25% para 8%</p>
            </div>
            <div className="differential-item">
              <span className="differential-icon">✓</span>
              <p>Equipamentos duram até 40% mais tempo</p>
            </div>
            <div className="differential-item">
              <span className="differential-icon">✓</span>
              <p>Sistema modular e escalável</p>
            </div>
            <div className="differential-item">
              <span className="differential-icon">✓</span>
              <p>Baixa manutenção e alta confiabilidade</p>
            </div>
            <div className="differential-item">
              <span className="differential-icon">✓</span>
              <p>Replicável em comunidades isoladas</p>
            </div>
            <div className="differential-item">
              <span className="differential-icon">✓</span>
              <p>Voltagens múltiplas: 1,5V, 3V, 5V, 12V, 19V e 24V</p>
            </div>
            <div className="differential-item">
              <span className="differential-icon">✓</span>
              <p>Autonomia total sem dependência da CEMIG</p>
            </div>
          </div>
        </section>

        {/* Reconhecimento */}
        <section className="recognition">
          <h2 className="section-title">Reconhecimento e Visitas Técnicas</h2>
          <div className="recognition-content">
            <p>
              A Casa12Volts® já recebeu visitas técnicas de importantes empresas e personalidades:
            </p>
            <ul className="recognition-list">
              <li>
                <strong>Omexon</strong> - Empresa especializada em energias renováveis
              </li>
              <li>
                <strong>Vince</strong> - Empresa francesa de energias renováveis e seus(suas)
                engenheiros(as)
              </li>
              <li>
                <strong>Miss Terra 2024</strong> - Reconhecimento Nacional
              </li>
              <li>
                <strong>CEFET-BH</strong> - Parceiro no desenvolvimento do aquecedor solar à vácuo
              </li>
            </ul>
            <p>
              Estas visitas comprovam a relevância técnica e o potencial replicável do projeto,
              servindo de referência para soluções de autonomia energética.
            </p>
          </div>
        </section>

        {/* ODS */}
        <section className="ods-alignment">
          <h2 className="section-title">Alinhamento com os ODS</h2>
          <p className="section-description">
            O projeto Casa12Volts® contribui diretamente para os Objetivos de Desenvolvimento
            Sustentável da ONU:
          </p>

          <div className="ods-detailed">
            <div className="ods-item">
              <div className="ods-badge" style={{ backgroundColor: ODS_INFO[7].color }}>
                <span className="ods-badge__icon">{ODS_INFO[7].icon}</span>
                <span className="ods-badge__number">{ODS_INFO[7].number}</span>
              </div>
              <div className="ods-content">
                <h3 className="ods-title">{ODS_INFO[7].title}</h3>
                <p className="ods-text">
                  Demonstra viabilidade técnica e econômica de sistemas de energia limpa e
                  acessível, especialmente para comunidades rurais e isoladas sem acesso à rede
                  elétrica convencional.
                </p>
              </div>
            </div>

            <div className="ods-item">
              <div className="ods-badge" style={{ backgroundColor: ODS_INFO[13].color }}>
                <span className="ods-badge__icon">{ODS_INFO[13].icon}</span>
                <span className="ods-badge__number">{ODS_INFO[13].number}</span>
              </div>
              <div className="ods-content">
                <h3 className="ods-title">{ODS_INFO[13].title}</h3>
                <p className="ods-text">
                  Reduz emissões de gases de efeito estufa ao eliminar dependência de combustíveis
                  fósseis, evitando 156kg de CO₂ por ano e promovendo educação sobre mudanças
                  climáticas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projeto Acadêmico */}
        {/* <section className="academic-project">
          <div className="academic-card">
            <h2 className="academic-title">Projeto de Extensão Universitária</h2>
            <p className="academic-text">
              Este portal educativo foi desenvolvido como parte do Projeto de Extensão do curso de
              <strong> Análise e Desenvolvimento de Sistemas</strong> do Centro Universitário
              Faculdade Descomplica.
            </p>
            <p className="academic-text">
              O objetivo é democratizar o acesso à informação sobre energias renováveis e sistemas
              sustentáveis, permitindo que estudantes, educadores e o público geral compreendam os
              benefícios práticos da tecnologia Casa12Volts®.
            </p>
            <div className="academic-info">
              <div className="info-item">
                <strong>Desenvolvedor:</strong> Daniel Pedersoli Moreira Santos
              </div>
              <div className="info-item">
                <strong>Instituição:</strong> Centro Universitário Faculdade Descomplica
              </div>
              <div className="info-item">
                <strong>Curso:</strong> Análise e Desenvolvimento de Sistemas
              </div>
              <div className="info-item">
                <strong>Período:</strong> Novembro/Dezembro 2025
              </div>
            </div>
          </div>
        </section> */}

        {/* Links Úteis */}
        <section className="useful-links">
          <h2 className="section-title">Links Úteis</h2>
          <div className="links-grid">
            <a
              href="https://www.ongverde.org"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              style={{ textDecoration: 'none' }}
            >
              <span className="link-icon">🌿</span>
              <span className="link-text">CEA Mandembo</span>
              <span className="link-arrow">→</span>
            </a>

            <a
              href="https://casa12volts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              style={{ textDecoration: 'none' }}
            >
              <span className="link-icon">⚡</span>
              <span className="link-text">Casa12Volts®</span>
              <span className="link-arrow">→</span>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="cta-box">
            <h2 className="cta-title">Explore os Projetos Interativos</h2>
            <p className="cta-description">
              Utilize nossas ferramentas educativas para entender melhor como a Casa12Volts®
              funciona e quanto você pode economizar.
            </p>
            <div className="cta-buttons">
              <Link to={ROUTES.DASHBOARD} style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="large">
                  Dashboard Casa12Volts®
                </Button>
              </Link>
              <Link to={ROUTES.COMPARATOR} style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="large">
                  Comparador Interativo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
