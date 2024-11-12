import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';
import images from './img/images';
import icons from './img/icons/icons';
import ProjectCard from './components/ProjectCard'



const projects = [
  {
    title: 'SANTA LUCIA CYKLAR WEBSITE',
    githubLink: 'https://github.com/esarandon/santa-lucia-cyklar',
    description: 'Santa Lucia Cyklar is a modern, user-friendly platform to browse and explore bikes from various categories. Built with a focus on clarity and ease of use, the website aims to enhance the user’s browsing experience with a visually appealing and responsive design. This website is designed to help visitors explore available bikes, view detailed descriptions, compare prices, and check availability, all within a clean and responsive interface.',    
    features: [
      { name: 'Dynamic Grid Layout', details: 'The site displays bikes in a dynamic grid, showcasing their images, descriptions, and other relevant information.' },
      { name: 'Sorting Options', details: 'Users can sort bikes by price and availability, making it easier to find bikes within a specific budget or check which ones are currently available.' },
      { name: 'Responsive Design', details: 'The website is optimized for mobile and desktop use, ensuring a seamless experience on any device.' },      
      // Add more features as objects
    ],        
    technologies: [
      { name: 'HTML', details: 'For the structure and layout of the website.' },
      { name: 'CSS / Tailwind CSS', details: 'FFor styling and creating a responsive, clean design.' },
      { name: 'JavaScript / React', details: 'To handle the dynamic elements, including sorting and filtering bikes.' },
    ],
    images: [
      { src: images.SantaLucia1, alt: 'Santa Lucia Cyklar' },
      { src: images.SantaLucia2, alt: 'Santa Lucia Cyklar' }
    ]
  },
  {
    title: 'MONEY TRACKING',
    githubLink: 'https://github.com/esarandon/MoneyTracker',
    description: 'Money Tracking is a console application developed in C# for tracking financial transactions. It allows users to add, edit, and delete both expenses and incomes, providing a calculation of total savings through a command-line interface. The application saves data to a file, ensuring that users can resume tracking where they left off.',    
    features: [
      { name: 'Tracking Expenses and Incomes', details: 'Enter, view, and manage both expense and income transactions.' },
      { name: 'Sorting and Filtering', details: 'Sort transactions by month, amount, or title, and filter by expenses or incomes.' },
      { name: 'Editing and Removing Transactions', details: 'Easily modify or delete transactions.' },
      { name: 'Data Persistence', details: 'Save and load transaction data to and from a file.' },
      { name: 'Intuitive Command-Line Interface', details: 'A text-based interface guides users through tracking their finances.' },      
      // Add more features as objects
    ],    
    solutions: 'https://www.sharecanvas.io/p/individual-project---money-tracking',
    technology: 'This project demonstrates my C# skills in object-oriented programming by modeling real-world financial tracking concepts, implementing sorting and filtering functionality, and creating a user-friendly, text-based interface.',
    images: [
      { src: images.Tracking1, alt: 'Money Tracking' },
      { src: images.Tracking2, alt: 'Money Tracking' }
    ]
  },
  {
    title: 'ZOEZI DESKTOP CLIENT',
    githubLink: 'https://github.com/esarandon/ZoeziApp',
    description: 'Zoezi Desktop Client is a simple desktop application built specifically for Korpen Malmö. It serves as a companion client for the Zoezi app, allowing users to easily manage match-related activities and stay updated on standings.',
    features: [
      { name: 'Upcoming Matches', details: 'View a list of upcoming games and match details.' },
      { name: 'Standings Table', details: 'Check the latest team standings at a glance.' },
      { name: 'Match Participation', details: 'Book or decline participation for upcoming matches.' },
      // Add more features as objects
    ],
    technology: 'Developed using Python: Tailored for a seamless experience on the GNOME desktop environment.',
    images: [
      { src: images.Zoezi1, alt: 'Zoezi App' },
      { src: images.Zoezi2, alt: 'Zoezi App' }
    ]
  },
  {
    title: 'READER - WEB SCRAPER',
    githubLink: 'https://github.com/esarandon/Reader',
    description: 'A simple web scraper built with Python for extracting content from webpages. This tool retrieves the title and main paragraphs from a specified URL and saves the extracted information to a text file for offline reading.',
    features: [
      { name: 'Content Extraction', details: 'Fetches the title and main body text (paragraphs) from a given webpage.' },
      { name: 'File Output', details: 'Saves the extracted content in a structured text file, making it easy to read later.' },
      { name: 'Ubuntu Compatibility', details: 'Developed and tested on Ubuntu, optimized for smooth operation in a Linux environment.' },
      // Add more features as objects
    ],
    technology: 'Developed using Python: Utilizes popular Python libraries (such as requests and BeautifulSoup) to handle web requests and HTML parsing',
    images: [
      { src: images.Reader1, alt: 'Reader - Web Scraper' },
      { src: images.Reader2, alt: 'Reader - Web Scraper' }
    ]
  },
  
];

