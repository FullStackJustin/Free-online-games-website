import React from 'react';
import "../styles/games.css"

export function Games(){
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec6d8a720cmsh255648ecb94406cp143831jsn88cf58e7b4db',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
  };

  fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	 .then(response => response.json())
	  .then(response => console.log(response))
	   .catch(err => console.error(err));

    return(
      <div className="gamesContainer">
        <div className="game" id="">
        <h2>Game Title</h2>
        <p>here we go</p>
        </div>
      </div>
    )
}
