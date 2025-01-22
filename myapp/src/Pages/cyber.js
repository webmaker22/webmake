import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaDesktop } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { MdPhone, MdEmail } from 'react-icons/md';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const cyber = () => {
  const FAQItem = ({ eventKey, header, text }) => (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>{text}</Accordion.Body>
    </Accordion.Item>
  );
  const cardData = [
    {
      image: 'https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-form-cyborg-bot-brain-robotic-hand-digital-brain_127544-853.jpg?t=st=1731679436~exp=1731683036~hmac=acae51101d586c76630c051bb0cc1a7fe61131192ac780183d4a3118c6d65e5e&w=740',
      link: '/Pages/ai',
      title: 'AI and Robotics',
    },
    {
      image: 'https://thumbs.dreamstime.com/z/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg?ct=jpeg',
      link: '/Pages/webdevelopment',
      title: 'Web Development',
    },
    {
      image: 'https://img.freepik.com/free-photo/web-design-internet-website-responsive-software-concept_53876-124757.jpg?w=826',
      link: '/Pages/webdesign',
      title: 'Web Design',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/06/01/17/25/hacker-8033977_1280.jpg',
      link: '/Pages/cyber',
      title: 'Cyber Security',
    },
    {
      image: 'https://wallpapers.com/images/high/amazon-uk-with-bestsellers-uhou1atcuwini3mq.webp',
      link: '/Pages/Amazon',
      title: 'Amazon',
    },
    {
      image: 'https://img.freepik.com/free-photo/master-painting-mini-figures-with-brush_114579-12156.jpg?t=st=1731679836~exp=1731683436~hmac=55442995c45cb1c7dfb9ce19927422000501d88753fa33624e2aa456f1a96527&w=826',
      link: '/Pages/artshandcraft',
      title: 'Arts & HandCrafts',
    },
  ];
  const items = [
    {
      icon: '📚', // Replace with actual icon/image URL
      title: 'Up-Gradation of Courses',
    },
    {
      icon: '👍', // Replace with actual icon/image URL
      title: '100% Job Assistance',
    },
    {
      icon: '🎓', // Replace with actual icon/image URL
      title: '100% Practical Training',
    },
    {
      icon: '👥', // Replace with actual icon/image URL
      title: 'Small Batches for Personalised Attention',
    },
    {
      icon: '💻', // Replace with actual icon/image URL
      title: 'Advanced Technology',
    },
    {
      icon: '🌟', // Replace with actual icon/image URL
      title: 'Experienced Faculty',
    },
    {
      icon: '🚀', // Replace with actual icon/image URL
      title: 'Career Growth Support',
    },
    {
      icon: '📈', // Replace with actual icon/image URL
      title: 'Result-Oriented Learning',
    },
  ];

  // Group items into sets of 4
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }
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
      
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <FaDesktop size={35} style={{ color: '#6c757d', marginRight: '10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          <Nav.Link><h5 className="fw-bold"><Link to="/allfront" className='text-decoration-none text-black '>Home</Link></h5></Nav.Link>
              <Nav.Link href="#row-3" ><h5 className="fw-bold" style={{color:'black'}}>Courses</h5></Nav.Link>
              <Nav.Link><h5 className="fw-bold"><Link to="/Pages/aboutus" className='text-decoration-none text-black '>About Us</Link></h5></Nav.Link>
              <Nav.Link><h5 className="fw-bold"><Link to="/Pages/contactus" className='text-decoration-none text-black '>Contact Us</Link></h5></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container
        fluid
        className="bg-light py-5 text-black"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Row className="align-items-center">
          <Col md={5}>
            <h1 className="display-4 fw-bold pt-3">PYTHON, SQL, POWERSHELL and JavaScript for Cyber Security</h1>
            <p className="lead fw-bold">
              This course is part of the PYTHON, SQL and JavaScript for Web Designing Specialization
            </p>
            <div className="d-flex align-items-center">
              <Image
                  src="https://as1.ftcdn.net/v2/jpg/04/83/22/04/1000_F_483220405_swceekU8d0Acz6EN2NX3VqYo6KIZMUMb.jpg"
                alt="Instructor Avatar"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <h2 className="mb-0 fw-bold">CYBER SECURITY </h2>
            </div>
            <div className="d-flex mt-3">
              <Button variant="primary" href="#">
              <Link to="/Pages/Signup" style={{color:'white'}}>Enroll for Free</Link>
              </Button>
              <p className="ms-3 mb-0 fw-bold" style={{ marginTop: '10px' }}>
                Financial aid available
              </p>
            </div>
            <p className=" mt-3 fw-bold" style={{color:'black'}}>1,167,317 already enrolled</p>
          </Col>
        </Row>
      </Container>
      <br></br>
      <div className="container mx-auto my-10 p-5 bg-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section with Video */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="video-responsive">
              <iframe
                width="100%"
                height="330"
                src="https://www.youtube.com/embed/inWWhr5tnEA?si=ZOsvrViUCTf52Ye2"
                title="Introduction to Programming Full Course"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">#programming #course #logic</p>
              <h5 className="text-lg font-semibold text-gray-800 mt-2">
                Programming Basic Full Course
              </h5>
              <p className="text-gray-600 mt-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam...
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Section with Accordion */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h4 className="text-lg font-bold text-gray-800 mb-4">
            We Also Provide Online Programming Videos
          </h4>
          <Accordion defaultActiveKey="0">
      <FAQItem
        eventKey="0"
        header="Programming Basic"
        text="It takes 2-3 weeks to get your first code learning ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first web post."
      />
      <FAQItem
        eventKey="1"
        header="Get A Helpful Roadmap"
        text="Our pricing is based on the type of content and frequency of posts. We offer affordable packages that can be tailored to fit your budget."
      />
      <FAQItem
        eventKey="2"
        header="Build Tool With Logic"
        text="Absolutely! We encourage our clients to suggest topics relevant to their business. We’ll work with you to create tailored content."
      />
      <FAQItem
        eventKey="3"
        header="Computer Science"
        text="Yes, all our content is optimized for SEO to improve your search engine ranking and drive traffic to your website."
      />
    </Accordion>
        </div>
      </div>
    </div>
    <br></br>
    <Container id="courses-section" style={{ marginTop: '100px' }}>
  <Row>
    <p className="text-blue-600" style={{ textAlign: 'center' }}>Popular Online Courses</p>
    <h1 id="row-3" style={{ textAlign: 'center', marginBottom: '20px' }}>Let's Browse All Categories</h1>
  </Row>
  <Row xs={1} md={2} lg={3} className="g-4 mt-5">
    {cardData.map((data, idx) => (
      <Col key={idx}>
        <a href={data.link} target="_blank" rel="noopener noreferrer" className="card-link">
          <Card className="hover-card fixed-card">
            <Card.Img variant="top" src={data.image} className="fixed-image" />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
    ))}
  </Row>
</Container>

    <br></br>
    <Container className="why-us-carousel text-center my-5">
      <h2 className="section-title" style={{paddingTop:'30px'}}>Why Us</h2>
      <Carousel style={{marginTop:'20px',paddingTop:'150px'}} interval={3000} controls indicators>
        {groupedItems.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around flex-wrap">
              {group.map((item, idx) => (
                <div key={idx} className="icon-carousel-item text-center">
                  <div className="icon" style={{ fontSize: '50px', color: '#00A2FF' }}>
                    {item.icon}
                  </div>
                  <h5 style={{paddingTop:'20px'}} className="mt-3">{item.title}</h5>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
    <br></br>
    <Container fluid style={{ backgroundColor: 'darkblue', color: 'white', paddingTop: '50px'}}>
      <Row>
        {/* Left Section with Quote */}
        <Col xxl={5} md={5}  className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div style={{ textAlign: 'center', maxWidth: '80%' }}>
            <h1 style={{ fontSize: '2rem', lineHeight: '1.4',textShadow:'5px 5px 10px blue',color:'white' }}>
              <span style={{ color: 'white', fontWeight: 'bold' }}>&ldquo;</span>
              Programmers are mostly “learn by doing” types. No amount of academic study or watching other people code can compare to breaking open an editor and start making mistakes.
            </h1>
            <br></br>
            <Button size="lg" style={{marginLeft:'1px',marginTop:'15px'}} gradientDuoTone="purpleToBlue">Learn more</Button>

          </div>
        </Col>

        {/* Right Section with Title and Testimonials */}
        <Col md={7} className="text-dark p-4 bg-white mt-5" style={{}} >
          <div className="text-center mb-4">
            <h2 className="p-4" style={{ fontWeight: 'bold', color: '#1A2238', paddingTop: '40px' }}>
              <span style={{ backgroundColor: '#FFEBF1', padding: '0 8px' }}>Best Feedback</span> From Our Clients
            </h2>
          </div>
          
          <Row>
            {/* Testimonial Card 1 */}
            <Col md={6} className="mb-4">
              <Card className="shadow-sm" style={{height:'400px', borderRadius: '10px',backgroundColor:'lightgrey',boxShadow: '20px 10px' }}>
                <Card.Body style={{boxShadow:'10px 10px grey'}}>
                  <Card.Text className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna eiusmod.
                  </Card.Text>
                  <div className="d-flex align-items-center" style={{marginTop:'150px'}}>
                    <Image
                      src="https://imgv3.fotor.com/images/ai-headshot-generator/indoor-headshot-of-a-man-in-dark-blue-business-shirt-created-by-Fotor-AI-professional-LinkedIn-photo-maker.jpg"
                      roundedCircle
                      width={100}
                      height={100}
                      className="me-3"
                    />
                    <div>
                      <strong>John Doe</strong>
                      <div className="text-muted">Client</div>
                      <div style={{ color: '#FFD700' }} aria-label="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Testimonial Card 2 */}
            <Col md={6} className="mb-4">
              <Card className="shadow-sm" style={{ height:'400px',borderRadius: '10px',backgroundColor:'lightgrey' }}>
                <Card.Body style={{boxShadow:'10px 10px grey'}}>
                  <Card.Text className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna eiusmod.
                  </Card.Text>
                  <div className="d-flex align-items-center " style={{marginTop:'150px'}}>
                    <Image
                      src="https://imgv3.fotor.com/images/ai-headshot-generator/headshot-of-a-female-with-long-brown-hair-in-the-dark-business-suit-generated-by-Fotor-AI-LinkedIn-photo-generator.jpg" // Replace with correct URL
                      roundedCircle
                      width={100}
                      height={100}
                      className="me-3"
                    />
                    <div>
                      <strong>Andrira Hens</strong>
                      <div className="text-muted">Client</div>
                      <div style={{ color: '#FFD700' }} aria-label="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <br></br>
     <footer className="bg-gray-800 text-white py-10 pb-5">
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
  )
}

export default cyber