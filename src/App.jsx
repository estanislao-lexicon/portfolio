import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';
import images from './img/images';
import ProjectCard from './components/ProjectCard'



const projects = [
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
                  I bring a strong foundation in backend technologies, particularly JavaScript, C#, and Python, with hands-on expertise in frameworks like Nest.js and Next.js. 
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
         <Col xs={12} md={8} lg={9} className="main-content" style={{ marginTop: '20px' }}>
            <Card.Body className='section-body-title'>            
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
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" loading="lazy"/>
            </div> 
            <div className='icon-container' align="left">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40" loading="lazy"/> 
              <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" loading="lazy"/> 
              <img src="https://logowik.com/content/uploads/images/supabase-icon9119.logowik.com.webp" alt="supabase" width="40" height="40" loading="lazy"/> 
              <img src="https://www.pngfind.com/pngs/m/104-1044449_python-logo-clipart-drawing-flask-python-hd-png.png" alt="flask" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" loading="lazy"/> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" loading="lazy"/> 
              <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" loading="lazy"/> 
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" loading="lazy"/> 
              <img src="https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg" alt="ubuntu" width="40" height="40" loading="lazy"/> 
              <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40" loading="lazy"/> 
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
