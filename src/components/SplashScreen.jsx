import React from "react";
import { useSpring, animated , config} from 'react-spring';


function SplashScreen() {

  const props = useSpring({to : {opacity: 1}, from: {opacity: 0},config: {duration:1800}})
  return (
  <div className="splashscr">
    <animated.div style={props}>
        <img src="https://static.mygov.in/rest/s3fs-public/mygov_14441947251286205.jpg" alt="" style={{width:"100%", height:"auto"}}/>
    </animated.div>
  </div>
  
  );
};

export default SplashScreen;
