import React from 'react'
// datas images
import profil from '../assets/images/pictures/profil.png'
import twi from '../assets/images/socials/twi-w.png'
import link from '../assets/images/socials/link-w.png'
import gt from '../assets/images/socials/github-w.png'

const Header = () => (
    <div className="mb-5 mt-5">
        <img className="rounded-circle mx-auto d-block head-profil" data-aos="zoom-in" src={profil} alt="profil pic" />
        <h1 className="text-center display-5 mt-3">Hello ! moi c'est <span className="name-header">Benoît Petit</span> <br /> <span className="resp-header">je suis <span id="ityped" /> web</span><span className="resp-text-header">je suis Concepteur et Developpeur web</span></h1>

        <div className="d-flex justify-content-center">
            <div className="p-2"> <a target="blank_" href="https://www.linkedin.com/in/benoit-petit-110/"><img
                className="social-icon" src={link} alt={'linkedin logo'} /></a></div>
            <div className="p-2"> <a target="blank_" href="https://twitter.com/codingben_"><img
                className="social-icon" src={twi} alt={'twitter logo'} /></a></div>
            <div className="p-2"><a target="blank_" href="https://github.com/benoitpetit"><img
                className="social-icon" src={gt} alt={'linkedin logo'} /></a></div>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <a className="btn btn-outline-light p-3 shadow" data-aos="zoom-in" target="blank_" href="https://drive.infomaniak.com/app/share/297996/00a7e453-a647-441a-9d96-7f6212f2979e">Télécharger mon CV</a>
        </div>
    </div>
)

export default Header