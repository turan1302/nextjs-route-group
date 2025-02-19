"use client";
import React, {useState} from 'react'
import Navbar from "@/app/components/front/common/Navbar";
import Header from "@/app/components/front/common/Header";
import Footer from "@/app/components/front/common/Footer";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Header/>

            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="/front/assets/img/portfolio/cabin.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal2">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="/front/assets/img/portfolio/cake.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal3">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="/front/assets/img/portfolio/circus.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal4">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="/front/assets/img/portfolio/game.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal5">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="/front/assets/img/portfolio/safe.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal6">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="/front/assets/img/portfolio/submarine.png" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme
                            created
                            by Start Bootstrap. The download includes the complete source files including HTML, CSS, and
                            JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                        <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for
                            the
                            masthead, change the icon in the dividers, and add your email address to the contact form to
                            make it fully functional!</p></div>
                    </div>
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                            <i className="fas fa-download me-2"></i>
                            Free Download!
                        </a>
                    </div>
                </div>
            </section>
            <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text"
                                           placeholder="Enter your name..."
                                           data-sb-validations="required"/>
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email"
                                           placeholder="name@example.com"
                                           data-sb-validations="required,email"/>
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is
                                        required.
                                    </div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890"
                                           data-sb-validations="required"/>
                                    <label htmlFor="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number
                                        is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                <textarea className="form-control" id="message"
                                          placeholder="Enter your message here..." style={{height: "10rem"}}
                                          data-sb-validations="required"></textarea>
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is
                                        required.
                                    </div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br/>
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>
                                <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default HomePage
