import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'

function Contact() {
  return (
    <>
    
    <section className="contacts">
    <h1>Contact Me</h1>
      <ul>
        <li><a href="tel:4155133516"> <BiPhoneCall style={{color: "grey"}} />{" "} +1 (415) 513 3516</a></li>
        <li><a href="mailto:zhongyuan@gmail.com"> <AiOutlineMail style={{color: "grey"}} /> {" "} zhongyu8813@gmail.com</a></li>
        <li></li>
      </ul>
    </section>
    </>
  )
}

export default Contact