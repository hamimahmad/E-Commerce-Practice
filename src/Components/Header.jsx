import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <>
      <header>
        <Container>
            <div className='bg-black text-white flex'>
                <h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">ShopNow</a> </h5>
                <div>
                    <select name="" id="">
                        <option value="">English</option>
                        <option value="">Bengali</option>
                    </select>
                </div>
            </div>
        </Container>
      </header>
    </>
  )
}

export default Header
