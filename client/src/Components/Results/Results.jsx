import React from 'react'
import { useSelector } from 'react-redux'

const Results = () => {
  const texts = useSelector(state => state.texts)

  return (
    <div className="container-sm p-2 mt-4 bg-white w-75">
      <h3 className= "p-4">Results:</h3>
      {texts.value.length > 0
        ? texts?.value?.map((value, index) => {
          return (
            <div className="container-sm d-flex w-50" key={index}>
              <div className="form-control p-2 d-flex me-2 mb-2"> Text: {value.text}</div>
              <div className="form-control p-2 d-flex me-2 mb-2"> Palindrome: {value.isPalindrome}</div>
            </div>
          )
        })
        : <div className="container-sm w-25 d-flex justify-content-center bg-secondary text-white">No results</div>
      }
    </div>
  )
}

export default Results