import React from "react";
import "./projects.css";
import bluefly from "../../assets/bluefly.png";
import bus from "../../assets/bus.png";
import engagebay from "../../assets/engagebay.png";
import food from "../../assets/food.png";
import redbus from "../../assets/redbus.png";
import sbi from "../../assets/sbi1.png";
import vichar from "../../assets/vichar.png";
import tasky from "../../assets/tasky.png";
const Projects = () => {

  const data = [
    {
      id: 1,
      image: vichar,
      title: "Vichar-App",
      description:
        "Vichar App is a blog application where users can post their thoughts with some content and picture attached to posts and also comment on posts.",
      tech: "Java, Spring-boot, AWS (Elastic Beanstalk), Hibernate, MySQL, Swagger-ui, Spring-MVC, Maven, Postman, Spring-JPA, Intellij-idea.",
      github: "https://github.com/rahulrathore2110/Vichar-App",
      demo: "http://vichar-env-2.eba-kyekgnmj.ap-south-1.elasticbeanstalk.com/swagger-ui/index.html#/",
    },
    {
      id: 2,
      image: tasky,
      title: "Tasky-App",
      description:
        "Online Bus Adda is a bus reservation app where you can book a bus for each and every location as per your needs. also check buses details and admin can add, update bus details.",
      tech: "Java, Spring-boot, AWS (Elastic Beanstalk), Hibernate, MySQL, Swagger-ui, Spring-MVC, Maven, Postman, Spring-JPA, Intellij-idea.",
      github: "https://github.com/rahulrathore2110/Tasky-App",
      demo: "http://tasky-app-env.eba-pzihaw2t.ap-south-1.elasticbeanstalk.com/swagger-ui/index.html",
    },
    {
      id: 3,
      image: bus,
      title: "Online Bus Adda",
      description:
        "Online Bus Adda is a bus reservation app where you can book a bus for each and every location as per your needs. also check buses details and admin can add, update bus details.",
      tech: "Java, Spring-boot, AWS (Elastic Beanstalk), Hibernate, MySQL, Swagger-ui, Spring-MVC, Maven, Postman, Spring-JPA, Intellij-idea.",
      github: "https://github.com/rahulrathore2110/Online-bus-adda",
      demo: "http://onlinebusadda-env.eba-22hsm2bq.ap-south-1.elasticbeanstalk.com/swagger-ui/index.html",
    },
    {
      id: 4,
      image: food,
      title: "Foodland",
      description:
        "About Foodland is an online food delivery app. that provide an URI for connecting with the backend. it is work with two user type one is Customer and second is restaurent.",
      tech: "Tech-Stack : Java, Spring, Spring-boot, Hibernate, MySQL, Swagger-ui, Spring-mvc, Spring-JPA, Itellij-idea & Dao-interface .",
      github: "https://github.com/rahulrathore2110/Foodland-App",
      demo: "https://drive.google.com/file/d/1l5c5y2SIhFRa1zk96mA0-0z9-XdaRuKE/view",
    },
    {
      id: 5,
      image: sbi,
      title: "Online Banking System",
      description:
        "Online Banking System is an clone of SBI bank here to from some operation like add create customer account, create admin account, login customer and admin, deposit and withdraw from account, see accounts transection, update account delete account, search account etc",
      tech: "Tech-Stack : Java, JDBC, MySQL, Java Swing Packegs, Itellij-idea & Dao-interface .",
      github: "https://github.com/rahulrathore2110/Online-Banking-System",
      demo: "https://drive.google.com/file/d/1TM6IXBjtw2TsfjMddGqQ7ofg5QbRJ3iP/view",
    },
    {
      id: 6,
      image: redbus,
      title: "Redbus Clone",
      description:
        "Redbus is online bus ticket booking website where you can book a ticket from one city to another city with real time bus timings and in this website. there is so many features like select bus location,bus seats, payment method etc as per your requirment. they have carpool features and flight tickets booking features",
      tech: "Tech-Stack : HTML, CSS, JavaScript, VSCode, GitHub, JavaScript Plugins.",
      github: "https://github.com/rahulrathore2110/redbus-website",
      demo: "https://phenomenal-kleicha-acfce4.netlify.app/busdata.html",
    },
    {
      id: 7,
      image: engagebay,
      title: "Engage-bay Clone",
      description:
        "Engagebay is an CRM service provider website. it is offer sales, marketing & customer support service. you can take diffrent services like Marketing Automation, Helpdesk Software, Live Chat Software etc. and increase you sale with our softwares.",
      tech: "Tech-Stack : HTML, CSS, JavaScript, VSCode, GitHub, JavaScript Plugins.",
      github: "https://github.com/rahulrathore2110/Engagebay-Clone",
      demo: "https://engagebay-clone.netlify.app/",
    },
    {
      id: 8,
      image: bluefly,
      title: "Bluefly Clone",
      description:
        "Bluefly is online bus ticket booking website where you can book a ticket from one city to another city with real time bus timings and in this website. there is so many features like select bus location,bus seats, payment method etc as per your requirment. they have carpool features and flight tickets booking features",
      tech: "Tech-Stack : HTML, CSS, JavaScript, VSCode, GitHub, JavaScript Plugins.",
      github: "https://github.com/rahulrathore2110/Bluefly-Clone",
      demo: "https://bluflyclonne.netlify.app/",
    },
  ];
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title,description,tech, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="Project-Thumbnail" />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <h5>{tech}</h5>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        
      </div>
    </section>
  );
};

export default Projects;
