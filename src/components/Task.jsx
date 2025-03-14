import React, { useState } from 'react';

function Task({ item, deleteItem, updateItem, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== "") {
      updateItem(index, editText); // Call updateItem with the updated task
      setIsEditing(false); // Exit editing mode
    } else {
      alert("Task cannot be empty!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit(); // Save the task when Enter is pressed
    }
  };

  return (

    


    <li className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-md">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          onKeyDown={handleKeyPress}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      ) : (
        <span className="text-gray-800">{item}</span>
      )}

      <div className="ml-4 flex items-center space-x-3">
        <button
          className="text-indigo-500 hover:text-indigo-600 transition duration-200"
          onClick={() => {
            if (isEditing) {
              handleSaveEdit(); // If in edit mode, save the changes
            } else {
              setIsEditing(true); // If not in edit mode, toggle to edit mode
            }
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="text-red-500 hover:text-red-600 transition duration-200"
          onClick={() => deleteItem(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;






