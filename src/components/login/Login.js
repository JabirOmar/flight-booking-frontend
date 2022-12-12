import React from 'react'
import './login.css'

function Login() {

    function handleMemeber (e) {
        e.preventDefault()
        const thisSection = document.querySelector('.login_section')
        thisSection.classList.add('remove')
    }

    const toggles = () => {
        const form = document.querySelector('.member_form')
        form.classList.toggle('new')
    }
  return (
    <section className="login_section">
        <form className='member_form' onSubmit={handleMemeber}>
 
 {/* ============ page 1 ============= */}
           <div className='member_page_1 member_pages'>

               <div className='member_form_title'>
                  <h1>Login Form</h1>
               </div>
            </div>

            <div className='member_form_toggles'>
                <section className='toggles_container' onClick={toggles}>
                   <div><h1>Login</h1></div>
                   <div><h1>Signup</h1></div>
                   <i id='slider'></i>
                </section>
           </div>

            <div className='member_page_1 member_pages halfTwo'>
               <div className='member_form_inputs'>
                  <input type='email' placeholder="Email Address" />
                  <input type='password' placeholder="Password" />
               </div>
               <div className='error_container'>
                  <span id='member_err'>Invalid Email or Password</span>
               </div>

               <div className='member_form_bottom'>
                  <button type='submit' className='member_form_submit'>Login</button>
                  <span>Not a Member? Signup now</span>
               </div>

           </div>

{/* ============ Page 2 =========== */}
           <div className='member_page_2 member_pages'>
             <div className='member_form_title'>
            <h1>Signup Form</h1>
           </div>
           </div>
{/* 
           <div className='member_form_toggles'>
                <section className='toggles_container'>
                   <div><h1>Login</h1></div>
                   <div><h1>Signup</h1></div>
                   <i id='slider'></i>
                </section>
           </div> */}

           <div className='member_page_2 member_pages halfTwo'>
           <div className='signup_form_inputs'>
                <div className='signup_row1'>
                    <input type='text' placeholder="First Name" />
                    <input type='text' placeholder="Last Name" />
                </div>
                <div className='signup_row2'>
                    <input type='email' placeholder="Email Address" />
                    <input type='password' placeholder="Password" />
                    <input type='password' placeholder="Conform Password" />
                </div>
                <div className='signup_row3'>
                    <input type='number' placeholder="Age" />
                    <select>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
           </div>

           <div className='member_form_bottom second_bottom'>
                <button type='submit' className='member_form_submit'>Signup</button>
                <span>Have an acount! Login instead</span>
           </div>
           </div>
        </form>
    </section>
  )
}

export default Login