import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRestaurant } from "../actions";
import RestoDetails from './resto_details';

class RestoInfo extends Component {

  componentDidMount(){
    const city = this.props.location.city;
    const cuisines = this.props.location.Cuisines;
    this.props.fetchRestaurant(city,cuisines);
  }

  renderRestaurant({restaurant}){
      
      return (
            <RestoDetails restaurant={restaurant}  />
           // <RestoDetails restaurant={restaurant} />
             )
  }

  render(){

      return(
            <div>
              <div className="jumbotron heading2">
                <h3> Restaurant Details </h3>
              </div>
              <div>
                {this.props.restaurants.map(this.renderRestaurant)}
              </div>
            </div>
         )
   }
}

function mapStateToProps({ restaurants }) { 
                             return { restaurants };
}

export default connect(mapStateToProps,{fetchRestaurant})(RestoInfo);

