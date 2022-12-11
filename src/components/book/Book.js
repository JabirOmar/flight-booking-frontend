import React, { useState } from 'react'
// import { BsExclamationCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
import './book.css'

function Book() {

  const pageOne = document.getElementById('pageOne')
  const pageTwo = document.getElementById('pageTwo')
  const pageThree = document.getElementById('pageThree')
  const pageFour = document.getElementById('pageFour')
  const bookingForm = document.querySelector('.booking_form')
  // const wrapperOne = document.getElementById('wrapper_one')

  const depInput = document.getElementById('depInput')
  const desInput = document.getElementById('desInput')

  const firsName = document.getElementById('firstName')
  const middleName = document.getElementById('middleName')
  const lastName = document.getElementById('lastName')

  const nationality = document.getElementById('nationality')
  const gender = document.getElementById('gender')
  const title = document.getElementById('title')
  const age = document.getElementById('age')

  const depDate = document.getElementById('depDate')

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [first_name, setFirstName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [last_name, setLastName] = useState('');
  const [nation, setNationality] = useState('');
  const [gen, setGender] = useState('');
  const [titl, setTitle] = useState('');
  const [Age, setAge] = useState('');
  const [dep_date, setDeparture] = useState('');
  const [return_date, setReturn] = useState('');

  const user = {
      from,
      to,
      firstName: first_name,
      middleName: middle_name,
      lastName: last_name,
      nationality: nation,
      gender: gen,
      title: titl,
      age: Age,
      depDate: dep_date,
      retrnDate: return_date
    }

  const nextOne = () => {
    if (depInput.value.length <= 2 || desInput.value.length <= 2 ) {
      alert("Input fields can't be less than 3 latters")
    }else {
      pageOne.style.left = '-500px'
      pageTwo.style.left = '0'
      bookingForm.style.height = '500px'
    }
  }

  const prevOne = () => {
    pageOne.style.left = '0'
    pageTwo.style.left = '500px'
    bookingForm.style.height = '415px'
  }

  const nextTwo = () => {
   
    if (firsName.value.length <= 2 || middleName.value.length <= 2 || lastName.value.length <= 2 ) {
      alert("Input fields can't be less than 3 latters")
    }else {
      pageTwo.style.left = '-500px'
      pageThree.style.left = '0'
      bookingForm.style.height = '400px'
    }
  }

  const prevTwo = () => {
    pageTwo.style.left = '0'
    pageThree.style.left = '500px'
    bookingForm.style.height = '500px'
  }

  const nextThree = () => {
    
    if (nationality.value !== 'Nationality' && gender.value !== 'Gender' && title.vale !== 'Titlt' && age.value > 0) {
      pageThree.style.left = '-500px'
      pageFour.style.left = '0'
      bookingForm.style.height = '415px'
      console.log(nationality.value + " " + gender.value + " " + title.value + " " + age.value);
    }else {
      alert('Fill the fields with Correct answer')
    }
  }

  const prevThree = () => {
    pageThree.style.left = '0'
    pageFour.style.left = '500px'
    bookingForm.style.height = '400px'
  }

  const handleSubmit = (e) => {
      e.preventDefault();

    if (depDate.value === 0) {
      console.log('bad');
      e.preventDefault();
    }else {
      fetch('/passengers', {
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(user)
      })
      window.open('https://youtube.com')
    }
  }

  // let countries = [ "Albanian", "Algerian", "American", "Andorran", "Angolan",]

  // const selectCountry = () => {
  //   wrapperOne.classList.toggle('active')
  // }
  
  

  return (
    <div className='book_section' id='section3' >
      
      <h2 id='booking_title'>Your next adventure<br/> is just <span>Clicks</span> a way</h2>

        <form className='booking_form' onSubmit={handleSubmit}>

          <h3 id='form_big_title'>Flight Booking</h3>
          <hr id='form_hor'/>

          <div id='page_wrapper'>

          <div className='page' id='pageOne'>
            <div className='page_title'>
              Destination info :
            </div>
            <div className='form_field'>
              <label>Departure</label>
              <input id='depInput' type='text'  value={from} onChange={(e) => setFrom(e.target.value)}/>
            </div>
            <div className='form_field'>
              <label>Destination</label>
              <input id='desInput' type='text'  value={to} onChange={(e) => setTo(e.target.value)}/>
            </div>
            <div className='button_field'>
              <button type='button' onClick={nextOne} id='next1' >Continue</button>
            </div>
          </div>

          <div className='page' id='pageTwo'>
            <div className='page_title'>
              Passenger Info :
            </div>
            <div className='form_field'>
              <label>First Name</label>
              <input id='firstName' type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='form_field'>
              <label>Middle Name</label>
              <input id='middleName' type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div className='form_field'>
              <label>Last Name</label>
              <input id='lastName' type='text' value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='button_field'>
              <button type='button' id='prev1' onClick={prevOne} >Previous</button>
              <button type='button' id='next2' onClick={nextTwo} >Continue</button>
            </div>
          </div>

          <div className='page'  id='pageThree'>
            <div className='page_title'>
              More Info :
            </div>

            <div className='row_1'>
              <div className='container'>
                <select id='nationality' defaultValue={'Nationality'}>
                  <option disabled value="Nationality" >Nationality</option>
                  <option>Afghan</option>
                  <option>Albanian</option>
                  <option>Algerian</option>
                  <option>American</option>
                  <option>Andorran</option>
                  <option>Angolan</option>
                </select>
                <BsChevronDown id='dropDown'/>
              </div>
              <div className='container'>
                <select id='gender' defaultValue={'Gender'}>
                  <option disabled value="Gender" >Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <BsChevronDown id='dropDown'/>
              </div>
            </div>

            <div className='row_2'>
            <div className='container'>
                <select id='title' defaultValue={'Title'}>
                  <option disabled vale="Title" >Title</option>
                  <option>Mr</option>
                  <option>Ms</option>
                  <option>Mrs</option>
                  <option>kid</option>
                </select>
                <BsChevronDown id='dropDown'/>
              </div>
             <div className='form_field'>
              <label>Age</label>
              <input id='age' type='number' />
            </div>
            </div>

            <div className='button_field'>
              <button type='button' id='prev2' onClick={prevTwo} >Previous</button>
              <button type='button' id='next3' onClick={nextThree}  >Continue</button>
            </div>
          </div>

          <div className='page' id='pageFour'>
            <div className='page_title'>
              Date :
            </div>
            <div className='form_field'>
              <label>Departure Date</label>
              <input id='depDate' type='date'  />
            </div>
            <div className='form_field'>
              <label>Return Date</label>
              <input type='date' />
            </div>
            <div className='button_field'>
            <button type='button' id='prev2' onClick={prevThree} >Previous</button>
              <button type='submit' id='submit' >Continue</button>
            </div>
          </div>

          </div>

        </form>

      {/* </div> */}

    </div>
  )
}

export default Book
