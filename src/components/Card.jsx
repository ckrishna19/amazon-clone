import React from "react";

const Card = () => {
	return (
		<div className="bg-gray-900 shadow-lg text-red-500  shadow-gray-200">
			<h3 className="font-bold px-4 pt-5 text-white">Game Assoseries</h3>
			<div className="grid grid-cols-2 mx-4 py-10 gap-1">
				<div className=" bg-gray-300 p-1">
					<img src={require("../assest/headphone.png")} alt="product for head phone" />
					<h4>Head Phone</h4>
				</div>
				<div className=" bg-gray-300 p-1">
					<img src={require("../assest/headphone.png")} alt="product for head phone" />
					<h4>Head Phone</h4>
				</div>
				<div className=" bg-gray-300 p-1">
					<img src={require("../assest/headphone.png")} alt="product for head phone" />
					<h4>Head Phone</h4>
				</div>
				<div className=" bg-gray-300 p-1">
					<img src={require("../assest/headphone.png")} alt="product for head phone" />
					<h4>Head Phone</h4>
				</div>
			</div>
			<button className="ml-4 text-blue-300 font-bold text-[12px] pb-3">Shop Now</button>
		</div>
	);
};

export default Card;
