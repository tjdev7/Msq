import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import GeneralRoom from "./GeneralRoom";
import MeetupRoom from "./MeetupRoom";
import ConferenceRoom from "./ConferenceRoom";
import HelpRoom from "./HelpRoom";

function App({ Channels, Users }) {
  return (
    <div className="">
      
      <li><h1 className="appname">MSQ</h1></li>
      <BrowserRouter>
      
        <Link to="/GeneralRoom">
          <li className="menutitle">General</li>
        </Link>
        <Link to="/MeetupRoom">
          <li className="menutitle">Meetups</li>
        </Link>
        <Link to="/ConferenceRoom">
          <li className="menutitle">Conferences</li>
        </Link>
        <Link to="/HelpRoom">
          <li className="menutitle">Help</li>
        </Link>
        <Route path="/GeneralRoom" component={GeneralRoom} />
        <Route path="/MeetupRoom" component={MeetupRoom} />
        <Route path="/ConferenceRoom" component={ConferenceRoom} />
        <Route path="/HelpRoom" component={HelpRoom} />
      </BrowserRouter>
      <br/>
      <div className="menutitle userListStyle">
        <p>Users: Jane, Adam, Steve, Ashton, Lilith, You, Terry, Daniel, David, Andy</p>
      </div>

      
    </div>
  );
}

export default App;
