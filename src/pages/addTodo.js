import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    completed: '',
    
  });

  const { title, description, completed } = todo;

    const onInputChange = (e) => {
        e.preventDefault();
    setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    

    const clearForm = () => {
        setTodo({
            title: "",
            description: "",
            completed: ""
        });
    };
    

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", todo)
        navigate("/")
    }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>User Registration</h2>
                  <br></br>
                  
                  <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3 text-start'>
            <label htmlFor='Name' className='form-label'>
              Title :
            </label>
            <input
              type={'text'}
              className='form-control'
              placeholder='Enter your title'
              name='title'
              value={title}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <br></br>
          <div className='mb-3 text-start'>
            <label htmlFor='description' className='form-label'>
              User Name :
            </label>
            <input
              type={'text'}
              className='form-control'
              placeholder='Enter your description'
              name='description'
              value={description}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <br></br>
          
            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-outline-primary '>
                Add Todo
              </button>
              <Link className='btn btn-outline-danger mx-2' to="/" onClick={clearForm}>
                Cancel
               </Link>
                             
               </div>
                          
             
                       
          </form>
        </div>
      </div>
    </div>
  );
}
