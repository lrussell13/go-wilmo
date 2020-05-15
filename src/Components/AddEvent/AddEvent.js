import React from 'react';
import './AddEvent.css'
import DatePicker from 'react-date-picker';
import Moment from 'moment';
import TimePicker from 'rc-time-picker';
import EventCard from '../EventCard/EventCard';
import FirebaseService from '../../Services/firebase-service';
import 'rc-time-picker/assets/index.css';
import Header from '../Header/Header';

class AddEvent extends React.Component {
  state = {
    event: {
      price: '',
      name: '',
      location: '',
      time: new Moment(),
      date: new Date(),
      upvotes: 0,
      link: '',
      description: '',
      image: '',
      recurring: false,
      recurringBasis: 0
    }
  }

  handleChange(e){
    let event = this.state.event;
    event[e.target.name] = e.target.value
    this.setState({
        event
    });
  }

  handleDateChange = date => {
    let event = this.state.event;
    event.date = date
    this.setState({event});
  };

  handleTimeChange = time => {
    let event = this.state.event;
    event.time = time
    this.setState({event});
    console.log(event)
  };

  handleImageChange = e => {
    let event = this.state.event;
      if(e.target.files[0].name !== ''){
        FirebaseService.saveImage(e.target.files[0].name, e.target.files[0])
      .then(path => {
        event.image = path;
        this.setState({event});
      })
    }
  }

  handleRecurringBasisChange = e => {
    let event = this.state.event;
    event.recurringBasis = e.target.value;
    this.setState({ event });
  };

  handleRecurringChange = e => {
    let event = this.state.event;
    event.recurring = e.target.checked;
    this.setState({ event });
  };

  render(){
    return (
      <>
      <Header></Header>
      <div className="add-event">
      <h1>Add an Event</h1>
      <form id="add-event-form">
        <input type="text"  placeholder="Event Name" name="name" value={this.state.event.name} onChange={(e) => this.handleChange(e)}/>
        <input type="text"  placeholder="Location" name="location" value={this.state.event.location} onChange={(e) => this.handleChange(e)}/>
        <DatePicker clearIcon={null} minDate={new Date()} name="date" onChange={this.handleDateChange} value={this.state.event.date}/>
        <TimePicker showSecond={false} use12Hours={true} allowEmpty={false} value={this.state.event.time} onChange={this.handleTimeChange} minuteStep={15}/>
        <label class="check-container">Recurring
          <input type="checkbox" name="recurring" value={this.state.event.recurring} onChange={(e) => this.handleRecurringChange(e)}/>
          <span class="checkmark"></span>
        </label>
        {this.state.event.recurring &&
          <div className="recurring-basis-container">
            <label class="check-container">Weekly
              <input type="radio" name="recurring-select" value={0} onChange={(e) => this.handleRecurringBasisChange(e)}/>
              <span class="checkmark"></span>
            </label>
            <label class="check-container">Bi-Weekly
              <input type="radio" name="recurring-select" value={1} onChange={(e) => this.handleRecurringBasisChange(e)}/>
              <span class="checkmark"></span>
            </label>
            <label class="check-container">Monthly
              <input type="radio" name="recurring-select" value={2} onChange={(e) => this.handleRecurringBasisChange(e)}/>
              <span class="checkmark"></span>
            </label>
          </div>}
          <label htmlFor="image" id="image-label">Display Image:
            <input placeholder="picture" type="file" id="image" value={this.state.image} name="image" onChange={(e) => this.handleImageChange(e)}/>
          </label>
          <input type="text"  placeholder="Price" name="price" value={this.state.event.price} onChange={(e) => this.handleChange(e)}/>
          <input type="text"  placeholder="Useful Link" name="link" value={this.state.event.link} onChange={(e) => this.handleChange(e)}/>
          <textarea placeholder="Event Description" name="description" rows="4" value={this.state.event.description} onChange={(e) => this.handleChange(e)}></textarea>
        <div class="event-card-container">
          <EventCard event={this.state.event} time={this.state.event.time.format('LT')}></EventCard>
        </div>
        <button type="submit" className="submit">Submit</button>
      </form>
      </div>
      </>
    );
  }

}

export default AddEvent;