import React, { useState } from 'react';
import Input from '../components/Input';
import Task from '../components/Task';


function TodoList() {
    const [list, setList] = useState([]);

    let addList = (inputText) => {
        setList([...list, inputText]); // ✅ Properly updating the list array
    };


    const deleteItem = (key) => {
        let newListItem = [...list];
        newListItem?.splice(key, 1);
        setList(newListItem); // ✅ Correct way to update state
    };

    const updateItem = (index, updatedText) => {
        const updatedList = list?.map((item, i) =>
            i === index ? updatedText : item
        );
        setList(updatedList); 
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <Input addList={addList} />
                <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">TODO</h1>
                <hr className="border-gray-300 mb-4" />

                <ul className="space-y-4">
                    {list?.map((item, i) => (
                        <Task
                            key={i}
                            index={i}
                            item={item}
                            deleteItem={deleteItem}
                            updateItem={updateItem} // Passing the update function
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
