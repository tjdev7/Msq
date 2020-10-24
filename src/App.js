import React from 'react';
import './App.css';

function App( {AppTitle, Channels, Users} ) {
  return (
    <div className="App-menu-panel">
        <div className="App-menu-title ">
            <button className="togglemenu">
                    x
                </button>
        <span className="appname">Msq</span>
            </div>
        <div className="App-menu-subtitle">
        	<i className = "fa fa-tv"></i>
        	<span className="menutitle">Channels</span>
            <br />
            <p># Help</p>
            <p># General</p>
            <p># Meetups</p>
            <p># Hardware</p>
        </div>
        <br />
        <div className="App-menu-subtitle">
            <i className = "fa fa-group"></i>
        	<span className="menutitle">Users</span>
            <p className="">• John</p>
            <p>• Jane</p>
            <p>• Adam</p>
            <p>• Ashley</p>
        </div>
        <form>
            <i className = "fa fa-send"></i>  
            <input placeholder="Start a chat"/>
       </form> 
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
