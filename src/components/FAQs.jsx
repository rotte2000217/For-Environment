/* Frequently Asked Questions */

import SectionHead from './SectionHead'
import {FaQuestion} from 'react-icons/fa' /*  on google search type react icons and go to https://react-icons.github.io/react-icons/  
type diamond  or any  needed name and select the icon name*/
import {faqs} from '../data'
import FAQ from './FAQ' /* like Card component  */

import React from 'react'
const FAQs =() => {
    return (
        <section className='faqs'>
            <div className="container faqs-container" >
              <SectionHead icon={<FaQuestion/>}  title="FAQs" /> 
              <div className="faqs_wrapper" >
                {
                  faqs.map(({id,question,answer})=>{
                    return <FAQ key={id} question={question} answer={answer}/>
                  })  
                }
              </div>
            </div>
        </section>
    )
}

export default FAQs