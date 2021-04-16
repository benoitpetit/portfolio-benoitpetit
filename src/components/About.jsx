import React from 'react';
import stack from '../assets/images/stack.png'

const About = () => (
    <div id="about" className="my-5">
        <h2 className="text-center">À Propos 👨🏻‍💻</h2>
        <hr className="bg-light w-25 mb-4" />
        <div className="row container-about p-3">
            <p className="text-justify" >J'ai 33 ans. Je suis <strong className="warning">Concepteur et Développeur d'application web</strong> diplômé de 
            la WebForce 3 Lille où j’ai étudié l'intégration et le développement d'appplication Web et Mobile. 
            J’effectue continuellement une veille informatique pour me tenir au courant des avancées technologiques et langages informatiques.<br /><br />
            Je suis une formation de perfectionnement chez ENI "Ecole d'informatique" dans la <strong>conception d'application : </strong>
            <blockquote className="header-cite"><span className="warning"> je suis à la recherche d'un stage pour finaliser cette formation (du 21 juin au 13 août 2021). </span></blockquote>
            </p>
        </div>
        <div className="d-flex justify-content-center">
            <img className="stack" src={stack} alt="stack"/>
        </div>
    </div>
)

export default About