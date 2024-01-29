import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";



const Section = ({ title, data, type }) => {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = () => {
        // setCarouselToggle(!carouselToggle);
        setCarouselToggle((prevState) => !prevState)
      };
    return (
      <div>
         <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
                {data.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
                ))}
            </div>
          ) : (
            <Carousel data={data} renderCardComponent={(data) => <Card data={data} type={type}/>}/>
            // <div>Caraousel</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;