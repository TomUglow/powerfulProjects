import React from 'react';
import '../components/ContactForm.css';
import LocationPin from '..//images/location-pin.png';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        age: null,
        errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
        if (val !="" && !Number(val)) {
            err = <strong className='form-error-message'>*You must enter a valid email address</strong>;
        }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    }
    render() {
        return (
        <form className='contact-form'> 
            <h1 className='form-heading'>Get In Touch {this.state.username} </h1>
            <h2 className='form-mobile'>Call Ben on 0411 111 111 or fill in the form below</h2>
            <h3 className='form-location'><img className='location-pin' src={LocationPin} alt='Location Pin Icon' width="13" height="20" /> Based in Melbourne</h3>
            <p className='form-question1'>Enter your name:</p>
            <input
                className='form-box1'
                type='text'
                name='username'
                onChange={this.myChangeHandler}
            />
            <p className='form-question2'>Enter your email:</p>
            <input
                className='form-box2'
                type='text'
                name='age'
                onChange={this.myChangeHandler}
            />
            <p className='form-question3'>How can we help?</p>
            <textarea
                className='form-box3'
                name='Description'
                onChange={this.myChangeHandler}
            />
            {this.state.errormessage}
        </form>
        );
    }
}


  export default ContactForm;