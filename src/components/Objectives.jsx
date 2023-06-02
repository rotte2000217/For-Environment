import Image from '../images/ForObjectives.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi' /*  on google search type react icons and go to https://react-icons.github.io/react-icons/  
type diamond  or any  needed and select the icon name*/
import {objectives} from '../data'
import Card from './UI/Card'

/* refer home.jsx, home/index.css */
const Objectives =() => {
    return (
        <section className='objectives'>
            <div className="container objectives_container">
                <div className="objectives_left">
<div className="objectives_image">
    <img src={Image} alt="Objectives Image" />
</div>
     </div>
                <div className="objectives_right">
                    <SectionHead icon={<GiCutDiamond/>} title="objectives"> </SectionHead>
                    <p>
                        Build a healthy environment preseving the natural resources and beauty.
                    </p>
                    <div className="objectives_wrapper">
                        {
                            objectives.map(({id,icon,title,info})=>{
                                return <Card key={id}  className="objectives_objective">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>

                                </Card>

                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Objectives