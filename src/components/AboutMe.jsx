import selfie from '../images/selfie.png'
import SkillCard from './SkillCard'
import cppIcon from '../images/cpp.png'
import pythonIcon from '../images/python.png'
import jsIcon from '../images/js.png'
import reactIcon from '../images/react.png'
import '../styles/AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about'>
            <div className="section-header">
                <span className="section-title">/ about me</span>
            </div>
            <div className='info'>
                <div className='about-description'>
                    <p>I am currently pursuing a Bachelor of Science in Computer Science at UCLA. 
                        I enjoy developing my skills through personal projects and expanding my knowledge of software development. 
                        Outside the classroom, I compete in hackathons and enjoy teaching programming to others. 
                        In my free time, I play video games and play the bass and guitar.
                    </p>
                </div>
                <div className='about-image'>
                   <img src={selfie} alt="Andrea Asprer"/>
                </div>
            </div>
            <div className='about-skills'>
                <p>MY SKILLS</p>
                <div className='skills-display'>
                    <SkillCard img={cppIcon} description='C++ Icon' text='C++'/>
                    <SkillCard img={pythonIcon} description='Python Icon' text='PYTHON'/>
                    <SkillCard img={jsIcon} description='JavaScript Icon' text='JAVASCRIPT ES6+'/>
                    <SkillCard img={reactIcon} description='React Icon' text='REACT'/>
                </div>
            </div>
        </div>
        
    )
}

export default AboutMe