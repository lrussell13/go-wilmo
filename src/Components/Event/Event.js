import React from 'react';
import './Event.css';
import Header from '../Header/Header';

class Event extends React.Component {
  state = {
    event: {
      id: 2,
      price: 'Free',
      name: 'Event Name',
      location: '444 Here Place',
      time: '10:30 pm',
      date: '30/10/20',
      upvotes: 30,
      link: 'www.here.com',
      description: 'lha jkahsdj asjkhd jaksh jskhd kjhakjhdjksahd sajkhd asjd',
      image: 'http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill/sample.jpg'
    }
  }

  render(){
    return (
      <>
      <Header></Header>
      <div className="event-page">
        <div className="title">
          <h1>
            {this.state.event.name}
          </h1>
          <div>
            <button className="upvotes-event">{this.state.event.upvotes} ^</button>
          </div>
        </div>
        <div className="subtitle-container">
          <div className="subtitles">
            <p>○ {this.state.event.location}</p>
            <p className="time">○ {this.state.event.time}</p>
          </div>
        </div>
        <div className="event-image-container">
          <img alt={this.state.event.name} src={this.state.event.image}></img>
        </div>
        <div className="content">
          <div className="content-header">
            <p className="price">{this.state.event.price}</p>
            <p>{this.state.event.link}</p>
          </div>
          <div className="description-container">
            <p>
              {this.state.event.description}
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Event;