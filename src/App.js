import React from 'react';
import './App.css';
import bookCover from './bookCover.jpg';
import previous from './previous.png';
import play from './play.png';
import pause from './pause.png';
import next from './next.png';

function App() {
  return (
    <div className="App">
      <div className="playlistName">PLAYLIST NAME</div>
      <div className="image">
          <img src={bookCover}/>
      </div>
      <div className="bookTitle">Book Title</div>
      <div className="author">Author</div>
      <div className="player">
          <div className="buttons">
              <button className="previous" onClick="previous()"><img src={previous}/></button>
              <button className="play" onClick="playOrpause()"><img src={play}/></button>
              <button className="next" onClick="next()"><img src={next}/></button>
          </div>
          <div className="slider">
              <div className="fill"></div>
              <div className="thumb"></div>
          </div>
      </div>
    </div>
  );
}

export default App;
