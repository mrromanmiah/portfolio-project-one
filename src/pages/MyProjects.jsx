import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MyProjects = () => {
    return (
        <div className="my-10 lg:mx-40 md:mx-20 mx-10">
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
                    <SwiperSlide><img src="https://i.ibb.co/TPzxXT7/enc-Custom.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/QPgxz8j/tour-Custom.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/BKv6CBp/vogue-Custom.jpg" alt="" /></SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default MyProjects;