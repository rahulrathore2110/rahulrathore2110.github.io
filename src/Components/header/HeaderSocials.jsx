import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
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
  );
};

export default HeaderSocials;
