import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count+5
        setCount(newCount)
    }

    const handleReset = () => {
        setCount(0)
        
    }

    const handleSubs = () => {
        const subs = count-5 
        if (count == 0) {
            return
        }
        setCount(subs)
    }

  return (
    <div className='border-2 border-white p-5'>
      <h3 className='text-white font-bold text-xl'>Count : {count} </h3>
      <button onClick={handleAdd} className='bg-white px-4 py-2 my-3'>Add</button>
      <button onClick={handleReset} className='bg-white px-4 py-2 my-3 ml-3'>Reset</button>
      <button onClick={handleSubs} className='bg-white px-4 py-2 my-3 ml-3'>Substract</button>
    </div>
  )
}

export default Counter
