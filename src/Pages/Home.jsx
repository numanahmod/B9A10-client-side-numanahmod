import './Home.css'
import 'animate.css';

import slider1 from '/Saint-Martin.jpg'
import slider2 from '/cox.jpeg'
import slider3 from '/sundorban.jpg'
import { useLoaderData } from 'react-router-dom';

// import { Helmet } from 'react-helmet-async'
// swiper slider 
import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {

    const books = useLoaderData();
    console.log(books);


    //swiper slider
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

    return (
        <div>
           {/* <Helmet>
            <title>Your Dream Home | Home </title>
           </Helmet> */}
            {/* banner */}
           

{/* swiper slider */}
            
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper m-12"
      >
        <div className='m-12 h-96 animate__animated animate__bounce'>
        
        <SwiperSlide className='relative w-full'><div className="hero min-h-screen" style={{backgroundImage: `url(${slider1})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Saint
Martin’s Island </h1>
      <p className="mb-5">Saint Martin Island  is a small island (area only 3 km2) in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox`s Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh.  It is about 8 kilometres (5 miles) west of the northwest coast of Myanmar, at the mouth of the Naf River.</p>
      <button className="btn btn-primary"> Visit </button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide className='relative w-full'><div className="hero min-h-screen" style={{backgroundImage: `url(${slider2})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Cox’s Bazar Sea Beach </h1>
      <p className="mb-5">Cox`s Bazar Beach, one of the most popular tourist attractions in Bangladesh, is the longest uninterrupted natural beach in the world.[1][2] Located 150 km (93 mi) south of the city of Chittagong, </p>
      <button className="btn btn-primary">Visit</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide className='relative w-full'><div className="hero min-h-screen" style={{backgroundImage: `url(${slider3})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Sundarban mangrove forest</h1>
      <p className="mb-5">Sundarbans is the biggest natural mangrove forest in the world, located between Bangladesh and India. The most beautiful part of the Sundarbans consists of Bangladesh and it is 60%.</p>
      <button className="btn btn-primary">Visit </button>
    </div>
  </div>
</div></SwiperSlide>
        
        </div>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>


            {/* Houses */}
            <h1 className='text-center text-2xl font-bold mb-8 animate__animated animate__swing'> Tourists Spots  </h1>

            

        </div>
    );
};

export default Home;