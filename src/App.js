import React from "react";

function Food({ fav }) {
  return <h3>I like {fav} </h3>;
}

function App() {
  return (
    <div>
      <h1> Hello </h1>
      <Food fav="kimchi" />
      <Food fav="test" />
      <Food fav="과자" />
      <Food fav="beer" />
      <Food fav="spam" />
    </div>
  );
}

export default App;