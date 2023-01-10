import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div ClassName="social">
        <a href="https://github.com/keniakfa">
          <FaGithub color="#fff" size="35" />
        </a>
        <a href="https://github.com/Henrique-Portela">
          <FaGithub color="#fff" size="35" />
        </a>
      </div>
      <p className="copyright">Made by Kênia Araújo and Henrique Portela</p>
    </footer>
  );
};

export default Footer;
