import React from 'react';
import './AddEvent.css'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

class AddEvent extends React.Component {
  state = {
    price: '',
    name: '',
    location: '',
    time: new Date(),
    date: new Date(),
    upvotes: 30,
    links: 'www.here.com',
    description: 'lha jkahsdj asjkhd jaksh jskhd kjhakjhdjksahd sajkhd asjd',
    image: 'http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill/sample.jpg',
    recurring: false,
    recurringBasis: 0,
  }

  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleDateChange = date => {
    this.setState({date});
  };

  handleTimeChange = time => {
    this.setState({time});
  };

  handleRecurringBasisChange = e => {
    let newVal = e.target.value;
    this.setState({ recurringBasis: newVal });
  };

  handleRecurringChange = e => {
    let newVal = e.target.checked;
    this.setState({ recurring: newVal });
  };

  render(){
    return (
      <div className="add-event">
      <h1>Add an Event</h1>
      <form id="add-event-form">
        <input type="text"  placeholder="Event Name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
        <input type="text"  placeholder="Location" name="location" value={this.state.location} onChange={(e) => this.handleChange(e)}/>
        <DatePicker clearIcon={null} minDate={new Date()} name="date" onChange={this.handleDateChange} value={this.state.date}/>
        <TimePicker onChange={this.onChange} value={this.state.time} clearIcon={null} disableClock={true}/>
        <label class="check-container">Recurring
          <input type="checkbox" name="recurring" value={this.state.recurring} onChange={(e) => this.handleRecurringChange(e)}/>
          <span class="checkmark"></span>
        </label>
        {this.state.recurring &&
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
          <label className="dollar-sign">$<input id="price" type="text"  placeholder="Price" name="price" value={this.state.price} onChange={(e) => this.handleChange(e)}/></label>
      </form>
      </div>
    );
  }

}

export default AddEvent;