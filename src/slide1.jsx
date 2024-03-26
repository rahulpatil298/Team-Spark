import VideoComponent from "./videos"
import ImageComponent from "./images";
import React from 'react';
import bikeImg from './image/bike.png';
import teamImg from './image/team-photo.jpg'
import './slide1.css'
import Compare from './image/compare1.jpeg'

function Slide() {
    return(
        <>
        <div className="home" id="home">
            <img src={bikeImg} alt="bike.png" className="bike"/>
            <p className="para">Welcome to Team Spark Ignited's Home Page!<br></br> Discover innovation in motion with our <br></br>radical electric two-wheeler. 
                Join us on the journey <br></br>towards a greener and more sustainable future. Explore our vision, <br></br>meet the team, 
                and experience the future of urban mobility.</p>
        </div>

        
        <div className="about" id="about">
            <p><ul className="underline">About us</ul><br></br>Team Spark Ignited is a dynamic group of ten talented students who have achieved <br></br> a remarkable feat by creating an innovative electric two-wheeler. We showcase a blend of<br></br> creativity, engineering excellence, and a commitment to sustainable<br></br> transportation. Our remarkable team has harnessed collective expertise <br></br>to develop a cutting-edge solution that promises to revolutionize urban mobility.</p>
            
            <img src={teamImg} alt="teamImg" className="team" />
        </div>
<hr></hr>
        <div className="vision" id="vision"> 
        <p><ul className="underline">Our Vision</ul><br></br>The vision of "Team Spark Ignited" is to be a<br></br> dynamic, forward-thinking, and innovative team that consistently<br></br> sparks positive change and inspires breakthroughs in our chosen field. We<br></br> aim to ignite creativity, enthusiasm, and<br></br> determination in all our endeavors, <br></br>bringing fresh perspectives and solutions to<br></br> the forefront. We aspire to be recognized as a team that consistently <br></br>rises to meet challenges head-on, setting <br></br>a shining example of collaboration, excellence, and <br></br>perseverance. Our vision is to <br></br>leave a lasting impact on our industry, community, and the world <br></br>at large, driven by the spark of our shared passion <br></br>for innovation and progress.</p>
        <VideoComponent />
        </div>
<hr></hr>
        <div className="comparison" id="comparison">
            <u>Comparison</u>
            <h3>Comparative Analysis of Electric Two-Wheelers and Engine-Driven Two-Wheelers</h3>
            <img src={Compare} alt="comparisionImg" className="comareImg"></img>
        </div>
<hr></hr>
        <ImageComponent />
        <footer className="contact" id="Contact">
            <div>Contact Information:</div>
            <p>Email: <a href="mailto:sparkignited14@gmail.com" class="text">sparkignited14@gmail.com</a></p>
            <p>Phone:<a href="tel:6265958565" class="text"> tel:6265958565</a> OR <a href="tel:9424038752" class="text">tel:9424038752</a></p>
            <p>Instagram: <a href="https://www.instagram.com/team_sparkignited/?utm_source=ig_web_button_share_sheet&amp;igshid=ODE2OTA4Y2Y1MQ==" class="text">@team_sparkignited</a></p>
        </footer>
        
       
       
        </>
    );
};

export default Slide 

{/* <footer>
            <div id="contact">
                <h1>Contact Information:</h1>
            </div>
            <div class="call"></div>
            <p class="text">Email:<a href="mailto:sparkignited14@gmail.com" style="color: cadetblue;"><img src="mail.webp" alt="mail me" class="image"></img></a></p>
            <p class="text">Phone:<a href="tel:6265958565" style="color: cadetblue;"><img src="call.webp" alt="Call me for help" class="image"></img></a> OR <a href="tel:9424038752" style="color: cadetblue;"><img src="call.webp" alt="call me" class="image"></img></a></p>
            <p class="text">Instagram: <a href="https://www.instagram.com/team_sparkignited/?utm_source=ig_web_button_share_sheet&amp;igshid=ODE2OTA4Y2Y1MQ==" style="color: cadetblue;"><img src="instagram.webp" alt="team_sparkignited" class="image"></img></a></p>
            
        </footer> */}