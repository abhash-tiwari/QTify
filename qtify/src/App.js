
import { Outlet } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from './api/api';
import { useEffect, useState } from 'react';

function App() {

  const [searchData, setSearchData] = useState();
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevdata) => {
        return {...prevdata, [key]: data}
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
    generateData("songs", fetchSongs)

  },[])
  const {topAlbums = [], newAlbums = [], songs = []} = data;
  return (
    <div className="App">
      <Navbar/>
      <Outlet context={{data: {topAlbums,newAlbums,songs}}} />
    </div>
  );
}

export default App;
