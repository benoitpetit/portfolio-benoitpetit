import React from 'react';
import stack from '../assets/images/stack.png'

const About = () => (
    <div id="about" className="my-5">
        <h2 className="text-center">À Propos 👨🏻‍💻</h2>
        <hr className="bg-light w-25 mb-4" />
        <div className="row container-about p-4">
            <p className="text-justify" >J'ai 33 ans. Je suis <strong className="warning">Concepteur et Développeur d'application web</strong> Je suis diplômé de la 
            Webforce3 / ENI où j’ai étudié l'intégration et le développement d'application Web. 
            J’effectue continuellement une veille pour me tenir au courant des avancées technologiques et langages informatiques<br /><br />
            </p>
        </div>
        <div className="d-flex justify-content-center">
            <img className="stack" src={stack} alt="stack"/>
        </div>
    </div>
)

export default About