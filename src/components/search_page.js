import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {Label} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import {fetchRestaurant} from '../actions';
import _ from 'lodash';

class Search extends Component {


	onSubmit(values){		
			this.props.fetchRestaurant(values);
}

		renderRestaurant(values){		
			 console.log('this',values);
			 const names = values.name;

			 console.log('name is ',names);
				return <li key={values.id}>{values.name}</li>
			}
			

	render(){		

		  return(
		  	<div>

		  	  <h4>
		  	   <div className='RestaurantSearchDiv'> Restaurant Search </div>	
		  	  </h4>

		  	   <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
		  	   		<h3>
			  	   <Label bsStyle="info">City</Label>
			  	   </h3>
		  	   	  <Field
		  	   	  	  label="City Name"
		  	   	  	  name='city'
		  	   	  	  component='Input'
		  	   	  	  type='text'
		  	   	  />
		  	   	  <h3>
		  	  	 <Label bsStyle="info">Cuisines e.g Indian,chinese</Label>
		  	  	 </h3>
		  	   	 <Field
		  	   	  	  label="Cuisines"
		  	   	  	  name='cuisines'
		  	   	  	  component='Input'
		  	   	  	  type='text'
		  	   	  />
		  	   	  <h3>
		  	   	  <button className='btn btn-primary'>Submit</button>
		  	   	  </h3>
		  	   </form>

		  	   <h4>
		  	   		<div> Restaurant Details </div>
		  	   		 <ul>{this.props.values.map(this.renderRestaurant)}</ul>
		  	    </h4>
		  	</div>
		  	)
	}
}

function validate(values){

	const errors = {}

	if(!values.city)
		errors.title='Enter City';

	if(!values.cusine)
		errors.title='enter cusine';

	return errors;
}

function mapStateToProps({values}){	
							return { values };
}

export default reduxForm({
	validate,
	form:'SearchForm'
})(connect(mapStateToProps,{fetchRestaurant})(Search));

