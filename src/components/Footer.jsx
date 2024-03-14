import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.facebook.com/profile.php?id=100081088095350"><FacebookIcon/></a>

                <a href="mailto:pichet.lekpet@gmail.com"><EmailIcon/></a>

                <a href="https://www.linkedin.com/in/pichet-lekpet-377726285/"><LinkedInIcon/></a>

                <a href="https://github.com/MrRKC"><GitHubIcon/></a>
            </div>
            <p>&copy; 2023 Pichet Lekpet</p>
        </div>
    )
}

export default Footer
