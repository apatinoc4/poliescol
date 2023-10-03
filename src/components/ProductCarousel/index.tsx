"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";

const ProductCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <select name="" id="">
        <option value="">Masilla</option>
      </select>

      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div>
            <h3>Polifibra</h3>
            <p>
              La aparición de defectos en medio del proceso de recuperación
              estética puede ser evitados, no es una tarea sencilla, pero a su
              vez no representa...
            </p>
            <button>Descargar ficha Tecnica</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h3>Polifibra2</h3>
            <p>
              La aparición de defectos en medio del proceso de recuperación
              estética puede ser evitados, no es una tarea sencilla, pero a su
              vez no representa...
            </p>
            <button>Descargar ficha Tecnica</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h3>Polifibra3</h3>
            <p>
              La aparición de defectos en medio del proceso de recuperación
              estética puede ser evitados, no es una tarea sencilla, pero a su
              vez no representa...
            </p>
            <button>Descargar ficha Tecnica</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
