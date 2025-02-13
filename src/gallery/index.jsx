import React from "react";
import "./style.css";

const Gallery = () => {
  const galleryArray = [
    {
      id: 1,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg",
      alt: "cat sleep",
    },
    {
      id: 2,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg",
      alt: "cat eyes sky blue",
    },
    {
      id: 3,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg",
      alt: "black cat",
    },
    {
      id: 4,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg",
      alt: "while cat sleep",
    },
    {
      id: 5,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg",
      alt: "black cat eyes blue",
    },
    {
      id: 6,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg",
      alt: "two cat",
    },
    {
      id: 7,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg",
      alt: "tucked cat",
    },
    {
      id: 8,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg",
      alt: "orange cat",
    },
    {
      id: 9,
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg",
      alt: "black cat and gray cat",
    },
  ];

  return (
    <div className="gallery">
      <header className="header">
        <h1>css flexbox photo gallery</h1>
      </header>
      <div className="photo">
        {galleryArray.map((value) => (
          <img src={value.url} alt={value.alt} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
