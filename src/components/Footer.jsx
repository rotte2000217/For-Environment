import {Link} from 'react-router-dom'
import Logo from  '../images/logo2.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer=() =>{
    return (
        <footer>
            <div className="container footer_container" >
            <article>
                <Link to="/" className="logo" >
                <img src={Logo} alt="Footer Logo" />
                </Link>   
<p>
    Environment First
</p>
<div className="footer_socials" >
    <a href="https://linkedin.com/"  target="_blank" rel="noreferrer noopener"  >
        <FaLinkedin/>
    </a>
    <a href="https://facebook.com/"  target="_blank" rel="noreferrer noopener"  >
        <FaFacebook/>
    </a>
    <a href="https://twitter.com/"  target="_blank" rel="noreferrer noopener"  >
        <AiOutlineTwitter/>
    </a>
    <a href="https://instagram.com/"  target="_blank" rel="noreferrer noopener"  >
        <AiFillInstagram/>
    </a>
</div>
            </article>
            <article>
               <h4> Permalinks</h4>
                <Link to="/about" > About </Link>
                <Link to="/gallery" > Gallery </Link>
                <Link to="/contact" > Contact </Link>
            </article>
            </div>
            <div className="footer_copyright" >
                <small>2022 EcoGuards &copy; All Rights Reserved</small>
        </div>
        </footer>
    )
}

export default Footer
