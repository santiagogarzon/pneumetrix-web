import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="industify_fn_footer">
                <div className="top_footer">
                    <div className="top_footer_img" style={{ "background": "url(img/footer/bg.jpg)" }}></div>
                    {/* <!-- SUBSCRIBE --> */}
                    <div className="subscribe_f">
                        <div className="container">
                            <div className="subscribe_in">
                                <div className="s_left">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 297.001 297.001" style={{ "enableBackground": "new 0 0 297.001 297.001" }} xmlSpace="preserve" className="fn__svg replaced-svg">
                                        <path d="M287.034,60.873l-20.819-0.001V39.321c0-4.934-3.61-9.126-8.49-9.856c-0.852-0.128-21.134-3.074-45.557,1.37    c-27.227,4.954-48.941,17.171-63.668,35.64c-14.728-18.469-36.442-30.686-63.668-35.64c-24.424-4.443-44.706-1.498-45.557-1.37    c-4.88,0.731-8.49,4.923-8.49,9.856v21.551H9.966C4.463,60.872,0,65.335,0,70.839v187.805c0,3.227,1.562,6.254,4.193,8.124    s6.004,2.35,9.051,1.288c0.748-0.259,75.431-25.747,131.12-0.345c2.628,1.199,5.645,1.199,8.273,0    c55.533-25.33,130.376,0.088,131.12,0.345c1.068,0.372,2.174,0.555,3.276,0.555c2.043,0,4.065-0.628,5.775-1.842    c2.631-1.87,4.193-4.897,4.193-8.124V70.84C297,65.336,292.538,60.873,287.034,60.873z M19.933,245.309V80.805h10.852v132.726    c0,2.896,1.267,5.646,3.458,7.539c2.191,1.893,5.105,2.742,7.969,2.319c0.55-0.08,43.846-6.024,75.478,15.679    C78.725,232.405,39.727,240.112,19.933,245.309z M138.534,230.08c-13.932-12.588-32.079-21.1-53.702-25.034    c-10.406-1.894-20.06-2.446-27.78-2.446c-2.292,0-4.414,0.049-6.333,0.126V48.473h-0.001c19.155-0.864,65.752,1.184,87.816,38.587    V230.08z M158.466,87.061c21.985-37.243,68.655-39.384,87.816-38.563v154.228c-8.383-0.338-20.62-0.136-34.114,2.32    c-21.623,3.934-39.77,12.445-53.702,25.034V87.061z M179.277,239.074c31.636-21.716,74.955-15.766,75.495-15.686    c2.871,0.431,5.783-0.413,7.981-2.305c2.198-1.894,3.462-4.65,3.462-7.552V80.806h10.852v164.503    C257.267,240.11,218.253,232.4,179.277,239.074z"></path>
                                    </svg>
                                    <p>Newsletter — get updates with latest topics</p>
                                </div>
                                <div className="s_right">
                                    <div className="subscriber">
                                        <input type="email" placeholder="Your e-mail address *" />
                                        <input type="submit" value="Subscribe" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /SUBSCRIBE --> */}
                    {/* <!-- TRIPLE WIDGET --> */}
                    <div className="footer_widget">
                        <div className="container">
                            <div className="inner">
                                <ul className="widget_area">
                                    <li>
                                        <div className="item">
                                            <div className="logo">
                                                <Link href="/"><a><img src="img/logo-light.png" alt="" /></a></Link>
                                            </div>
                                            <div className="textwidget">
                                                <p>We are focused on user-driven outcomes, we strive to create meaningful connections for users through considered strategy and innovation.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="wid-title">
                                                <span>Business Hours</span>
                                            </div>
                                            <div className="industify_fn_widget_business_hours">
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Monday-Friday:</span>
                                                                <span className="hours">9am to 5pm</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Saturday:</span>
                                                                <span className="hours">10am to 3pm</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Sunday:</span>
                                                                <span className="hours">Closed</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="wid-title"><span>Helpful Links</span></div>
                                            <div className="widget_nav_menu">
                                                <ul className="menu">
                                                    <li><Link href="/services"><a>Our Services</a></Link></li>
                                                    <li><Link href="#"><a>Disclaimer</a></Link></li>
                                                    <li><Link href="#"><a>Showcase</a></Link></li>
                                                    <li><Link href="#"><a>Privacy Policy</a></Link></li>
                                                    <li><Link href="#"><a>Affliates</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /TRIPLE WIDGET --> */}
                </div>
                {/* <!-- BOTTOM --> */}
                <div className="footer_bottom">
                    <div className="container">
                        <div className="footer_bottom_in">
                            <div className="bottom_widget">
                                <div className="widget_nav_menu">
                                    <ul className="menu">
                                        <li><Link href="/services"><a>Services</a></Link></li>
                                        <li><Link href="#"><a>Affliates</a></Link></li>
                                        <li><Link href="#"><a>Disclaimer</a></Link></li>
                                        <li><Link href="#"><a>Privacy Policy</a></Link></li>
                                        <li><Link href="#"><a>Career</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_copyright">
                                <p>&copy; 1934 – 2021 Industify, LCC. All rights reserved. Theme has been developed by <Link href="https://themeforest.net/user/trendycoder"><a target="_blank" rel="noreferrer">TrendyCoder</a></Link></p>
                            </div>
                            <Link href="#">
                                <a className="industify_fn_totop">
                                    <span className="top"></span>
                                    <span className="text">To Top</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <!-- /BOTTOM --> */}
            </footer>
        </>
    )
}
