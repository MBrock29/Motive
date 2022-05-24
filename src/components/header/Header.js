import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.container}>
      <a href="https://www.spacex.com/" target="_blank">
        <img src="./spacex.jpg" className={s.image} alt="The SpaceX logo"></img>
      </a>
    </div>
  );
};

export default Header;
