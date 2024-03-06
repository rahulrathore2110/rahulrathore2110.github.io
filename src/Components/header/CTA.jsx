import React from "react";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1RxuYQCSzhPSjtLeMdwnr_0ewbKYCZbWo/view?usp=share_link"
        className="btn"
        target="blank"
        onClick={() =>
          `https://drive.google.com/file/d/1RxuYQCSzhPSjtLeMdwnr_0ewbKYCZbWo/view?usp=share_link`
        }
        download
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
