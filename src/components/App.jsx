import React from 'react'
// components
import Header from './Header'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Footer from './Footer'
// libraries
import { init } from 'ityped'
// styles
import '../assets/css/style.css'
import Diplomes from './Diplomes'
import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles




class App extends React.Component {
    // type ecriture sur header
    componentDidMount(){
        const myElement = document.querySelector('#ityped')
        init(myElement, { 
            showCursor: true,
            strings: ['Développeur', 'Concepteur' ],
            typeSpeed:  120,
            backDelay:  1500,
            cursorChar: "|"
        })
        // eslint-disable-next-line no-undef
        AOS.init({
            offset: 300,
            once: true,
            delay: 100, // values from 0 to 3000, with step 50ms
            mirror: true, // whether elements should animate out while scrolling past them
        });
    }

    render() {
        return (
            <section id="portfolio">
                <div className="container text-light" data-aos="fade-down">
                    <Header />
                    <About />
                    <Experiences />
                    <Diplomes />
                    <Projects />
                    <Footer />
                </div>
            </section>
        )
    }
}

export default App;
