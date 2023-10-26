import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow} from 'swiper/modules';

const Home = () => {
  return (
   <main className="home-section mt-28">

    <div className="">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={true}
  //  

 
   
        slidesPerView={3}
 
           breakpoints={{
       480:{
      slidesPerView:1,
    },        
    640: {

      slidesPerView: 3,
      spaceBetween:50
    },
   
    
  }}
        coverflowEffect={{
          slideShadows: false,
          rotate: 0,
          stretch: 80,
          depth: 0,
          modifier: 1,
          scale:.8
        }}
            spaceBetween={200}
        modules={[EffectCoverflow]}
        className="swiper_container"
      >
      <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full h-3/4  md:h-[250px] md:w-[300px] lg:h-[250px] lg:w-[500px] 2xl:w-[700px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='w-full h-3/4  md:h-[250px] md:w-[300px] lg:h-[250px] lg:w-[500px] 2xl:w-[700px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='w-full h-3/4  md:h-[250px] md:w-[300px] lg:h-[250px] lg:w-[500px] 2xl:w-[700px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='w-full h-3/4  md:h-[250px] md:w-[300px] lg:h-[250px] lg:w-[500px] 2xl:w-[700px]'/>
        </SwiperSlide>

      
      </Swiper>
    </div>

     </main>
  )
}

export default Home