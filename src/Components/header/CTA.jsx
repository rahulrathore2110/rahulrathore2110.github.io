import React from "react";
import CV from "../../assets/fw19_0322_Rahul_Rathore_Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        download
        onClick={()=>{window.open(
          "https://drive.google.com/file/d/1RxuYQCSzhPSjtLeMdwnr_0ewbKYCZbWo/view?usp=share_link"
        )}}
        className="btn"
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
