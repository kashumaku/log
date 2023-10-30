import Menu from "./components/Menu";
import "./home.css"
import camerawoman from "./images/camerawoman.jfif"
import bird from "./images/bird.jfif"
import flower from "./images/flower.jfif"
import chameleon from "./images/chameleon.jfif"
import selfie from "./images/selfie.jfif"
import forhead from "./images/forehead.jfif"
const Home = () => {
  return (
    <div className="home">
      <div className="leftContainer">
        <Menu />

      </div>
      <div className="rightContainer">
        <div className="c-left">
          <div className="l-card"><img src={camerawoman} alt="" /></div>
          <div className="l-card"><img src={bird} alt="" /></div>
          <div className="l-card"><img src={camerawoman} alt="" /></div>
        </div>
        <div className="c-center">
          <div className="c-card"><img src={selfie} alt="" /></div>
          <div className="c-card"><img src={forhead} alt="" /></div>
          <div className="c-card"><img src={camerawoman} alt="" /></div>
        </div>
        <div className="c-right">
          <div className="r-card"><img src={chameleon} alt="" /></div>
          <div className="r-card"><img src={flower} alt="" /></div>
          <div className="r-card"><img src={camerawoman} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
