import React from 'react';
import './App.css';

function App( {AppTitle, Channels, Users} ) {
  return (
    <div className="App-menu-panel">

        <div className="App-menu-title ">Msq - Minimalist messaging app</div>
        <div className="App-menu-subtitle">Channels</div>
        <div className="App-menu-subtitle">Users</div>

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
