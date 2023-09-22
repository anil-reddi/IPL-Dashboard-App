import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {id, name, imageUrl} = teamData
    return (
      <Link className="link-team" to={`/team-matches/${id}`}>
        <li className="team-card">
          <img src={imageUrl} alt={`${name}`} className="card-image" />
          <p className="card-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
