import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";
const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p> Responsive and rich UI Web Design </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Front-end Architecture & Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>React JS Development </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>HTML5/ CSS Development </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Javascript Development </p>
            </li>
          </ul>
        </article>

        {/* ======== END OF Frontend ======== */}

        <article className="service">
          <div className="service_head">
            <h3>Backend</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Web Applications </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>API Development and Integration </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>SpringBoot web applicatios </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Application Admin Backend </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Data Storage Backend Apps </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Real time web applicatios </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Organize the system logic </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Debug testing and troubleshoot apps </p>
            </li>
          </ul>
        </article>

        {/* =======END OF Backend====== */}

        <article className="service">
          <div className="service_head">
            <h3>Others</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Canva template designs </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Logo Designs and Brandings </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Professional cards and boucher designs </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Microsoft Office automation </p>
            </li>
          </ul>
        </article>

        {/* =======END OF Others====== */}
      </div>
    </section>
  );
};

export default Service;
