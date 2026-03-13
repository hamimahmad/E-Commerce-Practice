import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        console.log("its working")
    }

  return (
    <div className='border-2 border-white p-5'>
      <h3 className='text-white font-bold text-xl'>Count : {count} </h3>
      <button onClick={handleAdd} className='bg-white px-4 py-2 my-3'>Add</button>
    </div>
  )
}

export default Counter
