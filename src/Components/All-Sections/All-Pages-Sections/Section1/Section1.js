import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../../All-Section-Scss/Section1-Scss/Section1.scss';
import Js from '../../../All-Sections-Js/Section1-Js/Section1';
import mainlogo from '../../../Assects/All-Types-Of-Images/Main-Logo/6141231.png';
import $ from 'jquery'
export default function Section1() {
    return (
        <div>
            <BrowserRouter>
        <div>
            <Switch>
             <Route path="/"/>
           </Switch>
        </div> 
      </BrowserRouter>
            <section class="navigation">
                <div class="nav-container">
                    <div class="brand">
                        <a href="#!">
                            <img src={mainlogo} />
                        </a>
                    </div>
                    <nav>
                        <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                        <ul class="nav-list">
                            <li>

                               <a href="#!">Home</a>
                            </li>
                            <li>
                                <a href="#!">About</a>
                            </li>
                            <li>
                                <a href="#!">Services</a>
                                <ul class="nav-dropdown">
                                    <li>
                                        <a href="#!">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#!">Web Development</a>
                                    </li>
                                    <li>
                                        <a href="#!">Graphic Design</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Pricing</a>
                            </li>
                            <li>
                                <a href="#!">Blog</a>
                                <ul class="nav-dropdown">
                                    <li>
                                        <a href="#!">React js Develper</a>
                                    </li>
                                    <li>
                                        <a href="#!">Next js Developer</a>
                                    </li>
                                    <li>
                                        <a href="#!">Gatsby Developer</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Js />
        </div>
    )
}
