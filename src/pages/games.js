import React, {useEffect, useState} from 'react';
import "../styles/games.css"

export const Games = () => {

  const [dataState,setDataState]  = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ec6d8a720cmsh255648ecb94406cp143831jsn88cf58e7b4db',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
   .then((response) => {return response.json()})
   .then((data) => {setDataState(data)})
   .catch((err) => console.error(err))
  },[])



    return(
      <div className="gamesPageContainer" >
        <h1>Pc Pros</h1>
      <div className="gamesContainer" id="games"> 
      {dataState.map((values, index) => {
        return (
          <div className="game" id="game" key={index}>
                <div className="gameCardNav">
                  <p className="gameCardTitle">{values.title}</p>
                  
                </div>
                <img src={values.thumbnail} alt="img"></img>
                <div className="genreAndPublisher">
                  <p className="genre">{values.genre}</p>
                  <p className="publisher">{values.publisher}</p>
                </div>
                <p className="gameDescription">{values.short_description}</p>
                <div className="moreBtn"><a /* className="gameCardBtn"*/ type="button" href={values.game_url} target="_blank" rel="noreferrer">More</a></div>
              </div>
        )
      })}
      
      </div>
      <p style={{"margin": "auto", "text": "white"}}>All Games Provided By RapidAPI free-to-play-games</p>
    </div>
    )
}
