import React from "react";
import CartItem from "./components/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/store";

export default function Cart() {
	const cartItem = useAppSelector((state) => state.cartStore);
	return (
		<div
			id="drawer-right-example"
			className="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform duration-300 translate-x-full bg-white lg:w-1/3 sm:w-1/2 dark:bg-gray-800"
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
					<FontAwesomeIcon icon={faClose} />
				</button>
			</div>
			{/* cart header end */}
			{cartItem.totalItem == 0 ? (
				<div className="flex flex-col h-[90%] items-center justify-center">
					<h3 className="text-gray-500 text-xl mb-4">
						Your cart is empty
					</h3>
					<button
						type="button"
						data-drawer-hide="drawer-right-example"
						aria-controls="drawer-right-example"
						className="text-blue-600 p-3 bg-sky-100 rounded"
					>
						Back to store
					</button>
				</div>
			) : (
				<div>
					<ul className="overflow-y-auto h-96">
						{cartItem.itemList.map((item, index) => {
							return <CartItem {...item} key={index} />;
						})}
					</ul>
					{/* item container end*/}
					<div className="p-4">
						<h4 className="text-gray-600 text-sm mb-1">
							Shipping and taxes will be calculated at checkout.
						</h4>
						<div className="flex justify-between mr-3 mb-2 text-gray-900 text-lg">
							<h3 className="">Total</h3>
							<h3 className="">${cartItem.totalPrice}</h3>
						</div>
						<button className=" bg-blue-600 hover:bg-blue-500 py-4 px-4 rounded w-full">
							Checkout
						</button>
					</div>
				</div>
			)}

			{/* checkout container */}
		</div>
	);
}
