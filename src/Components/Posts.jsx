import React, { use } from 'react'
import Container from './Container'
import Post from './Post'

const Posts = ({postsPromise}) => {

    const posts = use(postsPromise)
    console.log(posts);

  return (
    <div>
        <Container>
            <div className='bg-cyan-300 p-5'>
                <h2 className='text-3xl text-center'>All Posts are here : {posts.length}</h2>
                {
                    posts.map(post => <Post post={post} ></Post>)
                }
            </div>

        </Container>
    </div>
  )
}

export default Posts
