import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const HorizantalLink = () => {
	return (
		<>
			<Swiper
				slidesPerView={5}
				spaceBetween={40}
				slidesPerGroup={3}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="flex text-xs py-2">
						<p>Inline</p>
						<span className="text-xs"> Link</span>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="flex text-xs py-2">
						<p>Inline</p>
						<span className="text-xs"> Link</span>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex text-xs py-2">
						<p>Inline</p>
						<span className="text-xs"> Link</span>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex text-xs py-2">
						<p>Inline</p>
						<span className="text-xs"> Link</span>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex text-xs py-2">
						<p>Inline</p>
						<span className="text-xs"> Link</span>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex text-xs py-2">
						<p>Inline</p>
						<span className="text-xs"> Link</span>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
export default HorizantalLink;
