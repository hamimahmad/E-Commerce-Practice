import React, { Suspense } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Posts from '../Components/Posts'

const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

const Home = () => {

  const postsPromise = fetchPosts();

  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>

      <Suspense fallback={ <h4 className='text-center text-xl font-bold'>Posts are coming....</h4> }>
        <Posts postsPromise={postsPromise} ></Posts>
      </Suspense>

      <Footer/>

    </>
  )
}

export default Home
