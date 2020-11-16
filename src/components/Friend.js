import React from "react";
import PropTypes from "prop-types";

function Friend(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.status}</h3>      
      <hr/>
    </React.Fragment>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,  
};

export default Friend;

