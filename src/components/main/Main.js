import React from "react";
import Roadster from "../roadster/Roadster";
import Ships from "../ships/Ships";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <div className={s.container}>
      <Roadster />
      <Ships />
    </div>
  );
};

export default Main;
