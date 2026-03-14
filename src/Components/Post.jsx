import React from 'react'
import Container from './Container'

const Post = ({post}) => {
  return (
    <div>
      <Container>
        <div>
            <h5 className='font-bold'>{post.id} . {post.title}</h5>
            <p>{post.body}</p>
        </div>
      </Container>
    </div>
  )
}

export default Post
