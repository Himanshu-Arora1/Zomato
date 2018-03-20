import React,{Component} from 'react';
import {connect} from 'react-redux';

class RestoInfo extends Component{
	render(){

		console.log('RestoInfo');
		 return(
		 	  <div>
		 	  		Himanshu
		 	  </div>
		 	)
	}
}

function mapStateToProps(values){
	console.log('mapStateToProps');
	console.log('values in restoinfo :',{values});
	return values;
}


export default connect(mapStateToProps,null)(RestoInfo);