import React from 'react';
// import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';
//
// import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        // return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            <h2>Register an Account</h2>
            <form>
              <div>
                <input placeholder="Enter Your Name"></input>
              </div>
              <div>
                <input placeholder="Choose a  username"></input>
              </div>
              <div>
                <input placeholder="Enter a Password"></input>
              </div>
              <div>
                <input placeholder="Confirm Password"></input>
              </div>
            </form>
        </div>
    );
}

export default RegistrationPage;
