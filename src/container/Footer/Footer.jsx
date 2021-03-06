import React, { useState } from 'react'
import './Footer.scss'
import images from '../../constants/images';
import { client } from '../../client';
import AppWrap from '../../wrapper/AppWrap';

function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  } 

  const handleSubmit = (e) => {
    setLoading(true)
    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className="head-text">Take a coffee & contact with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:andrzejczakmaks@icloud.com" className="p-text">andrzejczakmaks@icloud.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +48 533 643 011 " className="p-text">tel: +48 533 643 011 </a>
        </div>
      </div>

      {!isFormSubmitted ? <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder="Your name" value={name} onChange={handleChangeInput} name="name" />
        </div>
        <div className="app__flex">
          <input type="text" className="p-text" placeholder="Your email" value={email} onChange={handleChangeInput} name="email" />
        </div>
        <div>
          <textarea name="message" value={message} placeholder="Your message" className="p-text" onChange={handleChangeInput}></textarea>
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'SENDING' : 'Send Message '}</button>
      </div> : <div>
        <h3 className="head-text">Thank you for getting in touch</h3>
        </div>}
    </>
  )
}

export default AppWrap(Footer, 'contacts', 'app__whitebg')
