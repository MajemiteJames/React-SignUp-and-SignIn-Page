/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignInForm extends Component {

    constructor() {
        super();

        this.state = {

            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted');
        console.log(this.state);
    }

    render() {
        return (
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormField">
           
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your Email" name="email" value={this.state.email} onChange={this.handleChange}></input>
              </div>


              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange}></input>
              </div>
  
           
  
            <div className="FormField">
              <button className="FormField__Button mr-20">Sign In</button> <Link exact to="/" className="FormField__Link">Create an Account</Link>
            </div>
            </form>
            
            
          </div>
        )
    }
}
