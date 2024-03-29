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
            <p>HOME PAGE<br></br><span className="span">SPARK IGNITED</span></p>
            <p className="para">Welcome to Team Spark Ignited's Home Page! Discover innovation in motion with our radical<br></br> electric two-wheeler. 
                Join us on the journey towards a greener and more sustainable future. Explore our<br></br> vision, meet the team, 
                and experience the future of urban mobility.</p>
            <p>
                <img src={bikeImg} alt="bike.png" className="backbike"/>
                <img src={bikeImg} alt="bike.png" className="bike"/>
                <img src={bikeImg} alt="bike.png" className="backbike"/>
            </p>
        </div>

        
        <div className="about" id="about">
            <p className="text"><h2 className="underline">About us</h2>Team Spark Ignited is a dynamic group of ten talented students who have achieved a remarkable feat by creating an innovative electric two-wheeler. We showcase a blend of creativity, engineering excellence, and a commitment to sustainable transportation. Our remarkable team has harnessed collective expertise to develop a cutting-edge solution that promises to revolutionize urban mobility.</p>
            
            <img src={teamImg} alt="teamImg" className="team" />
        </div>
<br></br><br></br><br></br>
        <div className="vision" id="vision"> 
        <p className="text-container"><h2 className="underline">Our Vision</h2>The vision of "Team Spark Ignited" is to be a dynamic, forward-thinking, and innovative team that consistently sparks positive change and inspires breakthroughs in our chosen field. We aim 
                                    to ignite creativity, enthusiasm, and determination in all our endeavors, bringing fresh perspectives and solutions to the forefront.
                                     We aspire to be recognized as a team that consistently rises to meet challenges head-on, setting a shining example of collaboration, excellence, 
                                     and perseverance. Our vision is to leave a lasting impact on our industry, community, and the world at large, driven by the spark of our shared passion for 
                                     innovation and progress.</p>
        
        <VideoComponent />
        </div>
<br></br>
        <div className="comparison" id="comparison">
            {/* <p className="text container"><h2 className="underline">Comparative Analysis of Electric Two-Wheelers and Engine-Driven Two-Wheelers</h2> </p> */}
            <h3>Comparative Analysis of Electric Two-Wheelers and Engine-Driven Two-Wheelers</h3>
            <img src={Compare} alt="comparisionImg" className="comareImg"></img>
        </div>
<br></br>
        <div className="teamdetails"> 
           <ImageComponent />
        </div>
        <footer>
        
        <div class="footer-item" style={{marginBottom:'15px'}}><img src='https://codemaster00001.github.io/Spark-Ignited/2.png' alt='logo' style={{width:'15%', marginBottom:'5px'}}/><br></br>INNOVATE, INSPIRE, IGNITE</div>
        <br></br>
            <div class="footer-content" id="contact">
                <div class="footer-item">FOLLOW US<br></br>
                        <div className="social-icons">
                        <a href="#" className="social-icon"><img src="https://e7.pngegg.com/pngimages/953/528/png-clipart-instagram-icon-logo-desktop-computer-icons-instagram-miscellaneous-text.png" alt="Instagram" /></a>
                        <a href="#" className="social-icon"><img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" /></a>
                        <a href="#" className="social-icon"><img src="data:image/jpeg;base64,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" alt="Twitter" /></a>
                       </div>
                </div>
                <div class="footer-item">CALL US<br></br>
                <a href="tel:6265958565" class="linktext"> 6265958565</a> <br></br> <a href="tel:9424038752" class="linktext"> 9424038752</a>
                </div>
                <div class="footer-item">MAIL US<br></br>
                 <a href="mailto:sparkignited14@gmail.com" class="linktext">sparkignited14@gmail.com</a>
                </div>
            </div>
            <div className="copyright">
                <p className="innercopy">Copyright © Design By Spark-Ignited Tech Team</p>
            </div>
        </footer>

       
        
       
       
        </>
    );
};

export default Slide 


// <footer className="footer" id="Contact">
// <div>Contact Information:</div>
// <p>Email: <a href="mailto:sparkignited14@gmail.com" class="text">sparkignited14@gmail.com</a></p>
// <p>Phone:<a href="tel:6265958565" class="linktext"> 6265958565</a> OR <a href="tel:9424038752" class="text"> 9424038752</a></p>
// <p>Instagram: <a href="https://www.instagram.com/team_sparkignited/?utm_source=ig_web_button_share_sheet&amp;igshid=ODE2OTA4Y2Y1MQ==" class="text">@team_sparkignited</a></p>
// </footer>