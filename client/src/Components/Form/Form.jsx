import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../../Redux/Slices'

const Form = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getData(input));
    setInput("");
  };

  return (
    <div className='container-fluid bg-danger p-3'>
      <form className='container-sm d-flex justify-content-center' onSubmit={(event) => handleSubmit(event)}>
        <input
            className="form-control me-3 w-50"
            type="text"
            value={input}
            placeholder="Insert a text..."
            onChange={(event) => handleChange(event)}
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
    </div>
  )
}

export default Form