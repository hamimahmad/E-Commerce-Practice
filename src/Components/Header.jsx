import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <>
      <header className='bg-black'>
        <Container>
            <div className='text-white flex py-3'>
                <h5 className='w-[80%]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">ShopNow</a> </h5>
                <div className='flex justify-items-end'>
                    <select name="" id="">
                        <option value="">English</option>
                        <option value="">Bengali</option>
                        <option value="">Japanese</option>
                        <option value="">Arabic</option>
                    </select>
                </div>
            </div>
        </Container>
      </header>
    </>
  )
}

export default Header
