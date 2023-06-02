
import {useState} from 'react'
import {Link,NavLink} from 'react-router-dom'

import './navbar.css'
import Logo from '../images/logo2.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'  // ## got to url and type icon name part to view icons  (https://react-icons.github.io/react-icons/)
import {MdOutlineClose} from 'react-icons/md'  // ## got to url and type icon name part to view icons  (https://react-icons.github.io/react-icons/)



/* <NavLink to={path} className={({isActive})=>isActive?'active-nav' : ''}> if prop isActive is true the className will be 'active-nav' */
/* <ul className='nav_links'>


<button className="nav-toggle-btn" onClick={()=>setIsNavShowing(!isNavShowing)}>
                <GoThreeBars />
            </button>

            //## within {} the javascript conditional statement is given
            <button className="nav-toggle-btn" onClick={()=>setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose/> :  <GoThreeBars />
                }
            </button>

*/

const Navbar =() => {
    const [isNavShowing,setIsNavShowing] = useState(false); /* setIsNavShowing is the state updating function  */

    return (
        <nav>
        <div className="container nav_container"> {/* general class= 'container' specific class='nav_container'  */}
            <Link to="/" className='logo'>
            <img src={Logo} alt="Nav Logo" />
            </Link> 
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>{/*within template literals `` in java script mode (${})*/}
                {
                    links.map(({name,path},index)=>{
                        return ( 
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''}>{name}</NavLink> {/*  single line arrow function in this line*/}
                            </li>
                        )
                    })
                }

            </ul>
            <button className="nav_toggle-btn" onClick={()=>setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose/> :  <GoThreeBars />
                }
            </button>
           
        </div>
        </nav>
    )

}

export default Navbar