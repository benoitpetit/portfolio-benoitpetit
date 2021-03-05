import React from 'react'
import Diplome from './Diplome'

const Diplomes = () => (
    <div id="diplome" className="mb-5" data-aos="zoom-in" data-aos-delay="150">
        <h2 className="text-center" data-aos="zoom-in" data-aos-delay="150" >Diplomes 👨‍🎓</h2>
        <p className="text-center">Mes certifications et diplomes</p>
        <hr className="bg-light w-25 mb-4"/>
        <ul className="list-group diplomes-container">
            <Diplome />
        </ul>
    </div>
)

export default Diplomes