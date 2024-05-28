import React from 'react'

const addnewtodo = () => {
  return (
      <div className='container'>
          <div>
          <input
              type={'text'}
              className='form-control'
              placeholder='Enter your title'
              name='title'
            //   value={title}
            //   onChange={(e) => onInputChange(e)}
            ></input>
          </div>
    </div>
  )
}

export default addnewtodo