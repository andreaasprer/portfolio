import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/NavBar.css';
import HamburgerMenu from './HamburgerMenu';

const NavBar = () => {




    return (
        <Navbar fixed="top" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#home">Andrea Asprer</Navbar.Brand>
            <Nav className='ml-auto'>
              <Nav.Link href="mailto:asprer.andreaa@gmail.com">
                <EmailIcon></EmailIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/andreaasprer" target="_blank">
                <GitHubIcon></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/andrea-asprer-366444325/" target="_blank">
                <LinkedInIcon></LinkedInIcon>
              </Nav.Link>
              <HamburgerMenu /> 
            </Nav>
          </Container>
        </Navbar>
      );
}

export default NavBar;