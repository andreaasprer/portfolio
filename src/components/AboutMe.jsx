import selfie from '../images/selfie.png'
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
            </div>
        </div>
        
    )
}

export default AboutMe