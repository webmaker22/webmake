import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { MdPhone, MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaDesktop } from 'react-icons/fa';
import {
    faInstagram,
    faFacebook,
    faTwitter,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutUs = () => {
  return (
    <>
    <Container fluid className="bg-dark text-white py-2">
        <Row className="justify-content-between align-items-center">
          {/* Social Icons */}
          <Col md="auto" className="d-flex gap-3">
            <FaLinkedin size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaPinterest size={20} />
          </Col>
          {/* Contact Details and Nav Links */}
          <Col md="auto" className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center">
              <MdPhone size={20} /> <span className="ms-2">+91-8888888888</span>
            </div>
            <div className="d-flex align-items-center">
              <MdEmail size={20} /> <span className="ms-2">websupport@justdial.com</span>
            </div>
            {/* Navigation Links */}
            
          </Col>
        </Row>
      </Container>
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 style={{padding:'20px'}} className="text-4xl font-semibold text-gray-900">About Us</h1>
          <p className="text-lg text-gray-500 mt-2">
            We are a leading institute dedicated to empowering learners
            through high-quality education and practical skills development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Institute Image"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 text-base">
              We strive to provide the best learning environment with
              comprehensive courses to equip students with the skills needed to
              succeed in the ever-changing job market.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346614.jpg?t=st=1736444731~exp=1736448331~hmac=c32daa232dcd32c750af2362a838d28ad6d2906334182174f2e0feb1e9b5cafa&w=740"
              alt="Our Team"
              className="w-full h-64 object-cover rounded-lg mb-6"

            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h2>
            <p className="text-gray-600 text-base">
              Our team consists of expert instructors, industry professionals,
              and dedicated staff who are passionate about helping you reach your
              learning goals.And Help the Student to Achieve his Goal
            </p>
          </div>
        </div>

        <div style={{paddingTop:'30px'}} className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            We offer a unique approach to learning with flexible course options,
            hands-on experience, and personalized support. Our goal is to ensure
            that every student reaches their full potential.
          </p>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            <Link style={{color:'white'}} to="/Pages/signup" >Learn More</Link>
          </button>
        </div>
      </div>
    </div>
    <br></br>
    <footer style={{}} className="bg-gray-800 text-white py-10 pb-5">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Bird Feeds Section */}
                <div className="bg-yellow-500 p-6 rounded-md">
                  <h3 className="text-lg font-bold mb-4">BIRD FEEDS</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1">Check out this Course:</p>
                      <a
                        href="https://en.wikipedia.org/wiki/Web_development"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:underline"
                      >
                        Web Development
                      </a>
                      <p className="text-sm text-gray-700">2 weeks ago</p>
                    </div>
                    <div>
                      <p className="mb-1">Check out this Course:</p>
                      <a
                        href="https://en.wikipedia.org/wiki/Artificial_intelligence"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:underline"
                      >
                        Artificial Intelligence
                      </a>
                      <p className="text-sm text-gray-700">2 weeks ago</p>
                    </div>
                    <div>
                      <p className="mb-1">Check out this Course:</p>
                      <a
                        href="https://en.wikipedia.org/wiki/Computer_security"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:underline"
                      >
                        Cyber Security
                      </a>
                      <p className="text-sm text-gray-700">2 weeks ago</p>
                    </div>
                  </div>
                </div>
        
                {/* Newsletter Section */}
                <div className="bg-gray-700 p-6 text-center rounded-md">
                  <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Get Your Daily News About Phone Product and Send us Your Email to
                    Contact Us and Get Information.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
        
                {/* Social Links Section */}
                <div className="bg-blue-400 p-6 text-center rounded-md">
                  <h3 className="text-lg font-bold mb-4">Links</h3>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200"
                    >
                      <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                  </div>
                </div>
        
                {/* Contact Section */}
                <div className="bg-gray-700 p-6 text-center rounded-md">
                  <h3 className="text-lg font-bold mb-4">CONTACT</h3>
                  <p className="text-sm">
                    <strong>Phone:</strong> 1-000-000-0000 <br />
                    <strong>Fax:</strong> 1-000-000-0000
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Email:</strong> <br />
                    abcdefg@hijs.dfh <br /> fjashf@jkfs.ckd
                  </p>
                </div>
              </div>
            </footer>
            </>
  );
};

export default AboutUs;
