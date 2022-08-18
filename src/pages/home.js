import React from 'react';
import "../styles/home.css"


const Home = () => {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec6d8a720cmsh255648ecb94406cp143831jsn88cf58e7b4db',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err))

  return (
    <div className="background-container">
      <div className="headerText">
        <h3>ALL OF THE HOTTEST GAMES</h3>
      </div>
      <div className="previewGamesBar">
        <h5 id="games"></h5>
      </div>

    </div>
  )
}
export default Home;
