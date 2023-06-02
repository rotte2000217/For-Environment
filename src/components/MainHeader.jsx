import {Link} from 'react-router-dom'
import Image from  '../images/Header_Main.jpg'// '../images/Header_Main.png'

const MainHeader =() => {
    
    return (
       <header className="main_header">
        <div className="container main_header-container" >
          <div className="main_header-left" >
        <h4> EcoGuards  </h4> 
     <h1> Live the supreme BEAUTY, HEALTH, SERENITY and HAPPINESS in A pristine natural environment</h1> 
     <p> Lets build a truly healthy and happy nation</p> 
     <Link to="/projects" className='btn lg'>Get Started</Link>   
        </div>  
        <div className="main_header-right" >
            <div className="main_header-circle" >
                <div className="main_header-image">
                    <img src={Image}  alt="Main Header Image"   />
                </div>
            </div>
        </div>
      </div>
    </header>
    )

}

export default MainHeader