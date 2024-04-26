import p1 from '/p1.jpg'
import p2 from '/p2.avif'
import p3 from '/p3.jpg'
import p4 from '/p4.jpeg'
import p5 from '/p5.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style.css';

// import required modules
import { Pagination } from 'swiper/modules';

const CustomersReview = () => {
    return (
        <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" m-12 ml-12 mr-12 pl-8"
      >
        <SwiperSlide><div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div className='w-16 h-16 rounded-full'>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-16 h-16 rounded-full bg-gray-500 " />
			</div>
			<div>
				<h4 className="font-bold">Leroy Jenkins</h4>
				<span className="text-xs text-gray-400 ">1 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-400">
		<p>Totally professional but authentic first glance of Dhaka. Thanks Rocky! I’m looking forward to doing another tour with Cholo Bangladesh Tours tomorrow, this time it will be all about the food! I’d book with these guys again anytime. Brilliant and fast communication.</p>
	</div>
               </div></SwiperSlide>
        <SwiperSlide><div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div className='w-16 h-16 rounded-full'>
				<img src={p1} alt="" className="object-cover w-12 h-12 rounded-full  bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold"> Kinku sing </h4>
				<span className="text-xs text-gray-400 ">5 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.0</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-400">
		<p>A great few days in the sprawling and overwhelming metropolis of Dhaka. Rocky is generous, street savvy, and listens and anticipates the needs of his clients. The sights were put into context and the food was delicious - and if you`re lucky enough to get a musical interlude, good for you!</p>
	</div>
               </div></SwiperSlide>
        <SwiperSlide><div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  divide-gray-700 bg-gray-900 text-gray-100 ">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div className='w-16 h-16 rounded-full'>
				<img src={p2} alt="" className="object-cover w-12 h-12 rounded-full  bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold"> John Bon </h4>
				<span className="text-xs text-gray-400 ">3 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-400">
		<p>This is the most helpful and supportive tour agency I have come across in Bangladesh. They offer you all ranges of trips, from the least expensive to the most luxurious ones. 
           <br /> I highly recommend them to anyone who is looking for a safe and fun loving trip to any place.</p>
	</div>
               </div></SwiperSlide>
        <SwiperSlide><div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  divide-gray-700  bg-gray-900 text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div className='w-16 h-16 rounded-full'>
				<img src={p3} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">Lahiri </h4>
				<span className="text-xs text-gray-400 ">4 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-400">
		<p>This was a fantastically authentic and local tour of Old Dhaka. I booked a hotel pick-up and the guide, Itman, and driver arrived on time and were very polite. The tour itself used the local rickshaw as our primary means of transportation, which was adventurous and exciting to wind in and out of Dhaka`s roads!</p>
	</div>
               </div></SwiperSlide>
        <SwiperSlide><div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  divide-gray-700  bg-gray-900  text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div className='w-16 h-16 rounded-full'>
				<img src={p4} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500 " />
			</div>
			<div>
				<h4 className="font-bold">Maliha </h4>
				<span className="text-xs text-gray-400 "> 10 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-400">
		<p>I along with my partner, traveled to Sajek Valley, Rangamati, Bangladesh a few days ago. This was by far the best tour of my life. As I was planning for such a tour for a very long time, I went through different travel guide pages and was looking for someone who will arrange the tour in an enjoyable way.</p>
	</div>
               </div></SwiperSlide>
        <SwiperSlide><div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  divide-gray-700 bg-gray-900 text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div className='w-16 h-16 rounded-full'>
				<img src={p5} alt="" className=" rounded-full  bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">William Laca</h4>
				<span className="text-xs text-gray-400 ">7 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-400">
		<p>To my fellow tourists, travellers, photographers, filmmakers and content creators across the world, if you ever are planning on visiting Bangladesh I highly recommend Rocky Hasan and his amazing team of ”Cholo Bangladesh Tours” for your pleasant journey here!</p>
	</div>
               </div></SwiperSlide>
        
       
      </Swiper>
    </>
    );
};

export default CustomersReview;