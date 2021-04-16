import React from 'react';
import reactImage from '../assets/images/react.png'
import netlifyImage from '../assets/images/netlify.png'

const Footer = () => (
    <div className="mt-5 mb-5">
        <p className="text-center"> Code with ❤️ by Benoît Petit </p>
        <p className="text-center second-footer">Made with <a href="https://fr.reactjs.org/" target="blank_"><img className="img-footer" src={reactImage} alt="react"/></a> and hosted on <a href="https://netlify.com/" target="blank_"><img className="img-footer netlify-footer" src={netlifyImage} alt="vercel"/></a></p>
        <p className="name-footer text-center">Bp</p>
    </div>
)

export default Footer
