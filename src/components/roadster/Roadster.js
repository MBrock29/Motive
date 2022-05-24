import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import s from "./Roadster.module.scss";

const Roadster = () => {
  const { roadster } = useContext(DataContext);
  const launchDate = new Date(roadster.launch_date_utc).toLocaleDateString();
  return (
    <div className={s.container}>
      <div className={s.card}>
        <h2>{roadster.name}</h2>
        <div className={s.dataContainer}>
          <div>
            <p>
              <span>Launched</span>
              <br /> {launchDate}
            </p>
            <p>
              <span>Speed (mph)</span>
              <br /> {roadster.speed_mph.toFixed(0)}
            </p>
            <p>
              <span>Launch Mass (kg)</span>
              <br /> {roadster.launch_mass_kg}
            </p>
          </div>
          <div>
            <p>
              <span>Longitude</span>
              <br /> {roadster.longitude.toFixed(4)}
            </p>
            <p>
              <span>Distance from Mars (miles)</span>
              <br /> {roadster.mars_distance_mi.toFixed(0)}
            </p>
            <p>
              <span>Distance from Earth (miles)</span>
              <br /> {roadster.earth_distance_mi.toFixed(0)}
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/wbSwFU6tY1c"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="SpaceX video"
            width="100%"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadster;
