import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import s from "./Ships.module.scss";

const Ships = () => {
  const { ships } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState(ships);

  const filterData = (searchTerm) => {
    const results = ships.filter((event) =>
      event.ship_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(results);
  };
  return (
    <div className={s.container}>
      <h2 className={s.header}>Ships</h2>
      <div className={s.inputContainer}>
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => filterData(e.target.value)}
        ></input>
      </div>
      <div className={s.cards}>
        {filteredData.map((data) => (
          <div className={s.card}>
            <h4>{data.ship_name}</h4>
            <p>{data.ship_type}</p>
            <p>{data.home_port}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ships;
