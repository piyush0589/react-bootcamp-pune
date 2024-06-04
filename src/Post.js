import React from 'react'

export default function Post() {

    //useState
    const [post,setPost] = useState({});

    const loadPost = ()=>{

        fetch('')
        .then(Response => Response.json())
        .then (res => {
            const data = res
            setPost(data)
        })
    }
  return (
    <div>Post</div>
    {

        post?<div>
        
        <p> ID : {post.id}</p>
        </div>:null
    }

    <button onClick={loadPost}>Get Post</button>
  )
}
