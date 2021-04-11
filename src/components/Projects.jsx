import React from 'react';
import Project from './Project'

const Projects = () => (
    <div id="projets" className="mb-5" data-aos="zoom-in">
        <h2 className="text-center" data-aos="zoom-in">Projets perso 🚀</h2>
        <p className="text-center warning">Quelques projets personnel public</p>
        <hr className="bg-light w-25 mb-4"/>
        <ul className="list-group projects-container">
            <Project />
        </ul>
    </div>
)

export default Projects