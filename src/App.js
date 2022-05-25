import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

import Card from "./components/Card";
import Header from "./components/Header";
import Carrosuel from "./components/Carrosuel";
import Horizantal from "./components/Horizantal";
import MobHeader from "./components/MobHeader";

function App() {
	return (
		<div>
			<Header />
			<MobHeader />
			<Carrosuel />
			<div className="grid grid-cols-4 gap-x-1 mx-2 md:gap-6 md:mx-6 -mt-10 z-10">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="mx-6 bg-white mt-5 h-52">
				<Horizantal />
			</div>
			<div className="grid grid-cols-4 gap-6 mx-6 mt-5">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="bg-white h-40 mt-5 pt-6 pb-4">
				<div className="border-2 rounded-lg py-2 h-full mx-1"></div>
			</div>
			<div className="bg-gray-700 h-10 flex justify-center items-center">
				<button className="text-white focus:outline-none" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
					Back to top
				</button>
			</div>
			<div className="bg-gray-800 h-96 border-b border-gray-600">bottom</div>
			<div className="bg-gray-900 h-96">footer</div>
		</div>
	);
}

export default App;
