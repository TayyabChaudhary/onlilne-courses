import React from 'react';
import Gift from '../../../Assects/All-Types-Of-Images/All_sections_Images/Section_gift/web_developing.gif'
import Fullstack from '../../../Assects/All-Types-Of-Images/All_sections_Images/Section_gift/1b0cc9a28177f79133d2262b296b4ccb.gif';
export default function Section5() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="is-size-2 has-text-weight-bold is-loading">
                                Web Development by Taras Ivanytskyi | Design Inspiration
    </h1>
                            <p>
                                Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web-based internet applications (web apps), electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development.
    </p>
                            <button className="button is-large has-background-black-bis has-text-white">
                                Get Started
    </button>
                        </div>
                        <div className="column">
                            <img src={Gift} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="box">
                        <div className="columns">
                            <div className="column">
                                <h1 className="is-size-3 has-text-weight-medium">
                                    Full Stack Web Development Serious 2020
</h1>
                                <p>
                                    What Is Full-Stack Web Development? Full-stack developers are experts in both the front-end and back-end; so, the full stack of technology that makes up a website. They are proficient in both front-end and back-end languages and frameworks, as well as in server, network and hosting environments.
</p>
<button className="button is-medium is-success">
    View More Learning
</button>
                            </div>
                            <div className="column">
                                <img src={Fullstack} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
