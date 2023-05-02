import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer_logo">
        Rahul
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/rahul-rathore-075a831a0/"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/rahulrathore2110" target="blank">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
          <MdOutlineAlternateEmail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
