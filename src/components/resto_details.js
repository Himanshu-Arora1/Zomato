import React,{Component} from 'react';
import { fetchSingleRestaurant } from "../actions";
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class RestoDetails extends Component{

     singleMovement(singleRestaurant){
        const path = '/info/details';
            browserHistory.push({
          pathname: path
        });
    }

   render(){

    if(this.props.singleRestaurant.length>0){
                this.singleMovement(this.props.singleRestaurant);
        }
    
        return(
           <div className='smallDiv'>
                <div>
                    <img src={this.props.restaurant.thumb} alt='sorry no image' key={this.props.restaurant.id}
                     onClick={() => this.props.fetchSingleRestaurant(this.props.restaurant.R.res_id)} />
                </div>
                <br/>
                <div className='smallDiv2'>
                    <ul key={this.props.restaurant.R.res_id}> 
                        <li>{this.props.restaurant.name}</li>
                        <li><span><strong>Type : </strong></span>{this.props.restaurant.cuisines}</li>
                        <li><span><strong>Cost of Two : </strong> </span> {this.props.restaurant.average_cost_for_two}</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ singleRestaurant }) { 
                    console.log('singl',singleRestaurant);
                     return { singleRestaurant};
  } 

export default connect(mapStateToProps,{fetchSingleRestaurant})(RestoDetails);



/*
<div>
<ul key={this.props.restaurant.R.res_id}>
    <li>{this.props.restaurant.name}</li>  
    <li> {this.props.restaurant.R.res_id} </li>
 </ul>
</div>
*/