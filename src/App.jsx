
/*  refer https://www.youtube.com/watch?v=FiWby-T0Ec0 
   React Website Tutorial From Scratch - Responsive React Js 18 & React Router 6 Project Tutorial
   */

/* The component name starts with a capital letter. This is required since we will be dealing with a mix of HTML elements and React elements. Lowercase names are reserved for HTML elements. */
/*   JSX.IntrinsicElements starts with simple letter  eg:  <article */


//to run the app - terminal > new terminal > npm start

import {BrowserRouter,Routes, Route} from 'react-router-dom' //##  Routes was previously called switch

import Home from './pages/home/index'
import About from './pages/about/index'
import Contact from './pages/contact/index'
import Gallery from './pages/gallery/index'
import Projects from './pages/projects/index'
import NotFound from './pages/notfound/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

/* //## type http://localhost:3000/anytext  'anytext' will navigate to NotFound   */
{/* can comment any where this way   */}
const App =() => {
    return (

    <BrowserRouter> 
    <Navbar/>

    <Routes>
    <Route index element= {<Home/>} />
    <Route path='about' element ={<About/>} />
    <Route path='contact' element ={<Contact/>} />
    <Route path='gallery' element ={<Gallery/>} />
    <Route path='projects' element ={<Projects/>} />
    <Route path='*' element ={<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    )
}

export default App