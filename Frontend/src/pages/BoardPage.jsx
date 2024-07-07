import React, { useState } from 'react';
import Column from '../components/Section/Column';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';

const Boards = () => {
    const [columns, setColumns] = useState([
        { id: 1, name: 'To Do', cards: [{ id: 1, content: 'Task 1' }, { id: 4, content: 'Task 4' }, { id: 5, content: 'Task 5' }] },
        { id: 2, name: 'In Progress', cards: [{ id: 2, content: 'Task 2' }] },
        { id: 3, name: 'Done', cards: [{ id: 3, content: 'Task 3' }] },
    ]);

    const handleDrop = (itemId, columnId) => {
        // Handle moving the card here
    };

    return (
        <>
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex flex-col justify-start items-center w-5/6 h-full">
                    <DndProvider backend={HTML5Backend}>
                        <div className="board w-full mt-16">
                            {columns.map(column => (
                                <Column
                                    key={column.id}
                                    name={column.name}
                                    cards={column.cards}
                                    onDrop={(item) => handleDrop(item.id, column.id)}
                                />
                            ))}
                        </div>
                    </DndProvider>
                    <div className='flex justify-start w-full'>
                        <Link to="/dashboard">
                        <button className='bg-primary text-white font-bold px-4 py-1 rounded-md mx-5 '>
                            Back
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Boards;