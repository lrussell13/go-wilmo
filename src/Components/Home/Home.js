import React from 'react';
import './Home.css'
import EventCard from '../EventCard/EventCard';

class Home extends React.Component {
  state = {
    events: [
      {
        price: 'Free',
        name: 'Event Name',
        location: '444 Here Place',
        time: '10:30pm',
        date: '30/10/20',
        upvotes: 30,
        links: 'www.here.com',
        description: 'lha jkahsdj asjkhd jaksh jskhd kjhakjhdjksahd sajkhd asjd',
        picture: 'http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill/sample.jpg'
      }
    ]
  }

  render(){
    return (
      <>
        {this.state.events.map(event => {
          return <EventCard event={event} />
        })}
      </>
    )
  }
}

export default Home;
