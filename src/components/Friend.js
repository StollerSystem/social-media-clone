import React from "react";
import PropTypes from "prop-types";

function Friend(props){
  return (
    <React.Fragment>
      <img class="postPic" src={props.picture}/>
      <h4>{props.name}</h4>  
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

