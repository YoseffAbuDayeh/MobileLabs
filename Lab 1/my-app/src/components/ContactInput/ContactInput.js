import React from 'react';

import ContactDetails from '../ContactDetails/ContactDetails'

class ContactInput extends React.Component {
    // this constructor fires when the component is loads setting up our initial variables and bindings
    constructor(props) {
      super(props);

      // components internal state
      this.state = {
        name: '',
        number: '',
        contactAdded: false,
      }

      // bind custom functions to the component
      this.handleChange = this.handleChange.bind(this);
      this.addContactDetails = this.addContactDetails.bind(this);
    }

    // this function will take our new values for the input and put it into its respective state value
    handleChange(event) {
      // this is the value entered into the input
      const value = event.target.value;
      // this is the name of the input which corresponds with the name in our state object
      const name = event.target.name;

      this.setState({
        [name]: value
      });
    }

    // this will be a "faked-out" ADD function that will set our contactAdded flag to true
    addContactDetails() {
      this.setState({
        contactAdded: true,
      })
    }

    resetContactDetails(){
        this.setState({
            name: '',
            number: '',
            contactAdded: false,
        })
    }

    // The render function is where we put all of our JSX markup. It contains what shows up on the screen
    render() {
      return (
        <div>
          <h1>Please enter your contact data:</h1>
          <div>
            <div>
              Name:
              <input  type="text" 
                      name="name" 
                      value={this.state.name} 
                      onChange={this.handleChange} 
                      disabled={this.state.contactAdded} 
              ></input>

            </div>
            <div>
              Telephone Number:
              <input  type="text" 
                      name="number" 
                      value={this.state.number} 
                      onChange={this.handleChange} 
                      disabled={this.state.contactAdded} 
                ></input>
            </div>
            <button onClick={() => this.addContactDetails()}>Add Contact</button>
            <button onClick={() => this.resetContactDetails()}>Clear Contact</button>
          </div>
          {
            // this is equivalent to an IF statement: if contactAdded is true, display our child component
            this.state.contactAdded && 
            <div>
              {/* 
                Here we create the ContactDetails component
                We pass this component some state object through its props for "name" and "number" 
              */}
              <ContactDetails name={this.state.name} number={this.state.number} />
            </div>
          }
        </div>
      );
    }
  }

  export default ContactInput;
