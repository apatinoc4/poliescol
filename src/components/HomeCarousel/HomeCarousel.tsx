"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import HomeCarouselSlide from "./HomeCarouselSlide";
import styles from "./homeCarousel.module.scss";
import CustomIcon from "@/components/Icons";

const SLIDE_MESSAGES = [
  {
    message:
      "Si, ese producto es buenísimo hermano, ya ajustamos un año de estar trabajando en esas cubiertas, el primer techo que intervenimos era el techo más malo que había, tenía la teja oxidada del todo que ya prácticamente pasaba al otro lado, le dimos de ese anticorrosivo Pintuco 3 en 1 primero y después le echamos de ese P7 y ese techo está sanitico hermano, ya va un año que empezamos y eso está Sanito sanito.",
    author: "Darwin Urrea",
  },
  {
    message:
      "Eso para esas cubiertas metálicas es lo mejor, y para el concreto, el ladrillo, para impermeabilizar eso queda mucho mejor que el bronco, porque el bronco sale como una tira elástica cuando eso se despega, en cambio esta vaina se aferra mucho a la pared, a cualquier clase de material se adhiere mucho",
    author: "Darwin Urrea",
  },
  {
    message:
      "Un cordial saludo de Ferrecolor el Trébol del departamento de Arauca Arauca, representando la marca Poliescol en nuestro departamento. Hemos tenido la dicha de contar con el apoyo de la empresa Poliescol, en la cual durante estos 2 años hemos crecido en nuestra empresa de una forma muy satisfactoria agregándole un gran valor al reacabado automotriz. Hemos tenido una experiencia muy agradable y una buena receptividad del cliente brindándole confianza con los productos Poliescol.",
    author: "Ferrecolor el Trébol",
  },
];

const HomeCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>();

  const handleClickPrev = () => {
    swiperInstance?.slidePrev();
  };

  const handleClickNext = () => {
    swiperInstance?.slideNext();
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowControl} onClick={() => handleClickPrev()}>
        <CustomIcon icon="arrowLeft" />
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        {SLIDE_MESSAGES.map(({ author, message }, idx) => {
          return (
            <SwiperSlide key={idx}>
              <HomeCarouselSlide author={author} message={message} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.arrowControl} onClick={() => handleClickNext()}>
        <CustomIcon icon="arrowRight" />
      </div>
    </div>
  );
};

export default HomeCarousel;
