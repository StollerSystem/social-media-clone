import React from "react";
import PropTypes from "prop-types";

function Friend(props){
  return (
    <React.Fragment>
      <span class="inline"><img class="postPic inline" src={props.picture}/><h4 class="inline">{props.name}</h4></span>
       <br></br>
      <button>Add Friend</button>    
      <hr/>
    </React.Fragment>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,  
};

export default Friend;

