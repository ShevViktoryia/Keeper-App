import React from "react";

const Footer = () => {
  const curYear = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {curYear}</p>
    </footer>
  );
};

export default Footer;
