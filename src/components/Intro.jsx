import { ReactTyped } from "react-typed";
import ContactButton from "./ContactButton";
import '../styles/Intro.css';

const Intro = () => {
  return (
    <div className="Intro">
      <ReactTyped className="reactTyped"
        strings={["hi, <b>andrea</b> here"]}
        typeSpeed={70}
        style={{
          color: 'var(--white)',
          fontSize: '4.5rem',
        }}
        showCursor={false}
      />

      <h2>I build things sometimes</h2>
      <div className="description">
        <p>I'm an aspiring software engineer from Los Angeles, California. I am currently a student at UCLA, studying Computer Science. I have a passion for all things technology from fullstack development to human-computer interactions.</p>
      </div>
      <ContactButton />
    </div>
  );
};

export default Intro;
