import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostPage = () => {
  let params = useParams()
  // console.log(params);

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then(res => res.json())
      .then(postData => {
        setPost(postData)
        // console.log(postData);
      })
  }, [params.postId]);

  console.log(post);

  return (
    <div>
      {!post ? <h1>Loading......</h1> : <h3>{post.title}</h3>}
    </div>
  )
}

export default PostPage