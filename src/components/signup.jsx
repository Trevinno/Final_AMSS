import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './css/signup.css'

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            user: '',
            occupation: '',
            country: '',
            state: '',
            city: '',

            hasAgreed: false
        };
    }
    //Esta funcion hace que las cajas cambien de color
    handleChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;


        this.setState({
          [name]: value
        });
    }
    //Esta funcion hace que la informacion que se entre en los campos se pueda mandar al servidor
    handleSubmit = e => {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
          //Aqui se colocan los campos de la pagina
            <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">UserName</label>
                <input type="user" id="user" className="FormField__Input" placeholder="Enter your username" name="user" value={this.state.user} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Occupation</label>
                <input type="occupation" id="occupation" className="FormField__Input" placeholder="Enter your occupation" name="occupation" value={this.state.occupation} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Country</label>
                <input type="country" id="country" className="FormField__Input" placeholder="Enter your country" name="country" value={this.state.country} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">State</label>
                <input type="state" id="state" className="FormField__Input" placeholder="Enter your state" name="state" value={this.state.state} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">City</label>
                <input type="city" id="city" className="FormField__Input" placeholder="Enter your city" name="city" value={this.state.city} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <NavLink exact to="/" className="FormField__TermsLink">terms of service</NavLink>
                </label>
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I am over 18 years of age
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={() => this.props.history.push('/homepage')}  >Sign Up</button> <Link to="/signin" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>

          </div>

</div>
        );
    }
}

