import {Link} from 'react-router-dom'

const PageNotFound = () => {
	document.title = 'HourlyFinder | Page Not Found'
    return (
        <div className='intro-area center-flex'>
            <div className='intro-text'>
                <h1 className='intro-heading'>Error : 404</h1>
                <p class='lead'>
                    <b>Page Not Found</b><br/>
                    The page you are looking for is not currently available!
                </p>
                <div>
                    <Link to='/'>Go to Home</Link>
                </div>              
            </div>
		</div>
    )
}

export default PageNotFound
