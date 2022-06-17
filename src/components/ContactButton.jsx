import React from 'react'
import ContactPopup from './ContactPopup';
import { Route, Routes, useNavigate } from 'react-router-dom';

const ContactButton = () => {

    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contact')
    }

    return (
        <div>
            <div className='btn1'>
                <button onClick={navigateToContact} type="button" class="btn btn-outline-light"><a>Say Hello!</a></button>
            </div>

            <Routes>
                <Route path='/contact' element={<ContactSection />} />
            </Routes>
        </div>

    )
}

function ContactSection() {
    return (
        <div>
            <ContactPopup />
        </div>
    )
}

export default ContactButton;