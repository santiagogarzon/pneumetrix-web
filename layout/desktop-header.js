import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "../public/svg/social/IconSocial";

const background = "img/call.png";

export default function DesktopHeader() {
  const [isActive, setActive] = useState(false);
  const activeTrueFalse = () => setActive(!isActive);
  const [isSelect, setSelect] = useState("USD");

  return (
    <>
      <div className="industify_fn_header">
        {/* <!-- Header: Top Panel --> */}
        {/* <div className="industify_fn_toppanel">
                    <div className="left_panel">
                        <div className="info">
                            <Link href="tel:07787744741"><a>(0778) 774 - 474 -1</a></Link>
                        </div>
                        <div className="info">
                            <Link href="mailto:rendycoder.com@gmail.com"><a>trendycoder.com@gmail.com</a></Link>
                        </div>
                        <div className="industify_fn_social_list">
                            <ul>
                            <li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Facebook className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Twitter className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Instagram className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Vk className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Linkedin className="fn__svg" />
									</a></Link>
								</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
        {/* <!-- /Header: Top Panel --> */}

        {/* <!-- Header: Bottom Panel --> */}
        <div className="header_inner">
          <div className="menu_logo">
            <Link href="/">
              <a>
                <img
                  className="desktop_logo"
                  src="img/logo-dark-png.png"
                  alt="Industry HTML Template"
                />
                <img
                  className="desktop_logo_dark"
                  src="img/logo-dark.png"
                  alt="Industry HTML Template"
                />
              </a>
            </Link>
          </div>
          <div className="menu_nav">
            <ul className="industify_fn_main_nav vert_nav">
              {/* <li className="menu-item-has-children">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/">
                      <a>Home Alpha</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-1">
                      <a>Home Beta</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-2">
                      <a>Home Gamma</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3">
                      <a>Home Delta</a>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link href="/portfolio">
                  <a>Proyectos</a>
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/services">
                  <a>Nuestros Servicios</a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/service-single-9">
                      <a>Aerospace and Defense</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-single-8">
                      <a>Automative Manufacturing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-single-7">
                      <a>Chemical Industry</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-single-6">
                      <a>Oil and Gas Industry</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-single-5">
                      <a>Energy &#038; Commodities</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-single-4">
                      <a>Medical Devices</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-single-3">
                      <a>Housewares &#038; Home Decor</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-single-2">
                      <a>Textiles &#038; Apparel</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-single-1">
                      <a>Construction &#038; Engineering</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="menu-item-has-children">
                <Link href="#">
                  <a>Pages</a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/gallery">
                      <a>Gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/404">
                      <a>404 Page</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/principles">
                      <a>Our Principles</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Our Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-full">
                      <a>Blog Full</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/protected">
                      <a>Protected Page</a>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="toll_free_lang">
            {/* <div className="lang_switcher">
              <span onClick={activeTrueFalse} className="click">
                {isSelect}
              </span>
            </div>
            <div
              className={
                isActive
                  ? "industify_fn_moving_lang opened"
                  : "industify_fn_moving_lang"
              }
              style={{
                position: "absolute",
                left: "1281.16px",
                top: "105.085px",
              }}
            >
              <ul onClick={activeTrueFalse}>
                <li onClick={() => setSelect("Eng")}>
                  <span>Eng</span>
                </li>
                <li onClick={() => setSelect("Spa")}>
                  <span>Spa</span>
                </li>
                <li onClick={() => setSelect("Rus")}>
                  <span>Rus</span>
                </li>
              </ul>
            </div> */}
            <div className="toll_free">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <span className="shape3"></span>
              <div className="tf_in">
                <div
                  className="img_holder"
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
                <p>
                  <span>Contactanos:</span> +34 612 423 234
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Header: Bottom Panel --> */}
      </div>
      <div className="my-class"></div>
    </>
  );
}
