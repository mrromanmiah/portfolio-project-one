import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Projects = () => {
  return (
    <div className="mt-20 lg:mx-40 md:mx-20 mx-10">
      <div>
        <h1 className="text-3xl text-[#91ff00] font-bold text-center">Projects</h1>
      </div>

      <div className='my-10'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-lg"
        >
          <SwiperSlide><img src="https://i.ibb.co/YcY3bmf/Asset-1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/pnCQbV4/Asset-3c.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/n12ShDw/Asset-2.png" alt="" /></SwiperSlide>

        </Swiper>
      </div>

    </div>
  );
};

export default Projects;