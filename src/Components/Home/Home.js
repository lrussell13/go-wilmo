import React from 'react';
import './Home.css'
import EventCard from '../EventCard/EventCard';
import DatePicker from 'react-date-picker';
 
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
        name: 'Event Name',
        location: '444 Here Place',
        time: '10:30pm',
        date: '30/10/20',
        upvotes: 30,
        links: 'www.here.com',
        description: 'lha jkahsdj asjkhd jaksh jskhd kjhakjhdjksahd sajkhd asjd',
        image: 'http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill/sample.jpg'
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
        <div className="date-selector">
          Wilmington Events { this.getDateString() }
          <DatePicker clearIcon={null} minDate={new Date()} onChange={this.handleChange} value={this.state.dateSelected}/>
        </div>
        <div className="event-card-container">
          {this.state.events.map(event => {
              return <EventCard key={event.id} event={event} time={event.time} />
            })}
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
