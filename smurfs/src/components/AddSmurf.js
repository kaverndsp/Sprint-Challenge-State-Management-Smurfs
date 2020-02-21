import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

const AddSmurf = props => {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        setSmurf({
            ...smurf,
             [e.target.name]: e.target.value
         });
     };
    

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(smurf);
        setSmurf({
            name: "",
            age: "",
            height: "",
        })
    };

    return (
    <>
        <input 
        type='text' 
        name='name' 
        value={smurf.name} 
        onChange={handleChanges} 
        placeholder='Name'/>
        
        <input 
        type='text' 
        name='age' 
        value={smurf.age} 
        onChange={handleChanges} 
        placeholder='Age'/>
        
        <input 
        type='text' 
        name='height' 
        value={smurf.height} 
        onChange={handleChanges} 
        placeholder='Height'/>
        
        <button onClick={handleSubmit}>Add Smurf</button>
    </>
    )
}

const mapStateToProps = state => {
    return {}
};

export default connect(
    mapStateToProps,
    { addSmurf }
)(AddSmurf); 