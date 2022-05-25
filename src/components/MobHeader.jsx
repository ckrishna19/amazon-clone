import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import HorizantalLink from "./HorizantalLink";
const MobHeader = () => {
	return (
		<div className="block md:hidden">
			<div className="bg-gray-900 px-3 text-white">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-x-1">
						<MenuIcon />
						<img src={require("../assest/logo.png")} alt="logo" className="w-14 h10" />
					</div>
					<div className="flex gap-x-1">
						<PersonOutlineOutlinedIcon />
						<ShoppingCartCheckoutOutlinedIcon />
					</div>
				</div>
				<div className="flex items-center bg-white h-8 rounded-lg ">
					<input
						type="text"
						name=""
						id=""
						placeholder="Search Amazon"
						className="focus:outline-none ml-2 flex-1 text-gray-700"
					/>
					<div className="bg-yellow-400 h-8 w-8 flex items-center justify-center rounded-lg">
						<SearchOutlinedIcon />
					</div>
				</div>
				<div className=" text-xs mx-3">
					<HorizantalLink />
				</div>
			</div>
			<div className="flex items-center py-1  bg-gray-700 text-white px-3">
				<AddLocationIcon />
				<p className="text-xs">Delivered to Nepal</p>
			</div>
		</div>
	);
};

export default MobHeader;
