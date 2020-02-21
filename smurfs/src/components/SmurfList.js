import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';


const SmurfList = props => {
    const handleData = e => {
        e.preventDefault();
        props.getData();
    }
    return (
        <>
         {props.smurfs.map(smurf =>( 
                    <div className="smurf-card">
                        <h2>Smurf Name: {smurf.name}</h2>
                        <h3>Smurf Age: {smurf.age}</h3>
                        <h3>Smurf Height: {smurf.height}</h3>
                        <p>Smurf Id: {smurf.id}</p>
                    </div>
                ))}
               <button onClick={handleData}>Update Smurfs</button>
        
        </>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(SmurfList); 