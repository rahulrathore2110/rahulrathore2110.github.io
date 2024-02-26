import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experince_container">
        <div className="experince_frontend">
          <h3>Frontend Development</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>TanStack Table</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experince_backend">
          <h3>Backend Development</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>SpringBoot</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Hibernate JPA</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>JDBC</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Spring Security</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Spring-MVC</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Maven</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experince_tools">
          <h3>Development Tools</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Github</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Intellij-Idea</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
