import { ReactTyped } from "react-typed";
import '../styles/Intro.css';

const Intro = () => {
  return (
    <div className="Intro">
      <ReactTyped className="reactTyped"
        strings={["hi, <b>andrea</b> here"]}
        typeSpeed={70}
        style={{
          color: 'var(--white)',
          fontSize: '4rem',
        }}
        showCursor={false}
        />

      <h2>I build things sometimes</h2>
      <h3>I'm an aspiring software engineer from Los Angeles, California. I am currently a student at UCLA, studying Computer Science</h3>
    </div>
  );
};

export default Intro;
