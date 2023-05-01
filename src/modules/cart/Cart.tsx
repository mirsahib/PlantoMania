import React from "react";
import CartItem from "./components/CartItem";

export default function Cart() {
    

	return (
		<div
			id="drawer-right-example"
			className="fixed top-0 right-0 z-40 h-screen  overflow-y-auto transition-transform duration-300 translate-x-full bg-white lg:w-1/3 sm:w-1/2 dark:bg-gray-800"
			tabIndex={-1}
			aria-labelledby="drawer-right-label"
		>
			<div className="flex flex-row bg-slate-100 p-4">
				<h5
					id="drawer-right-label"
					className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
				>
					Cart History
				</h5>
				<button
					type="button"
					data-drawer-hide="drawer-right-example"
					aria-controls="drawer-right-example"
					className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<svg
						aria-hidden="true"
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
			</div>
			{/* cart header end */}
			<ul className="overflow-y-auto h-96">
				<CartItem />
				<CartItem />
			</ul>
			{/* item container end*/}
			<div className="p-4">
				<h4 className="text-gray-600 text-sm mb-1">
					Shipping and taxes will be calculated at checkout.
				</h4>
				<div className="flex justify-between mr-3 mb-2 text-gray-900 text-lg">
					<h3 className="">Total</h3>
					<h3 className="">$39.00</h3>
				</div>
				<button className=" bg-blue-600 hover:bg-blue-500 py-4 px-4 rounded w-full">
					Checkout
				</button>
			</div>
			{/* checkout container */}
		</div>
	);
}
