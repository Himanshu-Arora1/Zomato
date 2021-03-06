import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

class RestoDetails extends Component{

    singleMovement(id){
        const path='/info/details';
        
        this.props.history.push({
            pathname:path,
            id:id
        })
    }

   render(){
    
        return(
           <div className='smallDiv'>
                <div>
                    <img src={this.props.restaurant.thumb} alt='sorry no image' key={this.props.restaurant.id}
                     onClick={() => this.singleMovement(this.props.restaurant.R.res_id)} />
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



export default withRouter(RestoDetails);



/*
<div>
<ul key={this.props.restaurant.R.res_id}>
    <li>{this.props.restaurant.name}</li>  
    <li> {this.props.restaurant.R.res_id} </li>
 </ul>
</div>
*/