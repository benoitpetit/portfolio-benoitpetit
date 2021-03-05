import React from 'react'
import projectsDatas from '../assets/datas/projectsData'

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: projectsDatas
        }
    }
    render() {
        return (
            <ul className="list-group p-3">
                {
                    this.state.data.map(name => (
                        <div className="shadow m-1">
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <li className="list-group-item"><span className="badge badge-mix">{name.technologies}</span><a className="text-light lien-container-projects" href={name.url}> - {name.name} </a></li>
                        </div>
                    ))
                }
            </ul>

        )
    }
}

export default Project