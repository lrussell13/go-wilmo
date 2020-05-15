import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import EventCard from '../EventCard/EventCard';
import DatePicker from 'react-date-picker';

import Header from '../Header/Header';
 
import "react-datepicker/dist/react-datepicker.css";

class Home extends React.Component {
  state = {
    page: 1,
    pages: 3,
    dateSelected: new Date(),
    events: [
      {
        id: 1,
        price: 'Free',
        name: 'Event Name',
        location: '444 Here Place',
        time: '10:30pm',
        date: '30/10/20',
        upvotes: 30,
        links: 'www.here.com',
        description: 'lha jkahsdj asjkhd jaksh jskhd kjhakjhdjksahd sajkhd asjd',
        image: 'http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill/sample.jpg'
      },
      {
        id: 2,
        price: 'Free',
        name: 'Event Name is supperrrr long',
        location: '444 Here Place',
        time: '10:30pm',
        date: '30/10/20',
        upvotes: 30,
        links: 'www.here.com',
        description: 'lha jkahsdj asjkhd jaksh jskhd kjhakjhdjksahd sajkhd asjd',
        image: 'https://firebasestorage.googleapis.com/v0/b/go-wilmo.appspot.com/o/need-tasks.png?alt=media&token=f173d164-064a-44c0-9032-2477f8d3ee8d'
      }
    ]
  }

  handleChange = date => {
    this.setState({
      dateSelected: date
    });
  };

  getDateString(){
    let date = new Date();
    let today = (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear();
    let tomorrow = (date.getMonth()+1)+'/'+(date.getDate() + 1)+'/'+date.getFullYear();
    let dateString = (this.state.dateSelected.getMonth()+1)+'/'+(this.state.dateSelected.getDate())+'/'+this.state.dateSelected.getFullYear();

    if(today === dateString){
      return 'Today';
    } else if(tomorrow === dateString) {
      return 'Tomorrow';
    } else {
      return dateString;
    }
  }

  updatePage(amt){
    let page = this.state.page;
    this.setState({ page: page + amt });
    console.log(page + amt)
  }

  buildPrev(){
    if(this.state.page > 1){
      return (
        <p className="prev" onClick={() => this.updatePage(-1)}>
          Previous
        </p>
      );
    }
  }

  buildNext(){
    if(this.state.page !== this.state.pages){
      return (
        <p className="next" onClick={() => this.updatePage(1)}>
          Next
        </p>
      );
    }
  }

  render(){
    return (
      <>
      <Header></Header>
      <div className="main">
        <div className="date-selector">
          <p>
            Wilmington Events { this.getDateString() }
          </p>
          <DatePicker clearIcon={null} minDate={new Date()} onChange={this.handleChange} value={this.state.dateSelected}/>
        </div>
        <div className="event-card-container">
          {this.state.events.map(event => {
              return <Link to={`/event/${event.id}`}><EventCard key={event.id} event={event} time={event.time} /></Link>
            })}
        </div>
      </div>
        <footer className="footer">
            {this.buildPrev()}
            {this.buildNext()}
        </footer>
      </>
    )
  }
}

export default Home;
