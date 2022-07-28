import React from 'react'
import Form from '../Form/Form'
import Results from '../Results/Results'

const Home = () => {
  return (
    <div className= "min-vh-100 p-0 container-fluid bg-secondary bg-opacity-25">
      <Form />
      <Results />
    </div>
  )
}

export default Home