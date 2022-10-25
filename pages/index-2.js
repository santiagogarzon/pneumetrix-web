import React from "react";
import DesktopHeader from "../layout/desktop-header";
import MobileHeader from "../layout/mobile-header";
import Title from "../layout/title";
import Link from "next/link";
import { Arrow_r, PlayVideo, Stars } from "../public/svg/icon";
import {
  Design,
  Drawing,
  Learning,
  Pipe,
  TowerCrane,
} from "../public/svg/service/IconService";

const headerBG = "img/slider/1.jpeg";
const background1 = "img/about/rating_bg.jpg";
const portfolio_bg1 = "img/slider/1.jpeg";
const portfolio_bg2 = "img/portfolio/2.jpg";
const portfolio_bg3 = "img/portfolio/3.jpg";
const blog_bg = "img/blog/map.png";
const blog_bg1 = "img/blog/1.jpg";
const blog_bg2 = "img/blog/2.jpg";
const blog_bg3 = "img/blog/3.jpg";

export default function Index3() {
  return (
    <>
      <Title title="Home Gama" />
      <div className="industify_fn_wrapper_all" data-nav-skin="nobglight">
        {/* <!-- Wrapper --> */}
        <div className="industify_fn_wrapper">
          {/* <!-- Header --> */}
          <DesktopHeader />
          {/* <!-- /Header --> */}

          {/* <!-- Mobile Menu --> */}
          <MobileHeader />
          {/* <!-- /Mobile Menu --> */}

          {/* <!-- Preloader --> */}
          {/* <Preloader/> */}
          {/* <!-- /Preloader --> */}

          {/* <!-- Hero Header --> */}
          <div className="fn_cs_hero_header">
            <div className="container">
              <div className="content_holder max800">
                <div className="title_holder">
                  <h3>
                    <span>Ahorro energetico</span> a través de la optimización
                    del uso del <span>aire comprimido</span>
                  </h3>
                  <p>
                    Ayudamos a las organizaciones a reducir su huella ecológica
                    al tiempo que garantizamos el suministro adecuado de energía
                    en sus procesos de producción
                  </p>
                </div>
                <div className="btn_holder fn_cs_lightgallery">
                  <Link href="/services">
                    <a className="discover">Quiero saber más</a>
                  </Link>
                  <span
                    className="video lightbox"
                    data-src="https://youtu.be/3j3SQEUfREs"
                  >
                    <span className="icon"></span>
                    <span className="text">Ver Video</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg_holder">
              <div
                className="o_img"
                style={{ background: `url(${headerBG})` }}
              ></div>
              <div className="o_color"></div>
            </div>
          </div>
          {/* <!-- /Hero Header --> */}

          {/* <!-- Introduce Shortcode --> */}
          <div
            className="fn_cs_introduce_wrap fn_cs_lightgallery"
            data-url-show="yes"
            data-wing-switch="enable"
          >
            <div className="container">
              <div className="fn_cs_introduce">
                <span className="wing11"></span>
                <span className="wing12"></span>
                <span className="wing21"></span>
                <span className="wing22"></span>
                <span
                  className="video lightbox"
                  data-src="https://youtu.be/3j3SQEUfREs"
                >
                  <span></span>
                </span>
                <div className="o_color"></div>

                <div className="content_holder">
                  <div className="title_holder">
                    <h5>Sobre nosotros</h5>
                    <h3>Nuestra compañia</h3>
                    <p>
                      Pneumetrix es un proveedor de soluciones integrales
                      centradas en el ahorro energético en la industria.
                    </p>
                    <p>
                      {" "}
                      El aire comprimido puede ser una pieza fundamental para el
                      buen funcionamiento de una instalación industrial. A pesar
                      de ello, se suele hacer un uso indebido del mismo y es uno
                      de los grandes olvidados en los proyectos de optimización
                      energética.
                    </p>
                    <p>
                      Nuestro objetivo es proporcionaros datos, apoyo en la
                      implementación de medidas y seguimiento de la eficacia de
                      las mismas para garantizar la eficiencia del aire
                      comprimido en vuestros procesos de producción.
                    </p>
                  </div>
                  <div className="badge_holder">
                    <div className="title">
                      <h3>
                        Eficiencia energetica en Aire Comprimido
                        <br />
                        IOT
                      </h3>
                    </div>
                    <div className="content">
                      <span className="year">3</span>
                      <span>años de experiencia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Introduce Shortcode --> */}

          {/* <!-- Service Classic Shortcode --> */}
          <div className="fn_cs_services_classic">
            <div className="container">
              <div className="list">
                <ul>
                  <li>
                    <div className="item">
                      <Link href="/service-single-1">
                        <a></a>
                      </Link>
                      <span className="bg1"></span>
                      <span className="bg2"></span>
                      <span className="icon">
                        <Pipe className="fn__svg" />
                      </span>
                      <h3>Visita</h3>
                      <p>
                        Visitamos vuestras instalaciones para conocer vuestros
                        procesos y vuestro sistema de aire comprimido. En
                        función de las particularidades de vuestro sistema,
                        seleccionamos los sensores, la conectividad inalámbrica
                        y los pasos de auditoría adicionales para satisfacer
                        vuestras necesidades de supervisión.
                      </p>
                      <span className="more_details">
                        <Link href="#">
                          <a>
                            Más detalles
                            <Arrow_r className="fn__svg" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <Link href="/service-single-2">
                        <a></a>
                      </Link>
                      <span className="bg1"></span>
                      <span className="bg2"></span>
                      <span className="icon">
                        <Drawing className="fn__svg" />
                      </span>
                      <h3>Instalación</h3>
                      <p>
                        Nos encargamos de la instalación de los sensores que
                        sean necesarios, según vuestras necesidades específicas.
                        También configuramos una plataforma privada basada en la
                        nube en la que podréis obtener fácilmente información
                        sobre su sistema de aire comprimido y las oportunidades
                        de ahorro.
                      </p>
                      <span className="more_details">
                        <Link href="#">
                          <a>
                            Más detalles
                            <Arrow_r className="fn__svg" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <Link href="/service-single-3">
                        <a></a>
                      </Link>
                      <span className="bg1"></span>
                      <span className="bg2"></span>
                      <span className="icon">
                        <Learning className="fn__svg" />
                      </span>
                      <h3>Evaluación</h3>
                      <p>
                        Os proporcionamos todos los datos sobre el coste y el
                        funcionamiento de vuestro sistema de aire comprimido.
                        También somos capaces de desarrollar soluciones
                        específicas para reducir vuestro consumo energético
                        relacionado con el aire comprimido.
                      </p>
                      <span className="more_details">
                        <Link href="#">
                          <a>
                            Más detalles
                            <Arrow_r className="fn__svg" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <Link href="/service-single-4">
                        <a></a>
                      </Link>
                      <span className="bg1"></span>
                      <span className="bg2"></span>
                      <span className="icon">
                        <Design className="fn__svg" />
                      </span>
                      <h3>Seguimiento</h3>
                      <p>
                        Nuestro análisis es continuo para hacer un seguimiento
                        de las mejoras implementadas en vuestro sistema de aire
                        comprimido. Esto garantiza su eficacia y os ayuda a
                        reducir su coste energético y su huella ecológica de
                        forma sostenible.
                      </p>
                      <span className="more_details">
                        <Link href="#">
                          <a>
                            Más detalles
                            <Arrow_r className="fn__svg" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="support_section_2">
            {/* <!-- Support Shortcode --> */}
            <div className="fn_cs_support_block" data-icon-type="none">
              <div className="container">
                <div className="support_block">
                  <div className="content">
                    <div className="desc">
                      <p>
                        ¿Sois una empresa del sector industrial y utilizáis aire
                        comprimido en vuestros procesos? ¿Queréis tener el
                        control sobre vuestro gasto energético y poder reducir
                        vuestros costes en electricidad?
                      </p>
                    </div>
                    <div className="bottom_section">
                      <div className="link_block">
                        <Link href="https://industify.frenify.net/1/contact/">
                          <a>Solicita un presupuesto</a>
                        </Link>
                      </div>
                      <div className="tfree_block">
                        <p>Contactanos: +34 612 423 234 </p>
                      </div>
                    </div>
                  </div>
                  <div className="img_wrap">
                    <span></span>
                    <img src="/img/about/support.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /Support Shortcode --> */}
          </div>

          <div className="service_section_2">
            {/* <!-- Main Title --> */}
            <div className="fn_cs_main_title">
              <div className="container">
                <div className="title_holder">
                  <h3>Nuestros Planes</h3>
                </div>
              </div>
            </div>
            {/* <!-- /Main Title --> */}

            {/* <!-- Services Shortcode --> */}
            <div className="fn_cs_services">
              <div className="container">
                <div className="list">
                  <ul>
                    <li>
                      <div className="item">
                        <Link href="/service-single-9">
                          <a></a>
                        </Link>
                        <span className="bg1"></span>
                        <span className="bg2"></span>
                        <span className="icon">
                          <span></span>
                          <Learning className="fn__svg" />
                        </span>
                        <h3>Recogida de datos</h3>
                        <p>
                          Medición detallada de vuestro consumo de aire
                          comprimido y del coste eléctrico asociado
                        </p>
                        <p>
                          <span>-</span>Instalación y mantenimiento de sensores
                          de consumo en su sistema de aire comprimido.
                        </p>
                        <p>
                          <span>-</span>Recogida continua de datos a través de
                          una interfaz inalámbrica.
                        </p>
                        <p>
                          <span>-</span>Datos de consumo detallados para su uso
                          en el control, informes energéticos, etc.
                        </p>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </div>
                    </li>

                    <li>
                      <div className="item">
                        <Link href="/service-single-7">
                          <a></a>
                        </Link>
                        <span className="bg1"></span>
                        <span className="bg2"></span>
                        <span className="icon">
                          <span></span>
                          <TowerCrane className="fn__svg" />
                          {/* <img className="fn__svg" src="/svg/service/tower-crane.svg" alt="svg" /> */}
                        </span>
                        <h3>Acciones</h3>
                        <p>
                          Opciones de mejora implementables con un caso de
                          inversión claro para su instalación
                        </p>
                        <p>
                          <span>-</span> Explicación detallada de todo el
                          potencial de ahorro encontrado en la instalación.
                        </p>
                        <p>
                          <span>-</span>Análisis de la inversión para cada
                          opción de mejora.
                        </p>
                        <p>
                          <span>-</span>
                          Facilidades en la contratación de las mejoras de la
                          instalación con nuestra red de socios.
                        </p>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Link href="/service-single-7">
                          <a></a>
                        </Link>
                        <span className="bg1"></span>
                        <span className="bg2"></span>
                        <span className="icon">
                          <span></span>
                          <Pipe className="fn__svg" />
                          {/* <img className="fn__svg" src="/svg/service/tower-crane.svg" alt="svg" /> */}
                        </span>
                        <h3>Resultados</h3>
                        <p>
                          Servicio completo de implantación y seguimiento
                          continuo de su instalación de aire comprimido
                        </p>
                        <p>
                          <span>-</span> Implementación integral de las medidas
                          de mejora.
                        </p>
                        <p>
                          <span>-</span>Acceso a consultas personalizadas con
                          nuestros expertos en aire comprimido.
                        </p>
                        <p>
                          <span>-</span>
                          Auditoría física anual de la instalación, incluida la
                          auditoría de fugas.
                        </p>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /Services Shortcode --> */}
          </div>
          {/* <!-- /Service Classic Shortcode --> */}

          {/* <!-- Info & Rating --> */}
          {/* <div className="fn_cs_info_rating">
            <div className="container">
              <div className="inner">
                <div className="left_part">
                  <div className="title_holder">
                    <h3 className="l_title">
                      World&apos;s Leading Industry Corporation
                    </h3>
                    <p className="l_desc">
                      To further develop our corporate strengths we have
                      established a corporate mandate to maintain strong core
                      values that truly reflect the companys philosophy.
                    </p>
                  </div>
                  <div className="l_video fn_cs_lightgallery">
                    <span
                      className="lightbox"
                      data-src="https://youtu.be/3j3SQEUfREs"
                    >
                      <span className="icon">
                        <PlayVideo className="fn__svg" />
                      </span>
                      <span className="text">View Company Promo Video</span>
                    </span>
                  </div>
                </div>
                <div className="middle_part">
                  <div className="m_in">
                    <div className="rating_holder">
                      <div className="r_header"></div>
                      <div className="r_footer"></div>
                      <Link href="#">
                        <a></a>
                      </Link>
                      <Stars className="fn__svg" />
                      <h3 className="rating_number">9.7</h3>
                      <h3 className="rating_text">Customer Rating</h3>
                    </div>
                    <div className="tagline_holder">
                      <div className="tl_inner">
                        <span>Full reviews at trustpilot</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right_part">
                  <div
                    className="o_img"
                    style={{ backgroundImage: `url(${background1})` }}
                  ></div>
                  <div className="o_color"></div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- /Info & Rating --> */}

          {/* <!-- Principles --> */}
          {/* <div className="fn_cs_principles">
            <div className="container">
              <div className="inner">
                <div className="left_part">
                  <h3>Our Guiding Principles</h3>
                  <p>
                    For over 35 years, the Industify family has been building
                    relationships and projects that last. As a diversified
                    construction management, design-build, and general
                    contracting firm, Industify is recognized as one of Upstate
                    New York&apos;s largest construction companies.
                  </p>
                  <p>
                    Serving an impressive list of long-term clients, we are an
                    organization of seasoned professionals with a tremendous
                    breadth of construction experience and expertise across
                    multiple industries.
                  </p>
                </div>
                <div className="right_part">
                  <ul className="masonry">
                    <li className="masonry_in">
                      <div className="item">
                        <div className="title_holder">
                          <h3>Humility</h3>
                          <p>
                            Be humble in all dealings with our partners, clients
                            and team members. True wisdom and understanding
                            belong to the humble.
                          </p>
                        </div>
                        <div className="number_holder">01</div>
                      </div>
                    </li>
                    <li className="masonry_in">
                      <div className="item">
                        <div className="title_holder">
                          <h3>Honesty</h3>
                          <p>
                            Be sure of our facts and be honest and
                            straightforward in all of our dealings with each
                            other and our clients.
                          </p>
                        </div>
                        <div className="number_holder">02</div>
                      </div>
                    </li>
                    <li className="masonry_in">
                      <div className="item">
                        <div className="title_holder">
                          <h3>Passion</h3>
                          <p>
                            Success is when we can achieve results in the things
                            we are passionate about and feel as though we are
                            making a difference.
                          </p>
                        </div>
                        <div className="number_holder">03</div>
                      </div>
                    </li>
                    <li className="masonry_in">
                      <div className="item">
                        <div className="title_holder">
                          <h3>Quality Work</h3>
                          <p>
                            We ensure that all projects are done with utmost
                            professionalism using quality materials while
                            offering clients the support and accessibility.
                          </p>
                        </div>
                        <div className="number_holder">04</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- /Principles --> */}

          {/* <!-- Project Sticky Modern Shortcode --> */}
          <div
            className="fn_cs_project_sticky_modern"
            data-animation-type="alpha"
          >
            <div className="container">
              <div className="inner">
                <div className="left_part">
                  <div className="fn_cs_sticky_section">
                    <div className="left_part_in">
                      <h3>Nuestros Proyectos</h3>
                      <p>
                        Es nuestro deseo de ayudar a nuestros clientes a
                        maximizar sus ganancias y disminuir sus gastos para que
                        logren alcanzar sus objetivos.{" "}
                      </p>
                      <Link href="/portfolio">
                        <a>Todos los proyectos</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="right_part">
                  <div className="fn_cs_sticky_section">
                    <ul>
                      <li>
                        <div className="item">
                          <div className="img_holder">
                            <img src="img/thumb/560-375.jpg" alt="" />
                            <div
                              className="abs_img"
                              style={{
                                backgroundImage: `url(${portfolio_bg1})`,
                              }}
                            >
                              <Link href="/portfolio-single-1">
                                <a></a>
                              </Link>
                            </div>
                          </div>
                          <div className="title_holder">
                            <h3>
                              <Link href="/portfolio-single-1">
                                <a>Imprenta industrial.</a>
                              </Link>
                            </h3>
                            <p>
                              <Link href="/portfolio-single-1">
                                <a>
                                  <span className="text">Ver Más</span>
                                  <span className="arrow">
                                    <Arrow_r className="fn__svg" />
                                  </span>
                                </a>
                              </Link>
                            </p>
                            <Link href="/portfolio-single-1">
                              <a></a>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <div className="img_holder">
                            <img src="img/thumb/560-375.jpg" alt="" />
                            <div
                              className="abs_img"
                              style={{
                                backgroundImage: `url(${portfolio_bg2})`,
                              }}
                            >
                              <Link href="/portfolio-single-2">
                                <a></a>
                              </Link>
                            </div>
                          </div>
                          <div className="title_holder">
                            <h3>
                              <Link href="/portfolio-single-2">
                                <a>Chaban Car Industry</a>
                              </Link>
                            </h3>
                            <p>
                              <Link href="/portfolio-single-2">
                                <a>
                                  <span className="text">View More</span>
                                  <span className="arrow">
                                    <Arrow_r className="fn__svg" />
                                  </span>
                                </a>
                              </Link>
                            </p>
                            <Link href="/portfolio-single-2">
                              <a></a>
                            </Link>
                          </div>
                        </div>
                      </li>
                      {/* <li>
                        <div className="item">
                          <div className="img_holder">
                            <img src="img/thumb/560-375.jpg" alt="" />
                            <div
                              className="abs_img"
                              style={{
                                backgroundImage: `url(${portfolio_bg3})`,
                              }}
                            >
                              <Link href="/portfolio-single-3">
                                <a></a>
                              </Link>
                            </div>
                          </div>
                          <div className="title_holder">
                            <h3>
                              <Link href="/portfolio-single-3">
                                <a>Industify Gas and Oil Organization</a>
                              </Link>
                            </h3>
                            <p>
                              <Link href="/portfolio-single-3">
                                <a>
                                  <span className="text">View More</span>
                                  <span className="arrow">
                                    <Arrow_r className="fn__svg" />
                                  </span>
                                </a>
                              </Link>
                            </p>
                            <Link href="/portfolio-single-3">
                              <a></a>
                            </Link>
                          </div>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Project Sticky Modern Shortcode --> */}

          {/* <!-- Blog Section --> */}
          <div className="blog_section">
            <div
              className="overlay"
              style={{ backgroundImage: `url(${blog_bg})` }}
            ></div>

            {/* <!-- Main Title --> */}
            <div className="fn_cs_main_title">
              <div className="container">
                <div className="title_holder">
                  <h3>Thoughts &amp; Experiments</h3>
                </div>
              </div>
            </div>
            {/* <!-- /Main Title --> */}

            {/* <!-- Triple Blog Modern Shortcode --> */}
            <div className="fn_cs_triple_blog_modern fn_alpha">
              <div className="container">
                <div className="inner">
                  <ul>
                    <li>
                      <div className="item">
                        <div
                          className="img_holder"
                          style={{ backgroundImage: `url(${blog_bg1})` }}
                        >
                          <div className="time">
                            <span></span>
                            <h3>28</h3>
                            <h5>Aug</h5>
                            <h5>2018</h5>
                          </div>
                          <Link href="/blog-single-1">
                            <a></a>
                          </Link>
                          <img src="img/thumb/370-250.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <p className="t_header">
                            By{" "}
                            <Link href="#">
                              <a>Frenify</a>
                            </Link>{" "}
                            — In{" "}
                            <Link href="#">
                              <a>Australia</a>
                            </Link>
                          </p>
                          <h3>
                            <Link href="/blog-single-1">
                              <a>Laing O’Rourke: Moves, projects and bids</a>
                            </Link>
                          </h3>
                          <p className="t_footer">
                            <Link href="/blog-single-1">
                              <a>Read More</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div
                          className="img_holder"
                          style={{ backgroundImage: `url(${blog_bg2})` }}
                        >
                          <div className="time">
                            <span></span>
                            <h3>27</h3>
                            <h5>Aug</h5>
                            <h5>2018</h5>
                          </div>
                          <Link href="/blog-single-2">
                            <a></a>
                          </Link>
                          <img src="img/thumb/370-250.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <p className="t_header">
                            By{" "}
                            <Link href="#">
                              <a>Frenify</a>
                            </Link>{" "}
                            — In{" "}
                            <Link href="#">
                              <a>Australia</a>
                            </Link>
                          </p>
                          <h3>
                            <Link href="/blog-single-2">
                              <a>How to turn Victorian gasholders apartments</a>
                            </Link>
                          </h3>
                          <p className="t_footer">
                            <Link href="/blog-single-2">
                              <a>Read More</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div
                          className="img_holder"
                          style={{ backgroundImage: `url(${blog_bg3})` }}
                        >
                          <div className="time">
                            <span></span>
                            <h3>26</h3>
                            <h5>Aug</h5>
                            <h5>2018</h5>
                          </div>
                          <Link href="/blog-single-3">
                            <a></a>
                          </Link>
                          <img src="img/thumb/370-250.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <p className="t_header">
                            By{" "}
                            <Link href="#">
                              <a>Frenify</a>
                            </Link>{" "}
                            — In{" "}
                            <Link href="#">
                              <a>Australia</a>
                            </Link>
                          </p>
                          <h3>
                            <Link href="/blog-single-3">
                              <a>CITB appoints Peter Lauener as new chairman</a>
                            </Link>
                          </h3>
                          <p className="t_footer">
                            <Link href="/blog-single-3">
                              <a>Read More</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /Triple Blog Modern Shortcode --> */}
          </div>
          {/* <!-- /Blog Section --> */}

          {/* <!-- Footer --> */}
          <div data-html="includes/footer.html"></div>
          {/* <!-- /Footer --> */}
        </div>
      </div>
    </>
  );
}
