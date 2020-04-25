import React from 'react';
import './EventCard.css';

class EventCard extends React.Component {
  render(){
    return (
      <div className="event-card">
        <div className="event-card-info">
          <div className="event-card-banner">
            <p>
              { this.props.event.price }
            </p>
          </div>
          <div className="event-card-body">
            <h2>{this.props.event.name}</h2>
            <div className="subtitles">
              <p>○ {this.props.event.location}</p>
              <p>○ {this.props.event.time}</p>
            </div>
            <div>
              <button className="upvotes">{this.props.event.upvotes} ^</button>
            </div>
          </div>  
        </div>
        <div className="event-card-image">
          <img alt={this.props.event.name} src={this.props.event.image} className="event-image"></img>
        </div>
      </div>
    )
  }
}

export default EventCard;
