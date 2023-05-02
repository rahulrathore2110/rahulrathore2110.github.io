import React from "react";
import "./about.css";
import ME from "../../assets/profile4.JPG";
import { FaAward } from "react-icons/fa";
import {FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experince</h5>
              <small>2160+ Hours Of Hands On Experince</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Teams</h5>
              <small>1+ Year Of Experience Working With Teams</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Major And Mini Projects</small>
            </article>
          </div>

          <p >
            A highly motivated and skilled Full Stack Developer with a passion for designing, building, and maintaining high-quality applications and websites. Proficient in JavaScript, Java, MySQL, and SpringBoot. Eager to learn new technologies and have proven ability to work collaboratively in a team environment, communicate effectively, and deliver projects on time.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
