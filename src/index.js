import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
// import Menu from './components/Menu';


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
            <i className="material-icons">arrow_drop_down</i>
            <i className="material-icons">play_arrow</i>
        	<span className="menutitle">Channels</span>
            <br />
            <p># Help</p>
            <p># General</p>
            <p># Meetups</p>
            <p># Hardware</p>
        </div>
        <br />
        <div className="App-menu-subtitle">
            <i className="material-icons">arrow_drop_down</i>
            <i className="material-icons">play_arrow</i>
        	<span className="menutitle">Users</span>
            <p className="">• John</p>
            <p className="">• Jane</p>
            <p className="">• Adam</p>
            <p className="">• Ashley</p>
        </div>
        <form>
            <i className = "fa fa-send"></i>  
            <input placeholder="Start a chat"/>
       </form> 
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
