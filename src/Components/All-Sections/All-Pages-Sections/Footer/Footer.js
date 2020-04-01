import React from 'react'
// import './Footer.scss'
import './Footer.scss'
export default function Footer() {
    return (
        <div>


            <footer class="new_footer_area bg_color">
                <div class="new_footer_top">
                    <div class="container">
                        <div class="columns">
                            <div class="column">
                                <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: " visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new templates and extensions.!</p>
                                    <div class="field is-grouped">
                                        <p class="control is-expanded">
                                            <input class="input" type="text" placeholder="Enter Your Email" />
                                        </p>
                                        <p class="control">
                                            <a class="button is-primary">
                                                Subscribe
    </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: " visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Laibary Use</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="#">Company Help</a></li>
                                        <li><a href="#">Android App Developer</a></li>
                                        <li><a href="#">Reactjs Developer</a></li>
                                        <li><a href="#">Nextjs Developer</a></li>
                                        <li><a href="#">Gatsby Developer</a></li>
                                        <li><a href="#">Php & MySql Developer</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: " visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Documentation</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column">
                                <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: " visible", animationDelay: "0.8s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div class="f_social_icon">
                                        <a href="#" class="fa fa-facebook"></a>
                                        <a href="#" class="fa fa-google"></a>
                                        <a href="#" class="fa fa-linkedin"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bg">
                        <div class="footer_bg_one"></div>
                        <div class="footer_bg_two"></div>
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="container">
                        <div class="columns align-items-center">
                            <div class="column">
                                <p class="mb-0 f_400">© Free Online Learning Inc..2020, 2021 All rights reserved.</p>
                            </div>
                            <div class="column is-right">
                                <p>Made with <i class="icon_heart"></i> in <a href="#">Free Online Learning</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
