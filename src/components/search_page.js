import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { Label } from "react-bootstrap";
import { Button } from "react-bootstrap";

//import {Link} from 'react-router-dom';
// import '../../style/style.css';

class Search extends Component {

  onSubmit(values) {
    // console.log('calling action creator',values);
        
    const path = '/info';
    this.props.history.push({
      pathname: path,
      city: values.City,
      cuisines: values.Cuisines
    });
 }

   renderComponent(field) {
    const { meta: { error, touched } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input className="form-control textClass inputStyle" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  render() {    
    return (
      <header className='header'>
        <div className="main-container">      
          <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
            <h3>
              <Label bsStyle="info">City Name</Label>
            </h3>
            <Field name="City" component={this.renderComponent} />
            <h3>
              <Label bsStyle="info">Cuisines e.g Indian,chinese</Label>
            </h3>
            <Field name="Cuisines" component={this.renderComponent} />
            <h3>
              <button className="btn btn-primary ">Submit</button>
            </h3>
          </form>
        </div>
        <div className='heading'>
              <h1> Zomato </h1>
          </div>
      </header>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.City) errors.City = "Enter City";

  if (!values.Cuisines) errors.Cuisines = "enter Cuisines";

  return errors;
}

export default reduxForm({
  validate,
  form: "SearchForm"
})(Search);
