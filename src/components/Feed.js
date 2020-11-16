import React from "react";
import Post from "./Post";
// import logo192 from "./../../logo192.png";

const posts = [
  {
    name:  'William Donovan-Seid',
    status: "I'm coding",
    picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
  },
  {
    name: 'Joseph Karnafel',
    status: "I'm also coding",
    picture: "https://i.pinimg.com/564x/c5/8a/d4/c58ad46c9e1a1d3272ab6eb4b55dc06f.jpg"
  },
  {
    name: 'Leilani',
    status: 'Str8 chillin.',
    picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
  },
  {
    name: 'Travis',
    status: 'Jokes make our world go round!',
    picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
  },
  {
    name: 'Chloe',
    status: 'What is a framework?',
    picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*"
  },
  {
    name: 'Ben',
    status: 'My cat is snoring',
    picture: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
  }
]

function Feed() {
  return (    
    <div class="border">
      <div class="boxTop">
        <h3>The FEED!</h3>
        <input type="text" placeholder="Update your status..." name="status"></input><button>Post</button>
      </div>
      <hr/>
      {posts.map((post, index) => 
          <Post name={post.name}
          status={post.status}
          picture={post.picture}
          key={index}/>          
        )}
    </div>  
  );
}

export default Feed;