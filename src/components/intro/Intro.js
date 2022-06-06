import './intro.css';
import Me from '../../img/myImage.png';
import Navbar from '../navbar/Navbar';

const Intro = () => {
  return (
    <>
      <Navbar />
      <div className="i" id="home">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Liana</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content Creator</div>
              </div>
            </div>
            <p className="i-desc">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </>
  );
};

export default Intro;
