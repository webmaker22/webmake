import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Button, Navbar, Nav,Card,Image,Offcanvas} from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaDesktop } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { BsDatabase, BsGlobe, BsCode, BsFillLayersFill, BsPhone, BsHash } from 'react-icons/bs';
import './SkillLayout.css';  // Import the CSS file for custom styles
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Accordion from 'react-bootstrap/Accordion';
// Import the image
import backgroundImage from './walp.jpg'; // Update the path if different
import { Link } from "react-router-dom";


const App = () => {
  const [bgColor, setBgColor] = useState('bg-blue-800'); // Initial background color

  // Array of colors to cycle through
  const colors = [
    'bg-blue-800',
    'bg-green-600',
    'bg-yellow-400',

  ];

  useEffect(() => {
    let index = 0;

    // Function to change the background color
    const changeColor = () => {
      index = (index + 1) % colors.length; // Cycle through colors
      setBgColor(colors[index]);
    };

    // Change the background color every 500ms (0.5 seconds)
    const interval = setInterval(changeColor, 500);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  
  const courses = [
    {
      link: '/Pages/webdevelopment',
      title: "FULL STACK W.D",
      description:
        "We provide full training in MS Office which includes Excel, Word, PowerPoint, etc. Our highly professional certified trainers are here to provide you the best testing training.And Computer become easy",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*A2s5TI5LrD6UPRQt.jpg", // Replace with actual image URL
    },
    {
      title: "A.I(ROBOTICS)",
      link: '/Pages/ai',
      description:
        "We offer various SAP certification courses which provide real-time & focused SAP training which are completely industry oriented to our honored patrons at very affordable rates.",
      image: "https://cdn.prod.website-files.com/624ac40503a527cf47af4192/63358e4cfe55f12b3ea9f341_Artificial%20intelligence-Based%20Robots-p-800.png", // Replace with actual image URL
    },
    {
      link: '/Pages/webdesign',
      title: "WEB DESIGN",
      description:
        "Learn to build 3D models, design virtual worlds and create animations with our expert-led tutorials. Our training courses provide real-time & focused training which are completely industry oriented.",
      image: "https://www.oxfordinstitute.in/img/web-designing-development-banner.jpg", // Replace with actual image URL
    },
    {
      link: '/Pages/cyber',
      title: "CYBER SECURITY",
      description:
        "We offer training for various programming languages like Java, C, C++, R, .Net, Android, Python, etc. These courses help the students, working as professionals to enhance their career prospects.",
      image: "https://live.staticflickr.com/388/18709586962_42498a806f_c.jpg" // Replace with actual image URL
    },
    {
      link: '/Pages/Amazon',
      title: "AMAZON",
      description:
        "We offer training for various programming languages like Java, C, C++, R, .Net, Android, Python, etc. These courses help the students, working as professionals to enhance their career prospects.",
      image: "https://w0.peakpx.com/wallpaper/12/131/HD-wallpaper-amazon-logo-amazon-brand-logo.jpg", // Replace with actual image URL
    },
  ];
  const testimonials = [
    {
      name: "Felipe M.",
      since: "Learner since 2018",
      image: "https://t4.ftcdn.net/jpg/06/28/04/87/360_F_628048704_BIm31smMFDYYFCGItT45pS2agYStYZmm.jpg",
      quote: "To be able to take courses at my own pace and rhythm has been an amazing experience. I can learn whenever it fits my schedule and mood."
    },
    {
      name: "Jennifer J.",
      since: "Learner since 2020",
      image: "https://images.unsplash.com/profile-1683474025615-72d34ef3d0f8image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      quote: "I directly applied the concepts and skills I learned from my courses to an exciting new project at work."
    },
    {
      name: "Larry W.",
      since: "Learner since 2021",
      image: "https://as2.ftcdn.net/v2/jpg/06/28/04/83/1000_F_628048396_GScimaNtX5zKLryFhWogzKh83nZhr9Zr.webp",
      quote: "When I need courses on topics that my university doesn't offer, Coursera is one of the best places to go."
    },
    {
      name: "Rebecca H.",
      since: "Learner since 2022",
      image: "https://as2.ftcdn.net/v2/jpg/06/36/28/87/1000_F_636288702_TWwqr0jv64RNoogDTQaMkgw4vr3eRP1G.webp",
      quote: "Learning isn't just about being better at your job; it's so much more than that. Coursera allows me to learn without limits."
    }
  ];
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: '#333',
        position: 'relative' // To position the child elements absolutely
      }}
    >
      {/* Top Bar */}
      <Container fluid className="py-2 bg-body-info text-dark" style={{ fontSize: '0.9rem' }}>
        <Row className="justify-content-between align-items-center">
          <Col md="auto" className="d-flex align-items-center gap-2">
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
            <FaPinterest />
            <MdPhone /> +91-8888888888
            <MdEmail /> websupport@justdial.com
          </Col>
          <Col md="auto" className="d-flex align-items-center gap-2">
            <MdLocationOn /> Islamabad
            <span> | </span>
            <span><Link style={{color:'black'}} to="/Pages/login">Log In</Link></span> |   
                 
                  <span><Link style={{color:'black'}} to="/Pages/Signup">Sign Up</Link></span>
                 
          </Col>
        </Row>
      </Container>

      {/* Navbar */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <FaDesktop size={35} style={{ color: '#6c757d', marginRight: '10px' }} />
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto " style={{marginRight:'10px'}}> {/* Center the Nav links with m-auto */}
              <Nav.Link><h5 className="fw-bold"><Link to="/allfront" className='text-decoration-none text-black '>Home</Link></h5></Nav.Link>
              <Nav.Link href="#row-3" ><h5 className="fw-bold" style={{color:'black'}}>Courses</h5></Nav.Link>
              <Nav.Link><h5 className="fw-bold"><Link to="/Pages/aboutus" className='text-decoration-none text-black '>About Us</Link></h5></Nav.Link>
              <Nav.Link><h5 className="fw-bold"><Link to="/Pages/contactus" className='text-decoration-none text-black '>Contact Us</Link></h5></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content positioned in the bottom-left corner */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '20px',
          textAlign: 'left'
        }}
      >
        <h1 style={{ fontWeight: 'bold', fontSize: '3.5rem' }}>Computer Training</h1>
        <h2 style={{ fontSize: '1.29rem', color: '#555', fontWeight: 'bold',marginLeft:'20px' }}>at its Best</h2>
        <Button  variant="secondary" size="lg"><Link style={{color:'white'}} to="/Pages/signup" >Enquire Now</Link></Button>
      </div>
    </div>
    <Container fluid className= "mt-4">
      <Row className='bg-light' p-5>
      <Carousel fade>
      <Carousel.Item>
        <img className='d-block w-100 '
        src="https://images.pexels.com/photos/5621952/pexels-photo-5621952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt='first slide'
            />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100'
        src="https://images.pexels.com/photos/5621945/pexels-photo-5621945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt='EDUCATE HTML LEARNING' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100'
        src="https://images.pexels.com/photos/5530437/pexels-photo-5530437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt='first slide'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Row>
    </Container>

    <div>
      <div className="text-center my-10 px-4">
        <h2 id="row-3"  className="text-3xl font-bold mb-6">Courses</h2>
        <div className="flex flex-row sm:flex-wrap justify-center gap-6 overflow-x-scroll sm:overflow-x-visible w-full max-w-screen-xl mx-auto">
          {courses.map((course, index) => (
            <Link
              to={course.link}
              key={index}
              className="w-72 sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="text-blue-500 font-bold">Learn More</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className={`flex items-center ${bgColor} h-screen transition-colors duration-500`}>
      {/* Outer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center">
        {/* Left Side Text and Button */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start space-y-4">
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
            <Link to="/Pages/Signup">Get Started</Link>
          </button>
        </div>

        {/* Right Side Large Heading */}
        <div className="w-full md:w-2/3 flex justify-center md:justify-start">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight text-white">
            Learn Coding Online
            <br />
            <span className="px-2">With Professional</span>
            <br />
            Instructors
          </h1>
        </div>
      </div>
    </div>
    <Container fluid className="p-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Row>
        {/* Left Section */}
        <Col md={4} className="d-flex flex-column gap-4">
        <h5 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper.
</h5>

          
          
      
      <div className="left-link d-flex justify-content-between align-items-center py-2">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              Brain Technique
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="left-link d-flex justify-content-between align-items-center py-2">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              Faster Acknowledging
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="left-link d-flex justify-content-between align-items-center py-2">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="2">
            <Accordion.Header style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              Perfect In Coding
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="left-link d-flex justify-content-between align-items-center py-2">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="3">
            <Accordion.Header style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              Skill Development
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

        </Col>
        

        {/* Right Section */}
        <Col md={8} className="d-flex flex-wrap gap-5">
          {[
            { icon: <BsDatabase />, title: 'DBMS Programming' },
            { icon: <BsGlobe />, title: 'Data Science' },
            { icon: <BsFillLayersFill />, title: 'Web Programming' },
            { icon: <BsCode />, title: 'Full Stack' },
            { icon: <BsPhone />, title: 'Mobile App' },
            { icon: <BsHash />, title: 'Rest API' },
          ].map((item, index) => (
            <Card key={index} className="skill-card p-3" style={{ width: '18rem' }}>
              <div className="icon-container mb-2">{item.icon}</div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipiscing.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
    <Container className="d-flex align-items-center justify-content-center min-vh-100 my-5 ">
      <Row className="text-center">
        {/* Left Side Text */}
        <Col md={6}>
          <h2 className="display-5 my-5 p-4 hover:scale-105 transform transition duration-500" style={{ color: '#2C3E50',boxShadow: '1px 4px 8px rgba(8, 8, 8, 9)' }}>We Provide Diverse Programming Classes</h2>
        </Col>

        {/* Right Side Testimonial */}
        <Col md={6}>
          <blockquote className="blockquote" style={{ fontSize: '1.25rem', color: '#6C757D' }}>
            <h3 style={{textShadow: '2px 5px 7px rgba(1, 5, 6, 0.4)'}}>“At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.”</h3>
          </blockquote>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Image
              src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" // Replace with the actual image URL
              rounded
              width="90"
              height="80"
              alt="William Hardy"
            />
            <div className="ms-3 text-start p-5">
              <strong style={{ fontSize: '1rem', color: '#2C3E50' }}>William Hardy</strong>
              <p className="mb-0" style={{ fontSize: '0.9rem', color: '#6C757D' }}>CEO & Founder Encode</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="my-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-xl p-6">
  <Row className="items-center">
    <Col md={8} className="space-y-4">
      <h2 className="text-2xl font-bold text-blue-800">
        Build your subject-matter expertise
      </h2>
      <p className="text-gray-700">
        This course is part of the{' '}
        <a
          href="https://www.google.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          HTML, CSS, and Javascript for Web Developers Specialization
        </a>
        .<br />
        When you enroll in this course, you'll also be enrolled in this
        Specialization.
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Learn new concepts from industry experts</li>
        <li>Gain a foundational understanding of a subject or tool</li>
        <li>Develop job-relevant skills with hands-on projects</li>
        <li>Earn a shareable career certificate</li>
      </ul>
    </Col>
    <Col md={4}>
      <img
        src="https://t3.ftcdn.net/jpg/06/90/99/90/360_F_690999006_54U3joTZ0D9Y1HPFxdNL3EdvI4WBn2Ad.jpg"
        alt="Learning"
        className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
      />
    </Col>
  </Row>

  <Card className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-lg">
    <Card.Body className="space-y-4 p-6">
      <h4 className="text-lg font-semibold text-gray-800">Earn a career certificate</h4>
      <p className="text-gray-700">
        Add this credential to your LinkedIn profile, resume, or CV.<br />
        Share it on social media and in your performance review.
      </p>
      <Row className="items-center mt-4">
        <Col md={8}></Col>
        <Col md={4} className="text-right">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={handleShow}
          >
            Toggle Right Offcanvas
          </button>
        </Col>
      </Row>
    </Card.Body>
  </Card>

  <Offcanvas
    className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl text-white"
    show={show}
    onHide={handleClose}
    placement="end"
  >
    <Offcanvas.Header className="relative flex justify-between items-center">
      <button
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
        onClick={handleClose}
      >
        ✕
      </button>
      <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-2xl">
        <img
          src="https://media.istockphoto.com/id/950603046/photo/school-boy-using-computer.jpg?s=612x612&w=0&k=20&c=ZfZSIYjI1PsFOGIfojhagzKe5czi9ErefayNyjJQ-s8="
          alt="Learning"
          className="w-full h-full object-cover hover:scale-105 transform transition duration-500"
        />
      </div>
    </Offcanvas.Header>
    <Offcanvas.Body className="px-6 py-4">
      <h4 className="text-lg md:text-xl font-bold text-center shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-lg hover:translate-y-1 transform transition duration-300">
        With the 6 months of knowledge and success from this course, future jobs
        will become easier for you.
      </h4>
    </Offcanvas.Body>
  </Offcanvas>
</Container>

    <Container className="my-5">
      <h2 className="text-center mb-4">Why people choose Coursera for their career</h2>
      <Row className="p-5">
        {testimonials.map((testimonial, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="h-100 p-3" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div className="d-flex align-items-center mb-3">
                <Image src={testimonial.image} roundedCircle width="100" height="70" />
                <div className="ms-3">
                  <h5 className="mb-0">{testimonial.name}</h5>
                  <p className="text-muted small">{testimonial.since}</p>
                </div>
              </div>
              <Card.Text>"{testimonial.quote}"</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Text Section */}
        <Col md={8}>
          <h1 className="p-lg-5" style={{ fontWeight: 'bold', color: '#333', padding:'6px',}}>
            Encode has been used by more than 2 million people to develop their skills or for their careers, this site is entirely for purposes — <a href="www.google" style={{ color: '#3366ff', textDecoration: 'none' }}>Programming Courses</a>
          </h1>
          <h1 className="p-lg-5" style={{ fontSize: '1.2rem', marginTop: '20px' }}>
            So Everyone can focus on what they are learning to be the best.
          </h1>
          <Button variant="link" className="mt-3" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
            <Link to="/Pages/aboutus" >Read More</Link> <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>→</span>
          </Button>
        </Col>

        {/* Image Section */}
        <Col md={4}>
          <Image
            src="https://images.pexels.com/photos/4050464/pexels-photo-4050464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Replace with actual image URL
            rounded
            fluid
            style={{ boxShadow:'10px 10px',width:'400px' }}
          />
        </Col>
      </Row>
    </Container>
    <footer className="bg-gray-800 text-white py-10">
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

export default App;
