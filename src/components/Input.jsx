import React, { useState } from 'react'

const Input = ({ addList }) => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="What needs to be done"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <button
        onClick={() => {
          if (inputText !== '') {
            addList(inputText);
            setInputText("");
          } else {
            alert("Please Enter Valid Value");
          }
        }}
        className="w-full mt-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
      >
        Add
      </button>
      <div className="mt-2 text-center text-gray-600">{inputText}</div>
    </div>
  );
}

export default Input;
