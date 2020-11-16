import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Bio from "./Bio";
import Feed from "./Feed"
import FriendsList from "./FriendsList";

function App(){
  return (
    <React.Fragment>
    <div class="container">
        <Header />
      <div class="row">
        <div class="col-md-4">
          <Profile />
          <Bio />
        </div>
        <div class="col-md-4">
          <Feed />    
        </div>
        <div class="col-md-4">
          <FriendsList />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
