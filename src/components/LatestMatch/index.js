import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch
    return (
      <div className="latest-match-card-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-main">
              <p className="match-team-name">{competingTeam}</p>
              <p className="match-details">{date}</p>
              <p className="match-details">{venue}</p>
              <p className="match-details">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="latest-match-logo"
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-item">
              <p className="match-label">First Innings</p>
              <p className="match-value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="match-label">Second Innings</p>
              <p className="match-value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="match-label">Man Of The Match</p>
              <p className="match-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="match-label">Umpires</p>
              <p className="match-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
