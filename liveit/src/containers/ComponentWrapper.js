import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../components/navbar';
import Data from './dataloader';
import {createStore} from 'redux';
import Reducer from '../redux/reducer';
import {Provider ,connect} from 'react-redux';
const store = createStore(Reducer);

function ComponentWrapper() {
    return (
        <div>
            <Provider store={store}>
            <Router>
            <Navbar />
            <Switch>
            <Route path='/'  render={()=><Data />} /> 
            <Route path='/cart' />
            </Switch> 
            </Router>
            </Provider>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        State:state
    }
}

const mapDispatchToprops = (Dispatch) => {
    return {
dispatch:Dispatch
    }
}
export default connect(mapDispatchToprops,mapStateToProps)(ComponentWrapper);
