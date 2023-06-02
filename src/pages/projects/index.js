import './index.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/simpleLIfe.png' //'../../images/Header_Main.png' 

import Card from '../../components/UI/Card'
import {projects} from '../../data'



const Projects =() => {
    return (
        <>
        <Header title="Our projects" image={HeaderImage} >
            Lets have a healthy world
        </Header>
        <section className="projects" >
            <div className="container projects_container" >
               
                   {
                    projects.map(({id,title,info,value,features})=>{
                        return <Card key={id} className='project'>
<h3>{title}</h3>
<small>{info}</small>
<h1> {`$${value}`}</h1>
<h4>Features</h4>
{/* if not available 'disabled' else ''*/}
{
 features.map(({feature,available},index)=>{
    return <p key={index} className={!available?'disabled' : '' }> {feature}</p> 
 })   
}
<button className='btn lg'>Choose favourite</button>
                        </Card>
                    })
                   }
     
            </div>
    </section>
        </>
    )

}

export default Projects