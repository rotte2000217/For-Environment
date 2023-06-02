import './index.css'
import {Link} from 'react-router-dom'


const NotFound =() => {
    return (
        <section>
        <div className="container notfound_container">
            <h2>Page Not Found</h2>
            <Link to="/" className='btn' >Go Back Home</Link>
        </div>  
        </section>
    )

}

export default NotFound