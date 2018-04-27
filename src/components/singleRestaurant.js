import React,{Component} from 'react';
import { fetchSingleRestaurant } from "../actions";
import {connect} from 'react-redux';

class SingleRestaurant extends Component{

    componentDidMount(){
        const id = this.props.location.id;
        console.log('id in mount',this.props.location.id);
        this.props.fetchSingleRestaurant(id);
    }

    render(){
        return(
            <div> 
                <div>Himanshu </div>
            <div> {this.props.singleRestaurant.name} </div>
            </div>
        )
    }
}

function mapStateToProps({ singleRestaurant }) { 
    console.log('single',singleRestaurant.name);
     return { singleRestaurant };
} 

export default connect(mapStateToProps,{fetchSingleRestaurant})(SingleRestaurant);