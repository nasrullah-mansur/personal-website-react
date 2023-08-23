import React from 'react';
import { FaPhoneAlt, FaRegAddressCard, FaRegEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-area section-padding" id="contact">
        <div className="container">
            <h4 className="sub-title">Contact me</h4>
            <h2 className="section-heading">
                I'm always open to discussing product design work or
                partnerships.
            </h2>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="contact-form">
                        <h3>Send me a note</h3>
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-xl-6">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6 col-xl-6">
                                    <input type="text" placeholder="Your Email" />
                                </div>
                            </div>
                            <input type="text" placeholder="Your Subject" />
                            <textarea name="message" placeholder="Your Message ..." data-gramm="false" wt-ignore-input="true" data-quillbot-element="Nq5qIUTDuWZGQjesstKih"></textarea>
                            <button type="submit" className="prim-btn contact-submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="address">
                        <h3>My ADDRESS</h3>
                        <p>
                            There are many variations of passages of
                            Lorem Ipsum available but the majority have
                            suffered
                        </p>
                        <div className="address-list">
                            <div className="address-item">
                                <div className="address-icon">
                                    <FaRegAddressCard />
                                </div>
                                <div className="address-wrap">
                                    <h4 className="address-title">
                                        Address
                                    </h4>
                                    <p>Gajipur, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <FaRegEnvelope />
                                </div>
                                <div className="address-wrap">
                                    <h4 className="address-title">Email</h4>
                                    <p>nasrullah.cit.bd@gmail.com</p>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <FaPhoneAlt />
                                </div>
                                <div className="address-wrap">
                                    <h4 className="address-title">Phone</h4>
                                    <p>+880 1728619733</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;