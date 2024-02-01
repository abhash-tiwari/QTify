import React from "react";
import Hero from "../../Components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../../Components/Section/Section";
import styles from "./HomePage.module.css"
import { fetchFilters } from "../../api/api";


function HomePage(){
    const {data} = useOutletContext()
    const {topAlbums, newAlbums, songs} = data;
    return (
        <div>
            <Hero />
            <div className={styles.wrapper}>
            <Section type='album' title='Top Albums' data={topAlbums}  />
            <Section type='album' title='New Albums' data={newAlbums}  />
            <Section type='song' title='Songs' data={songs} filterSource={fetchFilters} />
            </div>
        </div>
    )
}
export default HomePage;