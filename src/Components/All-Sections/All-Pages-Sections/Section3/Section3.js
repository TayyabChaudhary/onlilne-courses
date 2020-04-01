import React from 'react'

export default function Section3() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="is-size-1 has-text-centered">
                        What We Do Offer
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h1 className="is-size-4">
                                    HTML
                                </h1>
                                <progress class="progress is-primary" value="100" max="100">100%</progress>
                                <h1 className="is-size-4">
                                    CSS
                               </h1>
                                <progress class="progress is-link" value="50" max="100">50%</progress>
                                <h1 className="is-size-4">
                                    JavaScript
                                </h1>
                                <progress class="progress is-info" value="45" max="100">45%</progress>
                                <h1 className="is-size-4">
                                    JQuery
                                </h1>
                                <progress class="progress is-success" value="95" max="100">95%</progress>
                                <h1 className="is-size-4">
                                    React Js
                                </h1>
                                <progress class="progress is-warning" value="75" max="100">75%</progress>
                                <h1 className="is-size-4">
                                    PHP
                                </h1>
                                <progress class="progress is-danger" value="90" max="100">90%</progress>
                            </div>
                            <div className="column">
                                <ul>
                                    <li>
                                        <span>
                                            <i class="fa fa-heart-o is-size-2 has-text-weight-bold" aria-hidden="true"></i><span className="is-size-3 has-text-weight-bold"> Web Development</span>
                                        </span>
                                        <p>
                                            Start Developing Your Own Professional Website with Wix's Advanced Tools. Get the Flexibility You Need to Create Without Limits and Stand Out Online. Traffic generation tools. Free multilingual fonts. SEO wizard. Easy-to-add blog. 100s of Apps. Easy drag n’ drop.
                                   </p>
                                    </li>
                                    <hr />
                                    <li>
                                        <span>
                                            <i class="fa fa-mobile is-size-1 has-text-weight-bold" aria-hidden="true"></i><span className="is-size-3 has-text-weight-bold"> ReactJs  Development</span>
                                        </span>
                                        <p>
                                            React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
                                   </p>
                                    </li>
                                    <hr />
                                </ul>
                                <button className="button is-large has-background-primary has-text-white is-inverted" title="Get Started Your Learning">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
