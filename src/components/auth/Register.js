import React from 'react'
import LeftContent from './commonAuth/LeftContent'

const Register = () => {
  return (
    <div class="registration-area">
      <div class="registration-box">
        <LeftContent page="register" />
        <div class="registration-form">
          <div class="form">
            <h2>Sign up</h2>
            <form action="">
              <div class="form-field name">
                <div class="first-name">
                  <label for="">First Name</label>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div class="last-name">
                  <label for="">Last Name</label>
                  <input type="text" placeholder="Enter Last Name" />
                </div>
              </div>
              <div class="form-field email">
                  <label for="">Email</label>
                  <input type="email" placeholder="Enter Email Name" />
              </div>
              <div class="form-field name">
                <div class="first-name">
                  <label for="">Password</label>
                  <input type="password" placeholder="Enter Password" />
                </div>
                <div class="last-name">
                  <label for="">Confirm Password</label>
                  <input type="password" placeholder="Password Again" />
                </div>
              </div>
              <div class="form-field account-type">
                <label for="">Account Type</label>
                <select name="" id="">
                  <option value="job seeker">Job Seeker</option>
                  <option value="recruiter">Recruiter</option>
                </select>
              </div>
              <div class="form-field">
                <input type="submit" value="Sign up" class="btn submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
