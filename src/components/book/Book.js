import React, { useEffect, useState } from 'react'
// import { BsExclamationCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import './book.css'

function Book() {

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const user = {
      title: from,
      body: to,
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch('http://localhost:3000/passengers', {
    //         method: 'POST',
    //         headers: { 'Content-Type':'application/json' },
    //         body: JSON.stringify(user)
    //     }) 
  }

  const nextOne = () => {
    const pageOne = document.getElementById('pageOne')
    const pageTwo = document.getElementById('pageTwo')
    pageOne.style.left = '-500px'
    pageTwo.style.left = '0'
  }

  const prevOne = () => {
    const pageOne = document.getElementById('pageOne')
    const pageTwo = document.getElementById('pageTwo')
    pageOne.style.left = '0'
    pageTwo.style.left = '500px'
  }

  const nextTwo = () => {
    const pageTwo = document.getElementById('pageTwo')
    const pageThree = document.getElementById('pageThree')
    pageTwo.style.left = '-500px'
    pageThree.style.left = '0'
  }

  const prevTwo = () => {
    const pageTwo = document.getElementById('pageTwo')
    const pageThree = document.getElementById('pageThree')
    pageTwo.style.left = '0'
    pageThree.style.left = '500px'
  }

  return (
    <div className='book_section' id='section3' >
      
      <h2 id='booking_title'>Your next adventure<br/> is just <span>Clicks</span> a way</h2>

        <form className='booking_form' onSubmit={handleSubmit}>

          <h3 id='form_big_title'>Flight Booking</h3>
          <hr id='form_hor'/>

          <div id='page_wrapper'>

          <div className='page' id='pageOne'>
            <div className='page_title'>
              Basic Info :
            </div>
            <div className='form_field'>
              <label>Departure</label>
              <input type='text' value={from} onChange={(e) => setFrom(e.target.value)}/>
            </div>
            <div className='form_field'>
              <label>Destination</label>
              <input type='text' value={to} onChange={(e) => setTo(e.target.value)}/>
            </div>
            <div className='button_field'>
              <button onClick={nextOne} id='next1' >Continue</button>
            </div>
          </div>

          <div className='page' id='pageTwo'>
            <div className='page_title'>
              Basic Info :
            </div>
            <div className='form_field'>
              <label>Name</label>
              <input type='text' />
            </div>
            <div className='form_field'>
              <label>Age</label>
              <input type='text' />
            </div>
            <div className='button_field'>
              <button id='prev1' onClick={prevOne} >Previous</button>
              <button id='next2' onClick={nextTwo} >Continue</button>
            </div>
          </div>

          <div className='page'  id='pageThree'>
            <div className='page_title'>
              Basic Info :
            </div>
            <div className='form_field'>
              <label>Departure</label>
              <input type='text' />
            </div>
            <div className='form_field'>
              <label>Destination</label>
              <input type='text' />
            </div>
            <div className='button_field'>
              <button id='prev2' onClick={prevTwo} >Previous</button>
              <button id='next3'  >Continue</button>
            </div>
          </div>

          </div>

        </form>

      {/* </div> */}

    </div>
  )
}

export default Book