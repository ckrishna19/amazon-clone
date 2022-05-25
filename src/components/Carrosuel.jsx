import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carrosuel = () => {
	return (
		<div className="-z-1 md:mx-2">
			<Carousel
				autoPlay={true}
				showArrows={true}
				showThumbs={false}
				infiniteLoop={true}
				showIndicators={false}
				showStatus={false}
				stopOnHover={true}
			>
				<div>
					<img
						alt="banner"
						src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js="
						className="w-full h-[200px] md:h-[70vh] hero-img "
					/>
				</div>
				<div>
					<img
						alt="banner"
						src="https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg"
						className="w-full h-[200px] md:h-[70vh] hero-img "
					/>
				</div>
				<div>
					<img
						alt="banner"
						src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
						className="w-full h-[200px] md:h-[70vh] hero-img "
					/>
				</div>
				<div>
					<img
						alt="banner"
						src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=200"
						className="w-full h-[200px] md:h-[70vh] hero-img "
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Carrosuel;
