import React from "react";
import PropTypes from "prop-types";
// import logo192 from "./../../logo192.png";

function Post (props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.status}</p>
      <img class="postPic" src={props.picture}/>
      <hr/>
    </div>    
  )
}

Post.propTypes = {  
  name: PropTypes.string,
  status: PropTypes.string,  
  picture: PropTypes.string  
};

export default Post;