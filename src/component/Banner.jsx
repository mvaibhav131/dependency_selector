import React from 'react';
import './Banner.css'; // Create a CSS file for styling

function Banner() {
  return (
    <div className="banner-container">
      <div className="left">
        <p className="name">Vaibhav</p><br /><br/>
        <p className="surname">More</p>
      </div>
      <div className="right">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/mvaibhav131" target="_blank" rel="noopener noreferrer">
            <img src="https://img.freepik.com/premium-vector/linkedin-logo_578229-227.jpg" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/mvaibhav131" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rirmAEVpwdaS_sWUUWPu5lSi3KGnJM4jDBmzCPvVqA&s" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://github.com/mvaibhav131" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lDZnHhHEZiWpfc0CkNI5tZM8wOPRzj9oO5yQKNJ-hA&s" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/mvaibhav131" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.jpg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://gitlab.com/mvaibhav131" target="_blank" rel="noopener noreferrer">
            <img src="https://w7.pngwing.com/pngs/535/202/png-transparent-gitlab-logo-version-control-company-react-others-miscellaneous-angle-company-thumbnail.png" alt="GitLab" className="social-icon" />
          </a>
          <a href="https://twitter.com/mvaibhav131" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" className="social-icon" />
          </a>
        </div>
        <p className="username">@mvaibhav131</p>
        <p className="title">Coding for Everyone and Everywhere...</p>
      </div>
    </div>
  );
}

export default Banner;
