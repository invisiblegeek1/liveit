import React, { Component } from 'react'
import firebase from 'firebase';


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
firebase.initializeApp({
    apiKey: "AIzaSyCvD6VsE9fW1vt6aZr3iHYAmv4L0mI5LRs",
    authDomain: "likeit-d80b7.firebaseapp.com"
});

export default class Authentication extends Component {
    state={
        isSigneIn:false
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
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () =>{}
          }
      };
      ComponentDidMount=()=>{
          firebase.auth().onAuthStateChanged(user=>{
              this.setState({isSigneIn:!!user})
              console.log(user)
          })
      }

    render() {
        return (
            <div>
            {this.state.isSigneIn?<div>Signe in</div>:
              <StyledFirebaseAuth uiConfig={this.Config} firebaseAuth={firebase.auth()}/>  }
            </div>
        )
    }
}


