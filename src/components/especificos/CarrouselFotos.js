"use client";

import { useEffect, useState } from "react";
import estilo from "./styles/CarrouselFotos.module.css";
import { useSpringCarousel } from "react-spring-carousel";

function CarrouselFotos({ datos }) {
  const [indiceFoto, setIndiceFoto] = useState(0);
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    getCurrentActiveItem,
  } = useSpringCarousel({
    itemsPerSlide: 1,
    withLoop: true,
    disableGestures: false,
    items: datos.fotos.map((e, i) => ({
      id: i,
      renderItem: (
        <div className={estilo.foto}>
          <img src={e.url} alt={e.nombre} draggable={false} />
        </div>
      ),
    })),
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     slideToNextItem();
  //     getIndice();
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, []);

  function getIndice() {
    const activeItem = getCurrentActiveItem();

    setIndiceFoto(activeItem.id);
  }

  console.log(indiceFoto);

  return (
    <div className={estilo.carrousel_fotos} onClick={() => console.log(true)}>
      {carouselFragment}
    </div>
  );
}

export default CarrouselFotos;
