import React from "react";
import "./style.css";

const Gallery = () => {
  const galleryArray = [
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg",
      alt: "cat sleep",
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg",
      alt: "cat eyes sky blue",
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg",
      alt: "black cat",
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg",
      alt: "while cat sleep",
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg",
      alt: "black cat eyes blue",
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg",
      alt: "two cat",
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg",
      alt: "tucked cat",
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg",
      alt: "orange cat",
    },
    {
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
          <img src={value.url} alt={value.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
