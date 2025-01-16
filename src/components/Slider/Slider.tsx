
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
//  import "./Slider.css"
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';



// // import required modules
// import { EffectCards } from 'swiper/modules';

// const Slider = () => {
//   return (
  
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
    
//   );
// };

// export default Slider;

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-60 h-80"
      >
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-red-600">Slide 1</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-blue-600">Slide 2</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-green-600">Slide 3</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-orange-600">Slide 4</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-lime-600">Slide 5</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-rose-600">Slide 6</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-green-800">Slide 7</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-blue-800">Slide 8</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-purple-600">Slide 9</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-teal-700">Slide 10</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
