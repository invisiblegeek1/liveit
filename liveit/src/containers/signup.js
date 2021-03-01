import React, { Component } from 'react'
import firebase from 'firebase';
import './signup.css'
import {connect} from 'react-redux'


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
firebase.initializeApp({
    apiKey: "AIzaSyCvD6VsE9fW1vt6aZr3iHYAmv4L0mI5LRs",
    authDomain: "likeit-d80b7.firebaseapp.com"
});

 class Authentication extends Component {
     constructor(props){
        super(props);
        this.state={
            isSigneIn:false
        };

     }
     

     Config = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/products',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,  
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          
        ],
        
      };
      ComponentDidMount=()=>{
          firebase.auth().onAuthStateChanged((user)=>{
              this.setState({isSigneIn:!!user})
              this.props.adduser(user);
              console.log(user)
          })
      }

    render() {
        return (
            <div className="Auth__Container">
            {this.state.isSigneIn?<div>Signe in</div>:<div>
                <h4>Livecart wants to Authenticate you.</h4>
                <p>Please provide your details by one of the methods below.</p>
              <StyledFirebaseAuth uiConfig={this.Config} firebaseAuth={firebase.auth()}/> </div> }
            </div>
        )
    }
}
const mapTopUser=(dispatch)=>{
   return {adduser:(user)=>{ dispatch({type:'ADD_USER',user:user});}}
}
export default connect(null,mapTopUser)(Authentication);


