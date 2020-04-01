import React from 'react'
import Team1 from '../../../Assects/All-Types-Of-Images/All_sections_Images/Team_Images/Fairly-Diverse-Business-Team-1024x682.jpg';
import Team2 from '../../../Assects/All-Types-Of-Images/All_sections_Images/Team_Images/The Team is the Trick in Business.jpg';
import Team3 from '../../../Assects/All-Types-Of-Images/All_sections_Images/Team_Images/D985_37_028_1200.jpg';
import Team4 from '../../../Assects/All-Types-Of-Images/All_sections_Images/Team_Images/thumbnail_large.webp';
import '../../../All-Section-Scss/Section4_Scss/Section4.scss';
export default function Section4() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="is-size-1 has-text-centered has-text-weight-semibold" data-aos="fade-right">
                        How do you manage your team?
                    </h1>
                    <section className="section">
                        <div className="container">
                            <div class="columns grid">
                                <figure class="effect-terry">
                                    <img src={Team1} alt="img16" data-aos="fade-bottom" />
                                    <figcaption>
                                        <h2>Web  <span>Development</span></h2>
                                        <p>
                                            <a href="#" ><i class="fa fa-fw fa-download" download></i></a>
                                            <a href="#"><i class="fa fa-fw fa-heart"></i></a>
                                            <a href="#"><i class="fa fa-fw fa-share"></i></a>
                                            <a href="#"><i class="fa fa-fw fa-tags"></i></a>
                                        </p>
                                    </figcaption>
                                </figure>
                                <figure class="effect-terry">
                                    <img src={Team2} alt="img26" />
                                    <figcaption>
                                        <h2>Reactjs<span>Development</span></h2>
                                        <p>
                                            <a href="#"><i class="fa fa-fw fa-download"></i></a>
                                            <a href="#"><i class="fa fa-fw fa-heart"></i></a>
                                            <a href="#"><i class="fa fa-fw fa-share"></i></a>
                                            <a href="#"><i class="fa fa-fw fa-tags"></i></a>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class=" columns grid">
                                <figure class="effect-ming">
                                    <img src={Team3} alt="img09" />
                                    <figcaption>
                                        <h2>Andoriod App <span>Development</span></h2>
                                        <p>
                                            Android software development is the process by which new applications are created for devices running the Android operating system.
                                        </p>
                                        <a href="#">View more</a>
                                    </figcaption>
                                </figure>
                                <figure class="effect-ming">
                                    <img src={Team4} alt="img08" />
                                    <figcaption>
                                        <h2>Backend<span>Development</span></h2>
                                        <p>
                                            Backend development (also stylized as back-end or back end development) is the skill that powers the web.
                                        </p>
                                        <a href="#">View more</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
