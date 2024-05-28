import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css'
import { Link } from 'react-router-dom';

export default function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        try {
            const result = await axios.get('http://localhost:8080/getAllTodos');
            setTodos(result.data); // Update state with fetched data
        } catch (error) {
            console.error('Error loading todos:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/deleteTodo/${id}`);
            loadTodos(); // Refresh todos after deletion
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Todo List</h1>
                <br></br>
                <Link className='btn ' to="/addtodo"> Add Todo   
                  </Link>
                <br></br> <br></br>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col" className='Display'>#</th>
                            <th scope="col">Title</th>
                            <th scope="col" className='Display'>Description</th>
                            <th scope="col" className='Display'>Status</th>
                            <th scope="col" >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.length > 0 ? (
                            todos.map((todo, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? "Completed" : "Pending"}</td>
                                    <td>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(todo.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-primary mx-2' onClick={() => deleteUser(todo.id)}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No todos available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
