import React from "react";

function NavBar(){
  return (
    <React.Fragment>
      <div class="container">
        <button class="navBtn">Home</button>
        <button class="navBtn">Notifications</button>
        <button class="navBtn">Messages</button>
      </div>
    </React.Fragment>
  );
}

export default NavBar;