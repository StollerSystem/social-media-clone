import React from "react";

function Profile() {
  return (
    <React.Fragment>
      <div class="border">
        <img class="profilePic" src="https://www.indiewire.com/wp-content/uploads/2020/10/borat-2.png"/>
        <h3>BORAT</h3>        
        <button>TWEETS</button><button>FOLLOWING</button><button>FOLLOWERS</button>
      </div>
    </React.Fragment>
  );
}

export default Profile;