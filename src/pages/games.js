import React from 'react';
import "../styles/games.css"

export const Games = () => {
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': 'ec6d8a720cmsh255648ecb94406cp143831jsn88cf58e7b4db',
  		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  	}
  };

  fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
  .then((response) => {return response.json()})
  .then((data) => {
    let dataState = "";
    data.map((values) => {
      dataState += `<div className="game" id="game">
                <div className="gameCardNav">
                  <p className="gameCardTitle">${values.title}</p>
                  <button className="gameCardBtn" type="button" onClick=${values.game_url}>More</button>
                </div>
                <img src="${values.thumbnail}" alt="img"></img>
                <div className="genreAndPublisher">
                  <p className="genre">${values.genre}</p>
                  <p className="publisher">${values.publisher}</p>
                </div>
                <p className="gameDescription">${values.short_description}</p>
              </div>`
    })
    document.getElementById('games').innerHTML = dataState;
  })
  .catch((err) => console.error(err))
    return(
      <div className="gamesPageContainer">
        <h1>Pc Pros</h1>
      <div className="gamesContainer" id="games">

      </div>
    </div>
    )
}
