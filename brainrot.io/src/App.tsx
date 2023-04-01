import { useState } from 'react';
import './App.css';

function App() {
  const _ids = ["7214464475577978118", "7216831717565385986", "7187800160297078021", "7204542501951212805"];

  return (
    <div className="App">
      <div id="panel">
        {_ids.map((_id) => {
          const embed_src = "https://www.tiktok.com/embed/" + _id;
          return <iframe className="stream" src={embed_src} scrolling="no"></iframe>;
        })}
      </div>
    </div>
  )
};

export default App;
