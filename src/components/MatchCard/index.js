import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-logo"
        />
        <p className="card-name">{competingTeam}</p>
        <p className="card-result">{result}</p>
        <p className="card-status">{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
