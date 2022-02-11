import { Box, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from './styles.module.css';

import { ContinentCard } from "./ContinentCard";
import NorthAmericaImg from '../../../public/images/Home/Continents/NorthAmerica.jpg';
import SouthAmericaImg from '../../../public/images/Home/Continents/SouthAmerica.jpg';
import AsiaImg from '../../../public/images/Home/Continents/Asia.jpg';
import AfricaImg from '../../../public/images/Home/Continents/Africa.jpg';
import EuropeImg from '../../../public/images/Home/Continents/Europe.jpg';
import OceaniaImg from '../../../public/images/Home/Continents/Oceania.jpg';

export function ChooseContinent() {
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');

  const ImageWidth = useBreakpointValue({
    base: 375,
    sm: 375,
    md: 736,
    lg: 960,
    xl: 1240,
    '2xl': 1240,
  })

  const ImageHeight = useBreakpointValue({
    base: 250,
    sm: 250,
    md: 267,
    lg: 350,
    xl: 450,
    '2xl': 450,
  })

  return (
    <Box
      mt="3.25rem"
      mb="2.5rem"
      mx="auto"
      overflow="hidden"
      w={ImageWidth}
      h={ImageHeight}
    >
      <Swiper pagination={true} navigation={isLargerThan770} modules={[Pagination, Navigation]} className={styles.mySwiper}>
        <SwiperSlide className={styles.swiper_slide}>
          <ContinentCard
            continentName="América do Norte"
            description="Possui a maior ilha do mundo"
            link="North-america"
            image={NorthAmericaImg}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <ContinentCard
            continentName="América do Sul"
            description="Possui a floresta com maior biodiversidade"
            link="South-america"
            image={SouthAmericaImg}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <ContinentCard
            continentName="Ásia"
            description="O maior continente"
            link="Asia"
            image={AsiaImg}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <ContinentCard
            continentName="África"
            description="O continente com mais países"
            link="Africa"
            image={AfricaImg}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <ContinentCard
            continentName="Europa"
            description="O continente mais antigo"
            link="Europe"
            image={EuropeImg}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <ContinentCard
            continentName="Oceania"
            description="O continente mais recente"
            link="Oceania"
            image={OceaniaImg}
          />
        </SwiperSlide>
      </Swiper>
    </Box >
  );
}
