import React from "react";
import "../App.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  400: { items: 1 },
};

var items;
const Carousel = () => {
  items = [
    <div>
      <img
        src="https://media.istockphoto.com/photos/happy-diverse-junior-school-students-children-looking-at-camera-in-picture-id1338344319?b=1&k=20&m=1338344319&s=170667a&w=0&h=xc9n5NnjNDp0S_Adt17luHtv7SXFbfluSQ9uqMkVd0s="
        alt=""
        style={{ borderRadius: 10 }}
      />
    </div>,
    <div>
      <img
        src="https://media.istockphoto.com/photos/african-american-girl-raising-her-hands-while-sitting-on-her-desk-in-picture-id1323715308?b=1&k=20&m=1323715308&s=170667a&w=0&h=MeG-_I7iI4HsElwGrxCgMm7P4QkJsWGmwvcrOyYnGlc="
        alt=""
        style={{ borderRadius: 10 }}
      />
    </div>,
    <div>
      <img
        src="https://media.istockphoto.com/photos/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-picture-id1338737959?b=1&k=20&m=1338737959&s=170667a&w=0&h=Wj4IEck0-UYQquyOfnORvotapuarDJ4fABPDm-9ITV0="
        alt=""
        style={{ borderRadius: 10 }}
      />
    </div>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      animationType="fadeout"
      autoPlayInterval={2500}
      animationDuration={1800}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay="true"
      autoPlayStrategy="none"
      infinite="true"
      disableButtonsControls="false"
      disableDotsControls="false"
    />
  );
};

export default Carousel;