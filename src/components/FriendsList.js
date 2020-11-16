import React from "react";
import Friend from "./Friend";

const friends = [
  {
    name: 'Leilani',
    status: 'Str8 chillin.'
  },
  {
    name: 'Travis',
    status: 'Jokes make our world go round!'
  },
  {
    name: 'Chloe',
    status: 'What is a framework?'
  },
  {
    name: 'Ben',
    status: 'My cat is snoring'
  }
];

function FriendsList(){
  return (
    <React.Fragment>
      <div class="border">
        <h3>Friend List</h3>
        {friends.map((friend, index) => 
          <Friend name={friend.name}
          status={friend.status}
          key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default FriendsList;