import React from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
	return (
		<div className="hidden md:block">
			<div className="flex justify-between items-center text-white bg-gray-900 px-4 py-2">
				<div className="flex">
					<img src={require("../assest/logo.png")} alt="" className="w-28 h-12 object-cover cursor-pointer" />
					<div className="flex items-center ml-6 gap-x-2 ">
						<RoomOutlinedIcon className="text-[12px]" />
						<div className="flex flex-col mr-2">
							<p className="text-[10px]">Delivered to</p>
							<strong className="text-[10px]">Nepal</strong>
						</div>
					</div>
				</div>
				<div className="flex-1 flex bg-white text-black mx-4 items-center rounded-md">
					<div className="flex items-center w-14 text-black border-r bg-gray-200 rounded-l-md border-gray-300 h-12  pl-2 cursor-pointer">
						<button className="text-xs">All</button>
						<ArrowDropDownIcon />
					</div>
					<input
						type="text"
						name=""
						id=""
						placeholder="Search Products...."
						className="h-12 placeholder:text-lg focus:outline-none text-black flex-1 text-xl pl-2"
					/>
					<div className="bg-yellow-500 h-12 w-14 flex justify-center items-center rounded-r-md">
						<SearchIcon className=" text-white" fontSize="medium" />
					</div>
				</div>
				<div className="flex items-end gap-x-5 text-xs ">
					<div className="flex items-baseline ">
						<img
							className="w-8 h-6"
							src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
							alt=""
						/>
						<ArrowDropDownIcon />
					</div>
					<div className="flex items-end text-[12px]">
						<div className="flex flex-col">
							<p>Hello, Sign in</p>
							<strong>Account&Lists</strong>
						</div>

						<ArrowDropDownIcon />
					</div>
					<div className="text-[12px] cursor-pointer  ">
						<p>Returns</p>
						<strong>& Orders</strong>
					</div>
					<div className="block cursor-pointer">
						<AddShoppingCartIcon fontSize="large" />
					</div>
				</div>
			</div>
			<div className="flex bg-gray-800 py-2 gap-x-4 text-white items-center px-4">
				<MenuIcon />
				<span className="-ml-4">All</span>
				<p>Today's Deals</p>
				<p>Costumer Service</p>
				<p>Registry</p>
				<p>Gift Cards</p>
				<p>Sell</p>
			</div>
		</div>
	);
};

export default Header;
