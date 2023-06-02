import React from 'react'
/*  on google search type react icons and go to https://react-icons.github.io/react-icons/  
type diamond  or crown and select the icon name*/
import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {projects} from '../data'
import Card from './UI/Card'
import {Link} from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'

/* refer home.jsx, home/index.css */
const Projects =() =>{
    return (
        <section className="projects"> 
        <div className="container projects_container"> {/* general container class and projects_container class  */}
               <SectionHead icon={<FaCrown/>} title="Projects" /> {/* refer component SectionHead  */}
        
        <div className="projects_wrapper" >
           
{ /*  each item is destructured to {id,icon,title,info,path} */
    projects.map(({id,icon,title,info,path}) => {
        return (
            <Card className="Projects_project" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm"> test
                < AiFillCaretRight /> </Link>
            </Card>
        )
    })
}
</div>
</div>
</section>
    )
}

export default Projects

