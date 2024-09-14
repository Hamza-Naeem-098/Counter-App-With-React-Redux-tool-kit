import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, minusCounter } from '../Store/Slice/CounterSlice'
import './Button.css'

const Button = () => {
  const dispatch= useDispatch()

  const handleCounter =()=>{
    dispatch( addCounter())

  }
  const handleCounter2 =()=>{
    dispatch( minusCounter())

  }
  return (
    <div>
        <button className="custom-button" onClick={handleCounter}>Add</button>
        <button className="custom-button"  onClick={handleCounter2}>Delete</button>
    </div>
  )
}

export default Button