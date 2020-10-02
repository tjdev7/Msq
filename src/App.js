import React from 'react';
import './App.css';
import Msqlogo from './Msqlogo.png';

function App( {AppTitle, Channels, Users} ) {
  return (
    <div className="App-menu-panel">

        <div className="App-menu-title ">
            <img src = {Msqlogo} alt="logo"/>
            <i className = ""></i>
        	 Minimalist messaging app

            </div>
        
        <div className="App-menu-subtitle">
        	<i className = "fa fa-tv"></i>
        	Channels
            <p># Help</p>
            <p># General</p>
            <p># Meetups</p>
            <p># Hardware</p>


        </div>
        
        <div className="App-menu-subtitle">
            <i className = "fa fa-group"></i>
        	Users
            <p>John</p>
            <p>Jane</p>
            <p>Adam</p>
            <p>Ashley</p>
            
        </div>
    </div>

  );
}

// function MenuPanel() {
//   return (
//     <div className="App-menu-panel"></div>
//   );
// }

// var menuText = {
//   AppTitle: "Msq - Minimalist messaging app",
//   Channels: "Channels",
//   Users: "Users"
// }

export default App;
