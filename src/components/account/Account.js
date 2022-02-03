import { Switch, Route, Link } from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'

const Account = () => {
  return (
    <div class="registration-area">
        <div class="registration-box">
            <div class="registration-left">
                <div class="registration-left-content">
                    <div class="normal-logo">
                        <h3>HourlyFinder</h3>
                    </div>
                    <div class="registration-left-text">
                        <h2>The most exciting hourly-based jobs are awaiting...</h2>
                        <p>Log in to find hourly-based jobs nearby your location also learn and enjoy from weekly free blogs...</p>
                    </div>
                    <div class="registration-status-info">
                        <p>Already have an account?</p>
                        <h4><Link to="">Sign in</Link></h4>
                    </div>
                </div>
            </div>

            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path='/' component={Register} />

        </div>
    </div>
  )
}

export default Account
