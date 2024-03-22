import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <small>
        &copy; {currentYear} Copyright to Trekbucket, All Rights Reserverd
      </small>
      <small>
        Version <b>1.5</b>
      </small>
    </footer>
  );
};

export default Footer;
