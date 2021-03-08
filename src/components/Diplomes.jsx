import React from 'react'
import Diplome from './Diplome'

const Diplomes = () => (
    <div id="diplome" className="mb-5">
        <h2 className="text-center" data-aos="zoom-in">Diplomes 👨‍🎓</h2>
        <p className="text-center">Mes certifications et diplomes</p>
        <hr className="bg-light w-25 mb-4"/>
        <ul className="list-group diplomes-container">
            <Diplome />
        </ul>
    </div>
)

export default Diplomes