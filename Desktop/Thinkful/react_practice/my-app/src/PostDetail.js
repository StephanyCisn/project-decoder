import React, { useEffect, useState } from "react";
 
function Post({currentId,id}) {
 const [comments, setComments] = useState([])
  
  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${currentId}/comments`)
      .then((res) => res.json())
      .then(setComments)
      .catch((error) => {
          console.log(error)
      })
      console.log("setComments: ", setComments)
  }, [currentId])
  

      return (
          <div>
              {comments.map((comment) => (
                 currentId===id && <div key={comment.id}>
                      <p>{comment.body}</p>
                  </div>
  
              ))}
  
          </div>
      )
  }
  export default Post

//posts load from fetch call made in app.js file. The page displays the title and body properties from the post
//when a posts body is clicked, the comments are fetched from a different URL
// the page displays the body property of all the comments for a post on the page after the post is clicked


  


