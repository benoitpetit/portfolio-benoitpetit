import React from 'react'
import experiencesData from '../assets/datas/experiencesData'

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: experiencesData.reverse(),
        }
    }
    render() {
        return (
            <div className="row container-experience" data-aos="zoom-in">
                {this.state.data.map(name => (
                    <div className="col-md-12 m-1">
                        <div className="card shadow">
                            <div className="card-body">
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                <h5 className="card-title font-weight-bold experiences-link"><a className="lien-container-projects link-style" href="https://www.linkedin.com/in/benoit-petit-110/" target='_blank'>{name.title}</a> <span className="text-muted small">- {name.entreprise}</span></h5>
                                <p className="card-text">{name.details}</p>
                                <small className="text-muted">{name.location} - ({name.dates}) - {name.duration}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Experience;