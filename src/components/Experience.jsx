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
            <div className="row container-experience">
                {this.state.data.map(name => (
                    <div className="col-md-12 my-2">
                        <div className="card shadow m-1">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold name-header">{name.title} - <span className="text-muted">{name.entreprise}</span></h5>
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