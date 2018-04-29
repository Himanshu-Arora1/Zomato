import React,{Component} from 'react';
import { fetchSingleRestaurant } from "../actions";
import {connect} from 'react-redux';
import {Pageheader} from 'react-bootstrap';


// this refers to component instance

class SingleRestaurant extends Component{

    componentDidMount(){
        const id = this.props.location.id;
        console.log('id in mount',this.props.location.id);
        this.props.fetchSingleRestaurant(id);
    }

    displayInfo(item){
        return (
        <div key={item.R.res_id}>
             <div className="jumbotron heading2">
                <h3> Zomato </h3>
              </div>
            <div class="heading2">
              <h3> Restaurant name: <span> <h4 >  { item.name } </h4></span> </h3>
              <h3> Address : <h4>{item.location.address} </h4></h3>
            </div>
            <div class="singleRestaurantImage">
                <img src={item.featured_image} />
            </div>
        </div>
        )
    }

    render(){
        return(
            <div> 
                 <div>{this.props.singleRestaurant.map((item) => this.displayInfo(item))}</div>
            </div>
        )
    }
}

function mapStateToProps({ singleRestaurant }) { 
    console.log('single',singleRestaurant);
     return { singleRestaurant };
} 

export default connect(mapStateToProps,{fetchSingleRestaurant})(SingleRestaurant);