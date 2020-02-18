import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        console.log( 'this is different', event);
        alert('Thank You: ' + this.state.value);
        event.preventDefault();
        ReactDOM.render(this.state.value, document.getElementById('root'));
      }

      render() {
        return (
            <div>
                <div className='form'>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.value} onChange={this.handleChange}/>
                    <input type="text" name="lastName" placeholder="Last Name"/>
                    <input type="text" name="impression" placeholder="Best Impression"/>

                </label>
                <input type="submit" value="Join US!" />
                
            </form>

                </div>
            </div>
        )
    }
}



export default Form;