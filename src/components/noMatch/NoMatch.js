import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
  const navigate = useNavigate()

  document.title = 'HourlyFinder | Page Not Found'
  return (
    <div className="hero-area d-flex align-items-center text-center">
      <div className="not-found-content">
        <h2 className="f-100">404</h2>
        <h1>We looked really hard</h1>
        <p>But it appears the page you seek,<br/>doesn't exist anymore.</p>
        <button onClick={() => navigate(-1)} className="btn btn-main mt-20">
          Go back to where you came from
        </button>
      </div>
    </div>
  )
}

export default NoMatch
