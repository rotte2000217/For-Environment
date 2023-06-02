import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai' 
import {AiOutlineMinus} from 'react-icons/ai' 


/* if isAnswerShowing is true <p>{answer}</p>
{isAnswerShowing && <p>{answer}</p>}
*/
const FAQ=({question,answer}) => {
const [isAnswerShowing,setIsAnswerShowing] = useState(false);

    return (
        <article className="faq" onClick={()=>setIsAnswerShowing(prev=>!prev)} >
<div>
    <h4>{question}</h4>
    <button className="faq_icon" >
{
    isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
}


    </button>
</div>
{isAnswerShowing && <p  word-wrap="break-word"    overflow-wrap="break-word" word-break="break-all" >{answer}</p>}

        </article>
    )
}

export default FAQ