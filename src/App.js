import React from "react";

function Food({ name, image }) {
  return <div>
    <h2> I like {name} </h2>
    <img src={image} />
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "http://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=500:500&_v=20190522090644"
  },
  {
    name: "Samgyeopsal",
    image: "http://cdn.kormedi.com/wp-content/uploads/2020/03/gettyimages-a11229272.jpg"
  },
  {
    name: "Bibimbap",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/440px-Dolsot-bibimbap.jpg"
  },
  {
    name: "Doncasu",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F9909FD3F5CE2883311250C"
  },
  {
    name: "Kimbap",
    image: "http://www.popcornnews.net/imgdata/popcornnews_net/201808/2018083105428569.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} image={dish.image} />)}
    </div>
  );
}

export default App;