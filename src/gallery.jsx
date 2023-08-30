import React from "react";
import "./gallery.css";
/*I make the object array every object has img,alt*/
const Gallery = () => {
  const galleryArray = [
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg",
      alt: "cat sleep",
      state: true,
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg",
      alt: "cat eyes sky blue",
      state: false,
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg",
      alt: "black cat",
      state: true,
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg",
      alt: "while cat sleep",
      state: false,
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg",
      alt: "black cat eyes blue",
      state: true,
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg",
      alt: "two cat",
      state: false,
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg",
      alt: "tucked cat",
      state: true,
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg",
      alt: "orange cat",
      state: true,
    },
    {
      url: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg",
      alt: "black cat and gray cat",
      state: false,
    },
  ];
  const stateArray = galleryArray.filter((value) => value.state);

  return (
    <div className="gallery">
      <header className="header">
        <h1>css flexbox photo gallery</h1>
      </header>
      <div className="photo">
        {stateArray.map((value) => (
          <img src={value.url} alt={value.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
