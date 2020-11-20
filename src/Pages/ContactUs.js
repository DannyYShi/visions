import React, { useState } from "react";
import './ContactUs.css'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  function handleSubmit(e) {
    setName('')
    setEmail('')
    setText('')
    alert('Thank you for contacting us! We will get in touch with you shortly.')
    e.preventDefault()
  }

  return (
    <div className='contact-us'>
      <h1 className='page_header'>CONTACT US</h1>

      <form className='contact_form'>
        <div className='form-input'>
          <label >Name:</label>
          <input
            className='form-label'
            required
            value={name}
            type='text'
            onChange={(e) => {
              setName(e.target.value);
            }} />
        </div>

        <div className='form-input'>
          <label >Email address:</label>
          <input
            className='form-label'
            required
            value={email}
            type='email'
            onChange={(e) => {
              setEmail(e.target.value)
            }} />
        </div>

        <div className='form-input'>
          <label >Questions, comments, or concerns:</label>
          <textarea
            className='form-label'
            value={text}
            type='text'
            placeholder='Please enter any comments, questions, or concerns.'
            onChange={(e) => {
              setText(e.target.value)
            }} />
        </div>


        <button onClick={handleSubmit}>
          SUBMIT FORM
          </button>
      </form>
    </div>
  );
}
