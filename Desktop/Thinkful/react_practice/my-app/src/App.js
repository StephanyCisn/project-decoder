import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);


  return (
    <div className="App">
      {
        posts.map(post => (
          <div>
          <h2>{post.title}</h2>
          <p onClick={()=>setId(post.id)}>{post.body}</p>
          <PostDetail currentId={id} id={post.id}/>
          </div>
        ))
      }
    </div>
  )
}




export default App;


