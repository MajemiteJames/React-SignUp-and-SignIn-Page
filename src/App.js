/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';



class App extends Component {

  render() {
   
    return (
      <Router>

      
          <div className="App">
            <div className="App__Aside"></div>
            <div className="App__Form">
              <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>
      
              <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
            <Route exact path="/" component={SignUpForm}>
          
            </Route>
            <Route path="/sign-in" component={SignInForm}>

            </Route>
            </div>
          </div>
      </Router>
        );
      }
  }
// function App() {
//   return (
//     <div className="App">
//       <div className="App__Aside"></div>
//       <div className="App__Form">
//         <div className="PageSwitcher">
//           <a href="#" className="PageSwitcher__Item">Sign In</a>
//           <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
//         </div>

//         <div className="FormTitle">
//           <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
//         </div>

//         <div className="FormCenter">
//           <form className="FormField">
//             <div className="FormField">
//               <label className="FormField__Label" htmlFor="name">Full Name</label>
//               <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"></input>
//             </div>
         
//             <div className="FormField">
//               <label className="FormField__Label" htmlFor="password">Password</label>
//               <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password"></input>
//             </div>

//             <div className="FormField">
//               <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//               <input type="email" id="email" className="FormField__Input" placeholder="Enter your Email" name="email"></input>
//             </div>

//         <div className="FormField">

//           <label className="FormField__CheckboxLabel">
//             <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" />I agree all statement in <a href="#" className="FormField__TermsLink">terms of service</a>
//           </label>
//         </div>
         

//           <div className="FormField">
//             <button className="FormField__Button mr-20">Sign Up</button> <a href="#" className="FormField__Link">i'm already member</a>
//           </div>
//           </form>
          
          
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
