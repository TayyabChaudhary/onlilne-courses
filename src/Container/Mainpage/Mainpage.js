import React from 'react';
import Pageloader from '../../Components/All-Sections/All-Pages-Sections/Pageloader/Pageloader';
import Section1 from '../../Components/All-Sections/All-Pages-Sections/Section1/Section1';
import Section2 from '../../Components/All-Sections/All-Pages-Sections/Section2/Section2';
import Section3 from '../../Components/All-Sections/All-Pages-Sections/Section3/Section3';
import Section4 from '../../Components/All-Sections/All-Pages-Sections/Section4/Section4';
import Section5 from '../../Components/All-Sections/All-Pages-Sections/Section5/Section5';
import Footer from '../../Components/All-Sections/All-Pages-Sections/Footer/Footer';
export default function Mainpage() {
    return (
        <div>
            <Pageloader/>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    )
}