function App() {
  return (    
    <Container fluid>      
      <Row>
        {/* Sidebar Section */}
        <Col xs={12} md={4} lg={3} className="sidebar">
          <Card className="mb-4 shadow rounded-0">          
            <Card.Img variant="top" key={0} src={images.me} className="profile-img" />
            <Card.Body className='card-body-sidebar'>              
                <h4>Hello World!</h4>
                <Card.Text>                
                  {/* About Me Text */}                  
                  With a decade of experience leading sustainability projects, I pursued my dream of becoming a software developer. 
                  I bring a strong foundation in backend technologies, particularly JavaScript, C#, and Python, with hands-on expertise in frameworks like ReactJS and Next.js. 
                  My experience in IoT and embedded systems, paired with my proficiency in protocols such as MQTT and secure communication via SSH, equips me with a unique perspective for developing robust, efficient, and secure applications. 
                  I am skilled in managing databases like Postgres with Prisma and in building tailored REST APIs for IoT devices. 
                  Additionally, my technical background includes C++ for embedded systems, data analysis with Jupyter Notebooks, and experience integrating various hardware components. 
                  I am eager to apply my technical skills, curiosity, and commitment to quality in a new role that challenges me and allows me to contribute meaningfully to the team’s success as I continue to grow as a developer. 
                </Card.Text>
              {/* Contact Information */}              
              <div className="contact-info contact-info-custom">                
                <a className="fa fa-linkedin fa-2x" href="https://www.linkedin.com/in/esarandon"  aria-label="LinkedIn profile"></a>                        
                <a className="fa fa-github fa-2x" href="https://github.com/esarandon" aria-label="GitHub profile"></a>
                <a className="fa fa-envelope fa-2x" href="mailto:esarandon@gmail.com"  aria-label="Send email to esarandon@gmail.com"></a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
         {/* Main Content Area */}
         <Col xs={12} md={8} lg={9} className="main-content" >
            <Card.Body className='section-body'>            
                <h1>ESTANISLAO SARANDÓN'S PORTFOLIO</h1>
                <p>Some of my personal projects</p>
            </Card.Body>          

            {/* Project Cards */}
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            
        {/* Other Components */}        
          <Card.Body className="section-body"> 
            <h1 style={{ marginTop: '50px' }}>TECHNOLOGIES &amp; TOOLS</h1>
            <div className="icon-container" align="left">
              <img src={icons.python} alt="python" height="50" loading="lazy"/> 
              <img src={icons.c} alt="c" height="50" loading="lazy"/> 
              <img src={icons.cpp} alt="cplusplus" height="50" loading="lazy"/> 
              <img src={icons.cSharp} alt="csharp" height="50" loading="lazy"/> 
              <img src={icons.javascript} alt="javascript" height="50" loading="lazy"/> 
              <img src={icons.html} alt="html5" height="50" loading="lazy"/> 
              <img src={icons.css} alt="css3" height="50" loading="lazy"/>
            </div> 
            <div className='icon-container' align="left">
              <img src={icons.amazon} alt="aws" height="50" loading="lazy"/> 
              <img src={icons.azure} alt="azure" height="70" loading="lazy"/> 
              <img src={icons.postgresql} alt="postgresql" height="50" loading="lazy"/> 
              <img src={icons.supabase} alt="supabase" height="40" loading="lazy"/> 
              <img src={icons.flask} alt="flask" height="50" loading="lazy"/> 
              <img src={icons.dotnet} alt="dotnet" height="40" loading="lazy"/> 
              <img src={icons.next} alt="next" height="40" loading="lazy"/> 
              <img src={icons.react} alt="react" height="50" loading="lazy"/> 
              <img src={icons.docker} alt="docker" height="50" loading="lazy"/> 
              <img src={icons.postman} alt="postman" height="40" loading="lazy"/> 
              <img src={icons.git} alt="git" height="40" loading="lazy"/> 
              <img src={icons.github} alt="github" height="50" loading="lazy"/> 
              <img src={icons.ubuntu} alt="ubuntu" height="45" loading="lazy"/> 
              <img src={icons.arduino} alt="arduino" height="40" loading="lazy"/> 
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
