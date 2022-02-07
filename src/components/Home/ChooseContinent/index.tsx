import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import styles from './styles.module.css';

import EuropeImg from '../../../public/images/Europe.jpg';



export function ChooseContinent() {
  return (
    <Box mt="1.25rem" overflow="hidden">
      <Swiper pagination={true} modules={[Pagination]} className={styles.swiper}>
        <SwiperSlide className={styles.swiper_slide}>
          <Image
            src={EuropeImg}
            alt="europe"
            layout="fixed"
            objectFit="cover"
            width={124}
            height={450}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 9</SwiperSlide>
      </Swiper>
    </Box>
  );
}
