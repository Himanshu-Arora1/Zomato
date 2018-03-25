import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { Label } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { fetchRestaurant } from "../actions";
import _ from "lodash";

class Search extends Component {
  onSubmit(values) {
    this.props.fetchRestaurant(values);
  }

  renderRestaurant({restaurant}) {
    // const name = Restaurants.restaurants.map(name => name.restaurant.name);
    // const res_id = Restaurants.restaurants.map(
    //   res_id => res_id.restaurant.R.res_id
    // );
    // const id = Restaurants.restaurants.map(id => id.restaurant.id);
    // console.log("Name is ", name);

    return (
      <li key={restaurant.R.res_id}>
        {" "}
        {restaurant.name}
        {restaurant.R.res_id}{" "}
      </li>
    );
  }

  renderComponent(field) {
    const { meta: { error, touched } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h4>
          <div className="RestaurantSearchDiv"> Restaurant Search </div>
        </h4>

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

        <h4>
          <div> Restaurant Details </div>
          <ul>{this.props.restaurants.map(this.renderRestaurant)}</ul>
        </h4>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.City) errors.City = "Enter City";

  if (!values.Cuisines) errors.Cuisines = "enter Cuisines";

  return errors;
}

function mapStateToProps({ restaurants }) {
  console.log("Restaurants are:", { restaurants });
  return { restaurants };
}

export default reduxForm({
  validate,
  form: "SearchForm"
})(connect(mapStateToProps, { fetchRestaurant })(Search));
