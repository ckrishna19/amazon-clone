import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Horizantal = () => {
	return (
		<>
			<Swiper
				slidesPerView={7}
				spaceBetween={10}
				slidesPerGroup={3}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: false,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>

				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="p-1 rounded-[25px]"
						src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="scroll"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
export default Horizantal;
