import React, { useState } from 'react';

const SentencePrinter = () => {
  // 1. State for the input fields
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  
  // 2. State to hold the final printed list
  const [displayList, setDisplayList] = useState([]);

  const handlePrint = () => {

    const items = new Array(Number(count)).fill(text);
    setDisplayList(items);
  };

  return (
    <div className="p-10 bg-amber-300 min-h-screen text-white">
      <div className="flex flex-col gap-4 max-w-md">
        
        {/* Input for the sentence */}
        <input 
          type="text" 
          placeholder="Enter your sentence..." 
          className="p-2 text-black rounded bg-white"
          onChange={(e) => setText(e.target.value)}
        />

        {/* Input for the number */}
        <input 
          type="number" 
          placeholder="How many times?" 
          className="p-2 text-black rounded bg-white"
          onChange={(e) => setCount(e.target.value)}
        />

        <button 
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-blue-600 py-2 rounded font-bold"
        >
          Print
        </button>
      </div>

      <hr className="my-8 border-slate-600" />

      {/* 3. The Display Area */}
      <div className="space-y-1">
        {displayList.map((item, index) => (
          <p key={index} className="text-sm">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SentencePrinter;