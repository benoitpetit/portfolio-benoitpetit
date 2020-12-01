import React from 'react';
import stack from '../assets/images/stack.png'

const About = () => (
    <div id="about" className="my-5">
        <h2 className="text-center">À Propos 👨🏻‍💻</h2>
        <hr className="bg-light w-25 mb-4" />
        <div className="row container-about p-3">
            <p className="text-justify" >J'ai 32 ans je suis <strong>Concepteur et Développeur d'application</strong> PHP/Symfony et React, je suis diplômé de la Webforce3 de Lille où j’ai
            étudié l'intégration et le développement d'appplication Web et Mobile. J’effectue continuellement une veille
            informatique pour me tenir au courant des avancées technologiques et langages informatiques. <br /><br />
            J'entame une formation de perfectionnement chez ENI "Ecole d'informatique" dans la <strong>conception
                    d'application</strong>, <blockquote className="header-cite"> je suis à la recherche d'un stage pour finaliser cette formation du 21 juin au 13 août 2021.</blockquote></p>
        </div>
        <div className="d-flex justify-content-center">
            <img className="stack" src={stack} alt=""/>
        </div>
    </div>
)


export default About