import "./FormStyle.css"
import React from 'react'

const Forms = () => {
  return (
    <div className="form">
      <form >
        <label htmlFor="">NAME</label>
        <input type="text" ></input>
        <label htmlFor="">EMAIL</label>
        <input type="email" ></input>
        <label htmlFor="">SUBJECT</label>
        <input type="text" ></input>
        <label htmlFor="">MESSAGE</label>
        <textarea  rows="6" placeholder="Type your message Here"/>
        <button className="btn">SUBMIT</button>
      </form>
    </div>
  )
}

export default Forms
