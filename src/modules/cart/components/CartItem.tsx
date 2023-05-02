import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
	InitialStateType,
	decreaseCart,
	increaseCart,
	removeFromCart,
} from "@/store/cart";
import { useAppDispatch } from "@/store";
import Image from "next/image";

type ICart = InitialStateType["itemList"][0];

export default function CartItem({ product, count, productPrice }: ICart) {
	const dispatch = useAppDispatch();

	const increaseItem = () => {
		if (product) {
			dispatch(increaseCart(product));
		}
	};
	const decreaseItem = () => {
		if (product) {
			dispatch(decreaseCart(product));
		}
	};
	const deleteItem = () => {
		if(product){
			dispatch(removeFromCart(product));
		}
	};

	return (
		<li className="flex flex-col p-4 ">
			<div className="flex flex-row items-center justify-between mb-2">
				<div className="flex flex-row  items-center">
					<div className="w-[12%] mr-5">
						<Image src={product && product.img!=null? product.img:''} width={200} height={200} alt="" />
					</div>
					<h3 className="font-medium text-gray-900 text-lg">
						{product?.name}
					</h3>
				</div>
				<button
					onClick={() => deleteItem()}
					className="text-red-400  hover:text-red-300"
				>
					<FontAwesomeIcon
						icon={faTrash}
						className="bg-red-200 rounded-full p-2"
					/>
				</button>
			</div>
			<h5 className="text-gray-700 text-xs mb-3">Quantity</h5>
			<div className="flex justify-between items-center ">
				<div className="flex basis-1/3 justify-between item-center  p-3 border border-slate-300 text-gray-900">
					<button
						onClick={() => decreaseItem()}
						className="text-blue-700"
					>
						<FontAwesomeIcon
							icon={faMinus}
							size="sm"
							className=" bg-blue-100  rounded-full p-1"
						/>
					</button>
					<p>{count}</p>
					<button
						onClick={() => increaseItem()}
						className="text-blue-700 "
					>
						<FontAwesomeIcon
							icon={faPlus}
							size="sm"
							className=" bg-blue-100 rounded-full p-1"
						/>
					</button>
				</div>
				<div className="flex justify-end basis-[67.7%]">
					<h4 className="text-gray-900 text-sm">${productPrice}</h4>
				</div>
			</div>
			<hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700" />
		</li>
	);
}
