import './index.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/ContactUs.png' // use a nother image 'clean sea' and do a transition
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'







const Contact =() => {
    return (
        <>
        <Header title="Contact Us" image={HeaderImage} >
            Lets have a healthy world
        </Header>
        <section className="contact" >
            <div className="container contact_container" >
                <div className="contact_wrapper">
                    <a href="mailto:support@egattor.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a> {/* target="_blank" opens a new tab */}
                    <a href="http://m.me/ernest_achiever"  target="_blank" rel="noreferrer noopener"><BsMessenger/></a> {/* for https://www.messenger.com/  target="_blank" opens a new tab */}
                    <a href="https://wa.me/+233557097546"  target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a> {/* for whatsapp- (substitute your phone number) https://api.whatsapp.com/send/?phone=%2B233557097546&text&type=phone_number&app_absent=0   target="_blank" opens a new tab */}

                </div>
            </div>
            
        </section>
        </>
    )

}

export default Contact