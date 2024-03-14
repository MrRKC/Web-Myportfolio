import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoJs from '../assets/logo-javascript-480.png';
import LogoHtml from '../assets/logo-html-480.png';
import LogoCss from '../assets/logo-css-480.png';
import LogoReact from '../assets/logo-react-480.png';
import '../styles/Home.css'
function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My name is Pichet Lekpet</h2>
                <div className="prompt">
                    <p>Fontend Developer</p>
                    <FacebookIcon/>
                    <EmailIcon/>
                    <LinkedInIcon/>
                    <GitHubIcon/>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <span>
                            <img src={LogoJs} alt="" />
                            <img src={LogoHtml} alt="" />
                            <img src={LogoCss} alt="" />
                            <img src={LogoReact} alt="" />
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home


