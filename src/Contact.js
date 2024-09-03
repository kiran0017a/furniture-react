import React, { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
 
   try {
     const response = await axios.post('http://localhost:8081/Contact', formData);
     console.log(response.data); // Assuming you want to log the response
   } catch (error) {
     console.error('Error submitting form:', error);
   }
 };
 

  return (
    <>
      <Navigation />
      <div>
        {/* <!-- contact section start --> */}
        <div className="contact_section layout_padding" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="contact_text">CONTACT US</h1>
                <div className="mail_sectin">
                  <input
                    type="text"
                    className="email-bt"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="email-bt"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="email-bt"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <textarea
                    className="massage-bt"
                    placeholder="Message"
                    rows="5"
                    id="comment"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <div className="send_bt">
                    <button onClick={handleSubmit}>SEND</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image_9">
                  <img src="images/img-9.png" alt="Contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
