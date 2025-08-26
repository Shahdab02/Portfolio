import React from 'react'
import './Contact.css';
// import them from '../../assets/dp.jpg'
import contact from '../../assets/contact.jpeg'
import email from "../../assets/Email.jpeg";
import location from "../../assets/location.jpeg";
// import Swal from "sweetalert2";
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {

const [state, handleSubmit] = useForm("xyzpqwow");
  if (state.succeeded) {
      alert("form submit successfully")


  }

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img  className="logo" src={them} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. you
            can contact anytime.{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={contact} alt="" height={30} />
              <p>91+ 9693944313</p>
            </div>
            <div className="contact-detail">
              <img src={email} alt="" height={30} />
              <p>syedshahdab128@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" height={30} />
              <p>77 Hari marg Civil line jaipur</p>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xyzpqwow"
          method='POST'
          onSubmit={handleSubmit}
          className="contact-right"
        >
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email id"
            name="email"
            id="email"
          />
          <label htmlFor="Write your message here">
            write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            id="textarea"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact