import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';


export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios  
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data})
        })
        .catch(err => {
            console.error("The data was not returned", err);
            
        });
};

export const addSmurf = data => dispatch => {
    console.log("this is a smurf", data);
    dispatch({ type: ADD_SMURF });
    axios 
        .post('http://localhost:3333/smurfs', data)
        .then(res => {
            console.log(res);
            })
        .catch(err => {
            console.log("The data was not returned", err)
        });
}; 

