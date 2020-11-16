import React from "react";
import Friend from "./Friend";

const friends = [
  {
    name: 'Leilani',    
    picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
  },
  {
    name: 'Travis',    
    picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
  },
  {
    name: 'Chloe',    
    picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*"
  },
  {
    name: 'Ben',    
    picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
  }
];

function FriendsList(){
  return (
    <React.Fragment>
      <div class="border">
        <h3>Friend List</h3>
        <hr/>
        {friends.map((friend, index) => 
          <Friend name={friend.name}
          status={friend.status}
          picture={friend.picture}
          key={index}/>
          
        )}
      </div>
    </React.Fragment>
  );
}

export default FriendsList;