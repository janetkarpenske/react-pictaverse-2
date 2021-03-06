import React from 'react';

function Homepage () {
  return (
    <React.Fragment>
        <div className="mainHeader heroText">
          <div className="center-align">
            <h1 className="title">picta<span className="green">v</span>erse</h1>
            <h3 className="subHead">The photography-driven travel guide.</h3>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h6>Janet M .Karpenske</h6>
          </div>
        </div>

      <div className="about-me-bg center-align">
        <div className="about-me-txt">
          <h2 id="aboutHead">what is pictaverse?</h2>
          <ul>
            <li><a href="https://github.com/janetkarpenske">github</a></li>
            <li><a href="https://www.linkedin.com/in/janet-karpenske/">linkedin</a></li>
            <li><a href="https://drive.google.com/file/d/1C4CIqY169Ey4WgC_ySFwSqbJhshMLXyT/view?usp=sharing">resume</a></li>
          </ul>
          <h4 id="aboutPara">Picatverse is a social-media-site-meets-travel-log. In our day and age the world is at our fingertips when it comes to opportunities for travel and adventure, and Pictaverse seeks to allow users to share those experiences with each other. Sign up for a free account today to be able to share the moments captured on your travels with others. Tag locations, share with friends, add descriptions of your experiences, and most importantly, upload your photos. </h4>
          <hr/>
          <br/>
        </div>
    </div>
    </React.Fragment>
  );
}

export default Homepage;