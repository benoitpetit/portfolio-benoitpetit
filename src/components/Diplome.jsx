import React from 'react'
import diplomesData from '../assets/datas/diplomesData'

class Diplome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: diplomesData.reverse()
        }
    }
    render() {
        return (
            <ul className="list-group p-3">
                {
                    this.state.data.map(name => (
                        <div className="shadow m-1" data-aos="fade-up">
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <li className="list-group-item"><a className="text-light lien-container-projects" target='_blank' href={name.link}>📃 {name.id} - <span className="text-diplome">{name.title}</span> </a></li>
                        </div>

                    ))
                }
            </ul>
        );
    }
}

export default Diplome;